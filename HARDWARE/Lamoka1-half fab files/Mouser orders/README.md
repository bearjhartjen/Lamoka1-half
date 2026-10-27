# Mouser order — the Lamoka1/2 consigned kit

**27 Oct 2026. One supplier, one order, one box. 68 lines, merchandise
$167.41, every line "Ships Now" for its full ordered quantity.**
Share link: `CART_SHARE_LINK.txt` (AccessID `02a65a19a3`).

**`T1N12-68` is the boost converter's current-limit shunt and the board
cannot be brought up without it** — see "Open items". It rides in the cart
as YAGEO `PA1206FRF470R002Z` (2 mΩ 1 % 1 W 1206, ×3, $0.82), substituting
the long-lead Stackpole `708-CSNL1206FT2L00` (same value, package, power
and tolerance; TCR 100 ppm vs 50 ppm). Nothing needs adding at checkout.

The DigiKey order (sales orders 102445691 + 102445690, $237.10) was cancelled
2026-10-26 after it sat in "credit card pending" hold loops for three days with
PCBWay waiting. The kit was re-sourced entirely from Mouser and ships direct to
PCBWay's Hangzhou address. The LCSC second-parcel plan for the LEDs was dropped
once a Mouser part that fits the board was found; `../LCSC order/` is obsolete.

PCBWay has already finished the bare PCBs and is waiting only for components
(Remi, 26 Oct). Assembly is express, so this box is the only remaining lead
time before the 14 Nov fair.

## The kit

68 lines, customer part numbers `T1N12-01` … `T1N12-68`. It covers every
placement on the board except **J1** and **J2**.

- **D1–D5 are in the box.** Inolux `IN-PI55TATPRPGPB` (Mouser
  `743-IN-PI55TATPRPGPB`), 66,401 in stock, $0.422 at qty 10. It is a 5050
  PLCC-4 addressable RGB with the WS2812B pinout (1 = VDD, 2 = DOUT, 3 = VSS,
  4 = DIN) and the same 800 kbit/s, 24-bit GRB protocol. Datasheet pads are
  at ±2.2 / ±1.6 mm, 1.0 × 1.0 mm against the board's ±2.45 / ±1.65 mm,
  1.5 × 0.9 mm, giving about 90 % pad overlap; the part self-centres with a
  +0.25 mm X and +0.05 mm Y offset. Ten pieces: five fitted, five spare.

  **Orientation — read this before you think the pinout is wrong.** Inolux's
  2018 sheet (v1.1) and the 2023 sheet (v1.5) describe the *same physical
  part*, but v1.5's figure is the 2018 figure rotated 180° and the pins are
  renumbered to match: v1.1 says 1 = VDD, 2 = DOUT, 3 = VSS, 4 = DIN;
  v1.5 says 1 = GND, 2 = DOUT, 3 = DIN, 4 = VDD. Rotating v1.5's figure by
  180° reproduces v1.1 pad for pad. In both, VDD is the pad **diagonally
  opposite the chamfered corner**, and the chamfered corner is the ground
  pad. The board's footprint is the standard WS2812B land pattern: its
  silkscreen chamfer sits on pad 3, which is the GND net, so the part is
  correct when the chamfer lands on the footprint's chamfer. **Do not rotate
  the LEDs to match the 2023 pin table** — that would reverse them. Reversed
  supply is protected (no damage, no light), so a mistake costs a rework, not
  a part.
- **C34/C36 are in the box but have no pads on the fabricated boards.** They
  ride in the box as spares — see "Open items", which answers the revision
  question for good.
- Spares are included on the lines that carry a realistic loss risk (the small
  0402/0603 parts, the LEDs, the semiconductors). Bulk and expensive lines are
  bought at board quantity only. The customs sheet is the exact cart.

Not in the box:

- **J1** `2606-1108/010-000` and **J2** `2606-1352` are not listed on Mouser,
  and no in-stock Mouser terminal block matches their pin pattern (J1 is an
  8-pad two-row stagger, 7.5 mm pitch, 12.5 mm row spacing; J2 is 2-pole
  double-pinned, 12.5 mm). Both stay DNP and the transformer and battery leads
  hand-solder to the pads at final assembly.
- Transformer, fan, NEMA outlet, thermal pads and hardware — always a separate
  final-assembly shipment.

## Substitutions against the board BOM

