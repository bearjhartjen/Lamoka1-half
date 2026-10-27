# Newark side-order — SUPERSEDED 2026-10-26 (one-box plan)

User decision: **one inbound box, no second supplier.** This side-order is
cancelled. T1N12-05 (WAGO 2606-1352, J2) is DNP — hand-wire DC input at final
assembly. T1N12-03 rides in the Mouser box as 25SVPF27MX (same 5×5.9
footprint). Kept for history only.

Two lines in the kit are impossible to substitute because the PCB pads are cut
to that exact part: **T1N12-05 WAGO 2606-1352** (J2, the DC-input terminal,
`CONN2_2606-1352_WAG` footprint) and **T1N12-03 Panasonic 20SVPF56MX** (Cin1,
the boost input polymer can). Mouser shows both 0-ships-now with a backorder,
and a different WAGO or can capacitor would break the footprint, so they ride a
small Newark order instead of waiting on Mouser's lead time.

## The order (2 lines)

| Customer ref | MPN | Qty |
| --- | --- | --- |
| T1N12-05 | WAGO 2606-1352 | 2 |
| T1N12-03 | Panasonic 20SVPF56MX | 2 |

 Newark should stock both (Wago TOPJOB S and Panasonic SP-Cap are standard
lines there). If Newark is short on either, TME (Poland) carries both codes
and ships with full customs paperwork — same order, same price class.

## Checkout

- Ship to the PCBWay warehouse, contact **Remi Wu**, Room 902, Building C,
  Ruiqin Business Center, No. 223 Shenban Road, Shangtang Street, Gongshu
  District, Hangzhou 310000, Zhejiang, China, tel +86-571-86996582 — DHL/FedEx
  express, **T-1N12W1065266A** written on the carton and in the order notes.
- Payment: card or PayPal.
- Put `T1N12-05` / `T1N12-03` in the order customer-reference fields so the
  packing slip ties to the main spreadsheet.

## Paperwork

Newark's commercial invoice lists MPN, quantity and unit price; when this
order exists its two lines get merged into the regenerated customs
spreadsheet (line-for-line invoice rule, same 67-# scheme). Tell Remi the kit
now arrives in two boxes (Mouser main + Newark top-up), matching the split
they already accepted with the Coilcraft inductor.
