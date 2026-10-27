// COMPLETE corrected Mouser cart for Lamoka1/2 — 70 lines, all 70 BOM lines covered
// Paste into DevTools Console on mouser.com/en/Cart/ (logged in), then run: addKit()
const KIT = `
CL05C150JB5NNNC	10
KGM21NR71E104KT	3
25SVPF27MX	2
2604-1103	2
2606-1108/010-000	1
35SVPK180M	4
ABM8-272-T3	2
ADS7128IRTER	2
LD1117S33TR	2
AOTA-B201610S3R3-101-T	2
B3F-4055	3
C1005X5R1V474K050BC	10
C3216X5R1V226M160AC	2
CGA4F1C0G2A153J085AE	10
04026D106MAT2A	10
CC0402KRX7R7BB104	10
CL10A105KB8NNNC	10
C0603C475K8PACTU	10
CC0603KRX7R9BB104	10
CC0603KRX7R7BB104	10
CL10B473KB8NNNC	10
CRCW0402100KFKED	10
CRCW040218K2FKED	10
RC0402FR-073K83L	10
CRCW04023R01FKED	10
CRCW040249K9FKED	10
CRCW040264K9FKED	10
CRCW04027K15FKED	10
CSD17308Q3	3
CSD19536KCS	5
CSNL2512FT2L00	3
CL05C470JB5NNNC	10
GRM155R71A333KA01D	10
C0805C105K5RACTU	10
MSAST21GAB5475MTNA01	2
GRM31CR61A107MEA8K	2
CC1206KKX5R6BB226	2
INA240A2DR	2
LM5122MHX/NOPB	2
PA4332.222NLT	2
RC0201FR-0749K9L	10
RC0201FR-0780K6L	10
RC0402FR-071KL	10
CRCW060310K0FKEA	10
RC0603FR-07180KL	2
CRCW0402953KFKED	2
RC0603FR-0722RL	10
RC0603FR-0727RL	10
RC0603FR-07330RL	10
RC0603FR-0733RL	10
CRCW060336K5FKEA	10
RC0603FR-074K7L	10
RC0603FR-075K1L	10
RC0603FR-0768KL	10
RC1206FR-0710RL	10
SC1511-A4	2
SK215ATR	2
SS14-E3/61T	8
SN74AHCT1G125DBVR	2
T491A226K010AT	2
TMK212BBJ106KG-T	2
TMK212BJ474KD-T	2
TMP235A2DBZR	3
TPS62160DSGR	2
USB4105-GF-A	3
UCC27735DR	3
WS2812B-B	8
XAL1580-182MED	2
WSC01C150J500NT	10
RC0603JR-070RL	10
`.trim();

async function addKit() {
  const getTok = async () => {
    const h = await (await fetch('/en/Cart/', {headers: {'X-Requested-With': 'XMLHttpRequest'}})).text();
    const m = h.match(/name="__RequestVerificationToken" type="hidden" value="([^"]+)"/);
    if (!m) throw new Error('antiforgery token not found');
    return m[1];
  };
  const tok = await getTok();
  const lines = KIT.split('\n').map(l => l.split('\t'));
  const ok = []; const fail = [];
  for (const [pn, qty] of lines) {
    const fd = new URLSearchParams();
    fd.append('__RequestVerificationToken', tok);
    fd.append('PartNumber', pn);
    fd.append('CustPartNumber', '');
    fd.append('Qty', qty);
    fd.append('btnAtc', 'Add');
    try {
      const r = await fetch('/en/Cart/Cart/AddCartItem', {method:'POST', body: fd, headers:{'X-Requested-With':'XMLHttpRequest'}});
      const t = await r.text();
      if (r.status === 200 && !/Error Occurred/.test(t)) ok.push(pn); else fail.push(pn + ' HTTP' + r.status);
    } catch (e) { fail.push(pn + ' ' + e); }
  }
  console.log('ADDED ' + ok.length + ' of ' + lines.length);
  if (fail.length) console.log('FAILED:', fail);
  console.log('Reload the cart page to verify.');
  return {added: ok.length, of: lines.length, fail};
}
console.log('Ready. Run: addKit()');