| Ref | Board BOM | In the box | Why / effect |
| --- | --- | --- | --- |
| IC1 | INA240A2DR (50 V/V) | **INA240A1DR** (20 V/V) | The A2 is out of stock until Feb 2027 and the A3 clips at 16.5 A, below the ~20 A battery-current crest at rated load. The A1 gives 0.04 V/A and 82.5 A full scale. `INA240_V_PER_A` is now `0.04f`, `IIN_WARN` 22 A, `IIN_TRIP` 26 A (all below the LM5122's 37.5 A peak limit). |
| U7 | TPS62160DSGR | **TPS62160QDSGTQ1** | Same adjustable die, same DSG package; only AEC-Q100 and reel size differ. R20/R19 = 953 k / 180 k gives 5.04 V from the 0.8 V reference. |
| Coutx1 | C3216X5R1V226M160AC (22 µF **35 V**) | **CC1206MKX5R8BB226** (22 µF **25 V**) | No in-stock 35 V 22 µF 1206. 21.75 V is 87 % of rating; the 540 µF polymer bank carries the bulk. Accepted, recorded. |
| C24 | TMK212BBJ106KG-T (10 µF **25 V**) | **TMK212BBJ106MG8T** (10 µF **25 V**) | Same voltage; ±10 % → ±20 % and a reel suffix. The earlier "6.3 V board defect" note was wrong: `TMK` is Taiyo Yuden's 25 V code. |
| C11 | GRM31CR61A107MEA8K | **GRM31CR61A107MEA8L** | Same 100 µF 10 V 1206 X5R die; K/L are reel/plating variants. On the 5 V rail, 50 % of rating. |
| Cin1 | 20SVPF56MX (56 µF 20 V) | **25SVPF27MX** (27 µF 25 V) | Same 5 × 5.9 mm can, 40 mΩ. Input ripple ~1.3 A against a 2.45 A rating; bus ripple rises from ~20 mV to ~40 mV. |
| Q1/Q2 | CSD17304Q3 | **CSD17308Q3** | Same DQG0008A 30 V land pattern; Rds(on) 9.4 mΩ vs 7.5 mΩ, about +50 mW at 5 A. |
| U2 | AMS1117-3.3 | **LD1117S33TR** | Pin-compatible SOT-223 LDO; C13's 22 µF tantalum already matches its datasheet. |
| X1 | BOM prose said 27.12 MHz | **ABM8-272-T3**, 12.000 MHz, 10 pF | The part number and the RP2354A both need 12 MHz; the BOM prose is the error. The 15 pF load caps are correct for a 10 pF crystal. |
| J3 | TYPE-C-31-M-12 (HRO) | **USB4105-GF-A** (GCT) | Both 16-pin USB-C 2.0 top-mount. Against the board's HRO footprint the four shell stakes land within 0.025 mm and the contact row sits 0.365 mm back along the 1.45 mm pad, so about 81 % of the lead length is on copper. It solders and it holds; inspect the first joint under the scope. |
| R33/R25 | 22.1 Ω / 36.5 kΩ | RC0603FR-0722RL / CRCW060336K5FKEA | Accepted value/part swaps (22 Ω is the BOM's own value). |
| C26, C25, C12, C17–C19, C14–C16, C1–C5, C31/C35/C37, C22/C23, R8/R9/R26/R28/R30/R32 | various | see the customs sheet | Equivalent package/value/rating swaps, all in stock at order time. |

Two further deviations are accepted without changing the part, because the
effect is inside the design margin:

- **Rfbb1 is 3.83 kΩ, not 3.79 kΩ.** The bus setpoint becomes
  `1.2 × (1 + 64.9/3.83) = 21.53 V` instead of 21.749 V — 1 % low, inside the
  ±0.90 V start window (20.85–22.65 V). Modulation index at 100 W rises by
  about 0.01 against the 0.9597 clamp.
- **Ccomp2 is 47 pF, not 44.8 pF.** The compensation's HF pole moves from
  about 44 kHz to 42 kHz. Inside the 80° phase-margin design.

## Open items (not sourcing problems)

1. **Which PCB revision was fabricated — ANSWERED 27 Oct 2026.** The ZIP
   submitted to PCBWay (`PCBway files/Lamoka1-half-PCBWay-submitted-2026-10-20.zip`)
   holds the 19 Oct gerbers, which are the working tree of commit `a6ab12d`
   ("Improvements to general Lamoka1/2", 19 Oct 18:45). The audit fixes landed
   the next morning (`4e9db5a`, "Fixes to meet claims"). Git confirms the
   fabricated copper differs from the current board in exactly these five
   things, and the kit is built around them:
   - **`C34`, `C35`, `C36`, `C37` do not exist** on the fabricated boards. The
     two 10 µF gate-driver bypasses (C34/C36) and the two 100 nF positions
     (C35/C37) cannot be filled; those parts ride as spares. The assembly is
     otherwise complete.
   - **`Rsense1` is a 1206 land** on the fabricated boards (the 2512 move is
     20 Oct work). This is why `T1N12-68` (`CSNL1206FT2L00`, 2 mΩ 1 W 1206)
     was added to the order — the boost's current-limit shunt is unfilled
     otherwise, and the converter does not regulate without it. The 2512
     pieces of `T1N12-30` go **only at `RCS1`** (its land is 2512 on both
     revisions). The 1206 shunt's derating (AGENTS.md: 68 % of rating at
     120 °C ambient) is the pre-audit condition; bring up at reduced power
     first, per `HARDWARE/BRINGUP.md`.
   - **`C13` is a 0402 land** on the fabricated boards; it carries the board's
     own 10 µF X5R MLCC. The 3216 tantalum of the same value cannot land, so
     `T1N12-59` rides as spares, and line `T1N12-14` (6.3 V 10 µF 0402, ten
     pieces) fills **both `C12` and `C13`** on the fabricated revision. Both
     positions sit on the 5 V and 3.3 V rails, so 6.3 V is the right rating.
     The near-zero-ESR MLCC on the AMS1117/LD1117 output stays the known
     stability risk — watch the 3.3 V rail at the scope during the first
     energisation.
   - **`Q1`'s land is `DQG0008A` on the fabricated boards too** (only the Oct-19
     BOM text said `CSD16323Q3`); the `CSD17308Q3` pieces fit as documented.
   - **`J5` pins 3/4 sit on `GND`** in the fabricated copper (the `J5 → /PE`
     isolation is a 20 Oct schematic edit, not in these boards). This is a
     bring-up/enclosure decision, not assembly work: until that decision is
     made, treat the outlet as Class II — leave the outlet earth unbonded at
     the harness and do not rely on this board to carry it. Nothing in the kit
     changes it.
   Every other refdes is present, land-identical and net-identical (verified
   pad by pad, 115 refs against the fab state).
