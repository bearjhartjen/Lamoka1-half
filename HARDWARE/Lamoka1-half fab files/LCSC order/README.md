# LCSC order — D1–D5 addressable LEDs (one small envelope to PCBWay)

The five addressable LEDs are the one part of the board that Mouser cannot
supply in stock. They are a standard Worldsemi WS2812B, LCSC carries 310 000+
of them, and LCSC ships from Shenzhen — so this parcel is **domestic to
PCBWay**: no customs, no broker, a few days door to door. It will reach
Hangzhou before the Mouser box does, so it costs no schedule.

## What to order

| | |
| --- | --- |
| LCSC part | **C114586** |
| MPN | **WS2812B-B/W** (Worldsemi) |
| Package | SMD 5050-4P |
| Quantity | **10** (board needs 5; MOQ 5, order multiple 5 — this is two spare sets) |
| Price | $0.1048 each at 5+, so **$1.05** for 10 |
| Stock at time of writing | 310 635 |
| HS code (CN) | 8541.41.0090 |
| Country of origin | China |

Product page: <https://www.lcsc.com/product-detail/C114586.html>

**Why this part and not the Adafruit/SparkFun/Inolux ones.** The board's
footprint is `LED_WS2812B_PLCC4_5.0x5.0mm_P3.2mm`, pads at (±2.45, ±1.65) mm —
the standard WS2812B land pattern. The netlist is pad 1 → `5V`, pad 2 → `DOUT`
to the next LED, pad 3 → `GND`, pad 4 → `DIN`, which is exactly the WS2812B
pin table (datasheet V5: 1 VDD, 2 DOUT, 3 VSS, 4 DIN). C114586 is that part,
from the original manufacturer, in the original package. The Inolux
`IN-PI554FCH` was rejected earlier because its pads sit at ±2.2/±2.0 mm and do
not land on this footprint.

## Where it ships

Same consignee as the Mouser box:

```
Remi Wu
Room 902, Building C, Ruiqin Business Center
No. 223 Shenban Road, Shangtang Street
Gongshu District, Hangzhou 310000, Zhejiang, China
Tel +86-571-86996582
Reference: T-1N12W1065266A
```

Write **T-1N12W1065266A** in the order reference/notes field and on the
envelope, the same as the Mouser box. Send the tracking number to Remi with
the note that it is the LED envelope for the same assembly order.

## Declaration

A domestic China parcel has no import declaration, so this is a value note for
PCBWay's records only — `PCBWay_T-1N12W1065266A_leds_lcsc.csv` is that line,
in the same column layout as the Mouser customs sheet so the two can be read
together.

## Pick-and-place

With the LEDs supplied, the assembly file for PCBWay is
`Lamoka1-half Pick and Place (assembly, DNP J1 J2).csv` — **114 rows, D1–D5
included**, only the two WAGO terminal blocks (J1, J2) left off. The older
109-row file with the LEDs removed is superseded; do not send it.
