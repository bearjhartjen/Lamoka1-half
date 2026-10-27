# Remi Wu email draft (send after the Mouser checkout completes)

Subject: T-1N12W1065266A — consigned component kit arriving in one Mouser box

Hi Remi,

One parcel is coming for assembly **T-1N12W1065266A**:

**Mouser box — the consigned kit.** Order # <paste after checkout>,
68 lines, customer part numbers T1N12-01 … T1N12-68. Everything the board
needs is in this one box, including the five addressable RGB LEDs (D1–D5,
Inolux IN-PI55TATPRPGPB, a WS2812B-compatible 5050 with the same pinout).

The attached customs spreadsheet matches the Mouser invoice line for line
(same part numbers, quantities and unit prices). The "Customer Part Number"
column equals Mouser's packing list, so please pass it to the broker as-is.
Please write **T-1N12W1065266A** on the carton and in the shipment notes.

**Pick-and-place: use the 114-row file**, `Lamoka1-half Pick and Place
(assembly, DNP J1 J2).csv`. It includes D1–D5. Ignore the earlier 109-row
file.

**Important: the boards fabricated for this job are the package we sent on
20 Oct — the earlier revision. We know what is on them, and the customs
spreadsheet's notes already match this revision; please follow the notes, not
any older stored BOM or quote file. Specifically:**

- Only **J1 and J2** stay unpopulated — the two WAGO lever terminal blocks
  (transformer interface and DC input). We fit those by hand at final
  assembly, so please leave the pads clean and free of solder.
- **D1–D5** are populated from the Mouser box: five fitted, five spare.
  They are Inolux IN-PI55TATPRPGPB, 5050 PLCC-4, a WS2812B-compatible part.

  **Orientation:** place each LED with its **chamfered corner on the
  footprint's silkscreen chamfer** (the pad-3 / GND corner). Inolux's 2023
  datasheet (v1.5) numbers the pins 1 = GND, 2 = DOUT, 3 = DIN, 4 = VDD, but
  that figure is the 2018 figure rotated 180° with new numbers — the physical
  part is unchanged, and VDD is still the pad diagonally opposite the
  chamfer. Placing to the 2023 pin numbers would reverse the parts. Reversed
  supply is protected, so nothing burns; they simply do not light.
- **C12 and C13 both get a 10 uF 0402** on this board revision; use part
  T1N12-14 for **both** positions.
- **Rsense1 gets the 1206 shunt from line T1N12-68** (2 mΩ, 1 W, 1206).
  The **2512** shunts of line T1N12-30 go **only at RCS1** — its land is
  2512, and the 2512 part will not fit the 1206 land at Rsense1.
- **These positions have no pads on the boards we sent, so please leave them
  unpopulated and tell me rather than force anything:**
  - **C13** is a 0402 land here — do not place the 22 µF tantalum of
    T1N12-59 at it (that part is a spare).
  - **C34, C36** (the 10 uF 0805 gate-driver bypasses) and **C35, C37** have
    no pads on this revision. Those parts are spares.
- **J3 (USB-C)** is a GCT `USB4105-GF-A` on an HRO `TYPE-C-31-M-12` land
  pattern. The contact row sits 0.365 mm back along a 1.45 mm pad and the
  four shell stakes land within 0.025 mm, so it solders, but please give the
  first one a look under the scope: contact row wetted, both shield stakes
  wetted, both pegs seated.
- Everything else in the 114-row pick-and-place is populated as listed.

Please confirm the Mouser box arrived complete before assembly starts.

Thanks,
Bear (Flamingo & Cactus)