2. **PCBWay's stored BOM is the Oct-19 revision** (`T-1N10W1065266A…xls`, which
   shows e.g. `CSD16323Q3`, the 43.2 k/45.3 k dividers, 25 V `Cout1–3` and the
   1206 `Rsense1`). It only matters as history: assembly works from the 114-row
   CPL **and the consigned kit**, which realises the 20 Oct values (68 k
   dividers, 64.9 k/3.83 k feedback, 35 V `Cout1–3`, the Oct-20 compensation
   network) on the same lands. Remi has been told the customs sheet governs.
3. **C12** (`CL05A106MQ5NUNC`, 10 µF 0402) sits on the 5 V rail. The kit's 6.3 V
   replacement carries the same 79 % margin as the 25 V original did at 20 V —
   it is a bypass cap and works; a later revision should use a 10 V part.
4. **The power stage has never been energised.** Everything in this kit makes
   the board assemblable and the firmware consistent with the parts; the
   bring-up sequence in `HARDWARE/BRINGUP.md` still governs first power-on,
   together with the fabrication-revision caveats in item 1.

## Files

Authoritative:

- `CART_SHARE_LINK.txt` — the link and the checkout instructions.
- `PCBWay_T-1N12W1065266A_components_mouser.csv` — 68 lines, $167.41. Customs sheet; matches the cart line for line on part number,
  quantity, unit price, country of origin and HS code once `T1N12-68` is added
  at checkout.

**Reading the part-number columns.** The "Mouser Part Number" column is
Mouser's own orderable number, which is often an abbreviation of the
manufacturer code — `81-GRM36X333K10` is Murata `GRM155R71A333KA01D` (0402,
33 nF), `358-SC1511` is Raspberry Pi `SC1511-A4` (RP2354A0A4),
`595-SNAHCT1G125DBVR` is `SN74AHCT1G125DBVR`. Those are read live from the
cart and are correct as shipped; do not "fix" them to look like the MPN. The
"Manufacturer Part Number" column is the manufacturer's exact code and is the
one to quote to PCBWay and to the broker. One cart line displays
`603-CC1206MKX58BB226` where the sheet carries `603-CC1206MKX5R8BB226`; the
MPN `CC1206MKX5R8BB226` is identical on both, so the part is unambiguous.
- `mouser_bom_upload_final.csv` — 68 lines, fallback BOM upload.
- `mouser_quick_order_final.tsv` — 68 lines, part number ⇥ quantity.

