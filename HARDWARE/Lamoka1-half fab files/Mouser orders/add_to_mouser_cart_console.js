// Lamoka1/2 consigned kit -> Mouser cart (66 lines, all verified in stock 2026-10-26)
// 1. Log in at mouser.com and open https://www.mouser.com/en/Cart/
// 2. DevTools -> Console, paste this whole file, press Enter
// 3. Type:  addKit()
// Every line is added with its customer part number (T1N12-nn) so the packing
// list ties to the customs spreadsheet line for line.
const KIT = `
T1N12-01	CL05C150JB5NNNC	10
T1N12-02	KGM21NR71E104KT	2
T1N12-03	25SVPF27MX	2
T1N12-04	2604-1103	2
T1N12-06	35SVPK180M	4
T1N12-07	ABM8-272-T3	2
T1N12-08	ADS7128IRTER	2
T1N12-09	LD1117S33TR	2
T1N12-10	AOTA-B201610S3R3-101-T	2
T1N12-11	B3F-4055	3
T1N12-12	C1005X5R1V474K050BC	10
T1N12-13	C1206C475K5RACTU	2
T1N12-14	CGA4F1C0G2A153J085AE	10
T1N12-15	04026D106MAT2A	10
T1N12-16	CC0402KRX7R7BB104	10
T1N12-17	CL10A105KB8NNNC	10
T1N12-18	C0603C475K8PACTU	10
T1N12-19	CC0603KRX7R9BB104	10
T1N12-20	CC0603KRX7R7BB104	10
T1N12-21	CL10B473KB8NNNC	10
T1N12-22	CRCW0402100KFKED	10
T1N12-23	CRCW040218K2FKED	10
T1N12-24	RC0402FR-073K83L	10
T1N12-25	CRCW04023R01FKED	10
T1N12-26	CRCW040249K9FKED	10
T1N12-27	CRCW040264K9FKED	10
T1N12-28	CRCW04027K15FKED	10
T1N12-29	CSD17308Q3	3
T1N12-30	CSD19536KCS	5
T1N12-31	CSNL2512FT1L00	2
T1N12-32	CSNL2512FT2L00	3
T1N12-33	CL05C470JB5NNNC	10
T1N12-34	GRM155R71A333KA01D	10
T1N12-35	C0805C105K5RACTU	10
T1N12-36	C1206C107M9PACTU	2
T1N12-37	CC1206KKX5R6BB226	2
T1N12-38	INA240A3DR	2
T1N12-39	LM5122MHX/NOPB	2
T1N12-40	MSAST21GAB5475MTNA01	2
T1N12-41	PA4332.222NLT	2
T1N12-42	RC0201FR-0749K9L	10
T1N12-43	RC0201FR-0780K6L	10
T1N12-44	RC0402FR-071KL	10
T1N12-45	CRCW060310K0FKEA	10
T1N12-46	RC0603JR-070RL	10
T1N12-47	RC0603FR-0722RL	10
T1N12-48	RC0603FR-0727RL	10
T1N12-49	RC0603FR-07330RL	10
T1N12-50	RC0603FR-0733RL	10
T1N12-51	CRCW060336K5FKEA	10
T1N12-52	RC0603FR-074K7L	10
T1N12-53	RC0603FR-075K1L	10
T1N12-54	RC0603FR-0768KL	10
T1N12-55	RC1206FR-0710RL	10
T1N12-56	SC1511-A4	2
T1N12-57	SN74AHCT1G125DBVR	2
T1N12-58	SS14-E3/61T	8
T1N12-59	T491A226K010AT	2
T1N12-60	TMK212BJ474KD-T	2
T1N12-61	TMP235A2DBZR	3
T1N12-62	TPS62163DSGT	2
T1N12-63	USB4105-GF-A	3
T1N12-64	UCC27735DR	3
T1N12-65	IN-PI554FCH	8
T1N12-66	XAL1580-182MED	2
T1N12-67	C2012X5R1E106M125AB	6
`.trim();

async function addKit() {
  const getTok = async () => {
    const h = await (await fetch('/en/Cart/', {headers: {'X-Requested-With': 'XMLHttpRequest'}})).text();
    const m = h.match(/name="__RequestVerificationToken" type="hidden" value="([^"]+)"/);
    if (!m) throw new Error('antiforgery token not found - are you on mouser.com/en/Cart/?');
    return m[1];
  };
  const tok = await getTok();
  const lines = KIT.split('\n').map(l => l.split('\t'));
  const ok = [];
  const fail = [];
  for (const [ref, pn, qty] of lines) {
    const fd = new URLSearchParams();
    fd.append('__RequestVerificationToken', tok);
    fd.append('PartNumber', pn);
    fd.append('CustPartNumber', ref);
    fd.append('Qty', qty);
    fd.append('btnAtc', 'Add');
    try {
      const r = await fetch('/en/Cart/Cart/AddCartItem', {method: 'POST', body: fd, headers: {'X-Requested-With': 'XMLHttpRequest'}});
      const t = await r.text();
      if (r.status === 200 && !/Error Occurred/.test(t)) ok.push(ref); else fail.push(ref + ' ' + pn + ' HTTP' + r.status);
    } catch (e) { fail.push(ref + ' ' + pn + ' ' + e); }
  }
  console.log('ADDED ' + ok.length + ' of ' + lines.length);
  if (fail.length) console.log('FAILED:', fail);
  console.log('Reload the cart page, check the line count, the Quantity column and the Customer # column.');
  return {added: ok.length, of: lines.length, fail: fail};
}
console.log('Ready. Run addKit() to add all ' + lines.length + ' lines.');