Historical / superseded, kept only for the record: `mouser_bom_tool_final.csv`,
`mouser_bom_upload.csv`, `mouser_quick_order.tsv`,
`mouser_cart_manifest_2026-10-26.csv`, `mouser_cart_final_console.js`,
`add_to_mouser_cart_console.js`, `newark_side_order.md`, and the whole
`../LCSC order/` folder (the abandoned second parcel).

## Placing the order

1. Log in at mouser.com, open the link in `CART_SHARE_LINK.txt`, **Select All
   Parts**, **Buy selected items**. All 68 lines land in your cart with their
   customer part numbers (T1N12-01 … T1N12-68). Confirm the line count reads
   68 before paying — nothing needs adding.
2. (Fallback only, if `T1N12-68` ever goes unstocked: Stackpole
   `708-CSNL1206FT2L00`, or LCSC `C247904` as a separate domestic-China
   parcel to the same Hangzhou address — same 2 mΩ 1 W 1206.)
3. Ship to Remi Wu, Room 902, Building C, Ruiqin Business Center, No. 223
   Shenban Road, Shangtang Street, Gongshu District, Hangzhou 310000, Zhejiang,
   China, tel +86-571-86996582. DHL or FedEx International Priority, and put
   **T-1N12W1065266A** in the shipment notes and on the carton.
4. The "Estimated Tariff" column is a US-import estimate and does not apply to
   a China shipment. The declared value is the merchandise total,
   $167.41.
5. Pay, keep the order and tracking numbers, and send Remi
   `remi_email_draft.md` with those numbers filled in.
6. Send PCBWay the **114-row** `Lamoka1-half Pick and Place (assembly, DNP J1
   J2).csv`, which includes D1–D5. The 109-row file is superseded.

## How the cart was built

Mouser's BOM tool hit a per-account daily processing quota and the cart page
was unreliable, so the cart was populated through Mouser's own cart endpoints
from a browser session: `POST /en/Cart/Cart/AddCartItem`,
`POST /en/Cart/Cart/UpdateCartItem?cartItemId=…&quantity=…`,
`GET /en/Cart/Cart/RemoveCartItem?cid=…`, and `GET /en/Cart/Cart/Share` for the
AccessID. Availability was read per line and compared against the ordered
quantity, not just tested for the string "Ships Now": a line reading
"5 Ships Now / 5 Backordered" passes a naive check and fails this one. That is
how the CSD19536KCS line was caught and cut from 10 to 5.

## Verification of the final cart (27 Oct 2026)

The 68-line cart was verified live at the share link (AccessID `02a65a19a3`),
rebuilt 27 Oct 2026 after the previous cart was emptied:

| Check | Result |
| --- | --- |
| Lines | **68** verified, T1N12-01 … T1N12-68, one line each, no duplicates |
| Quantities | every line matches the customs sheet (27 re-added lines briefly read
double and were set back with UpdateCartItem before sharing) |
| Sum of "Ships Now" quantities | **429** verified, every line "Ships Now" for its full ordered quantity |
| Lines with any backorder | **0** |
| Merchandise total | **$167.41** verified |
| `INA240A1DR` present / `INA240A3DR` absent | yes / yes |
| D1–D5 line present | yes, qty 10 |
| `T1N12-68` 1206 shunt present | yes, YAGEO `PA1206FRF470R002Z` ×3 |
| J1 / J2 present | no, by design |

Customs sheet checked row by row: quantity × unit price equals the extended
price on all 67 verified rows; every row has a country of origin and an HS
code; the sheet, `mouser_bom_upload_final.csv` and
`mouser_quick_order_final.tsv` agree on part number and quantity for all 68
lines after the add. **One mismatch this audit found and fixed in the sheet:
the descriptions on four rows pointed at the current design, not the
fabricated boards** (`C12` → C12+C13; `RCS1,Rsense1` → RCS1 only + new
T1N12-68; C13 tantalum and C34/C36 rows are spares). The parts and quantities
were already right.

HS codes were audited against part type. Four were corrected: U1 (RP2354A) from
an automatic-data-processing heading to `8542.31.0000`, J3 (USB-C socket) from
an insulated-wire heading to `8536.69.4040`, the 2 mΩ shunt from the
over-20 W resistor heading to `8533.21.0030`, and the LM5122/UCC27735 from the
amplifier heading to `8542.39.0001`.
