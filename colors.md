# Jakarta Transit Line Colors

Reference palette for Jakarta's rail and BRT lines.

## Rail Lines

Source: the `commute` project (`apps/api/src/operators/*/lines.ts`). These hex codes are exact — pulled from source code.

### KAI Commuter (KRL)

| Line | Code | Color |
|------|------|-------|
| Lin Cikarang | C | `#25B8EB` |
| Lin Bogor | B | `#EE3D43` |
| Lin Rangkasbitung | R | `#96C83E` |
| Lin Tangerang | T | `#C15F28` |
| Lin Tanjung Priok | TP | `#ED4F98` |
| Lin Soekarno-Hatta (Airport) | A | `#262262` |

### MRT Jakarta

| Line | Code | Color |
|------|------|-------|
| Lin Utara Selatan (North–South) | M | `#CA2A51` |

### LRT Jakarta

| Line | Code | Color |
|------|------|-------|
| Lin Selatan (South) | S | `#F26324` |

### LRT Jabodebek

| Line | Code | Color |
|------|------|-------|
| Lin Bekasi | BK | `#006838` |
| Lin Cibubur | CB | `#21409A` |

## TransJakarta BRT

Trunk corridor colors from Wikidata (per-corridor records). Not yet cross-checked
against TransJakarta's official branding — the authoritative source is the FDTJ
integration map (`2026-06a-Peta-Integrasi-Jakarta-FDTJ-Web.pdf` in the commute repo).

### Trunk Corridors

| Corridor | Route | Color |
|----------|-------|-------|
| Koridor 1 | Blok M – Kota | `#FF0000` |
| Koridor 2 | Pulo Gadung – Monas | `#264598` |
| Koridor 3 | Kalideres – Monas | `#FBC715` |
| Koridor 4 | Pulo Gadung – Galunggung | `#562A62` |
| Koridor 5 | Ancol – Kampung Melayu | `#BC581A` |
| Koridor 6 | Ragunan – Galunggung | `#2EA43F` |
| Koridor 7 | Kampung Rambutan – Kampung Melayu | `#E1245A` |
| Koridor 8 | Lebak Bulus – Pasar Baru | `#CC2790` |
| Koridor 9 | Pinang Ranti – Pluit | `#409592` |
| Koridor 10 | Tanjung Priok – PGC | `#8E181E` |
| Koridor 11 | Pulo Gebang – Kampung Melayu | `#2D4CA4` |
| Koridor 12 | Pluit – Tanjung Priok | `#62BB72` |
| Koridor 13 | CBD Ciledug – Tegal Mampang | `#802B7C` |

> Koridor 14 (JIS – Senen) is operational but has no documented hex code on Wikidata.

### Branch / Express Services

Branch and express variants inherit their parent trunk corridor's color; the letter
suffix distinguishes the service, not a separate hue. The `L` prefix (e.g. `L13E`)
denotes a *Lintas*/express variant.

| Service | Route | Inherits |
|---------|-------|----------|
| 2A | Pulo Gadung – Rawa Buaya | Koridor 2 `#264598` |
| 3F | Kalideres – Senayan Bank Jakarta | Koridor 3 `#FBC715` |
| 3H | Damai – Kota | Koridor 3 `#FBC715` |
| 4D | Pulo Gadung – Patra Kuningan | Koridor 4 `#562A62` |
| 5C | Cililitan – Juanda | Koridor 5 `#BC581A` |
| 6A | Ragunan – Balai Kota (via Kuningan) | Koridor 6 `#2EA43F` |
| 6B | Ragunan – Balai Kota (via Semanggi) | Koridor 6 `#2EA43F` |
| 6V | Ragunan – Senayan Bank Jakarta | Koridor 6 `#2EA43F` |
| 7F | Kampung Rambutan – Juanda | Koridor 7 `#E1245A` |
| 9A | Cililitan – Grogol Reformasi | Koridor 9 `#409592` |
| 9C | Pinang Ranti – Bundaran Senayan | Koridor 9 `#409592` |
| 9N | Pinang Ranti – Simpang Cawang | Koridor 9 `#409592` |
| 10H | Tanjung Priok – Bundaran Senayan | Koridor 10 `#8E181E` |
| 13B | Puri Beta 2 – Pancoran | Koridor 13 `#802B7C` |
| 13E | Puri Beta 2 – Flyover Kuningan (weekend) | Koridor 13 `#802B7C` |
| L13E | Puri Beta 2 – Flyover Kuningan (weekday express) | Koridor 13 `#802B7C` |

## Sources

- Rail: `commute` repo — `apps/api/src/operators/{kci,mrtj,lrtj,lrtjbdb}/lines.ts`
- BRT trunk colors: [Transjakarta corridor records — Wikidata](https://www.wikidata.org/wiki/Q1671143)
- BRT routes: [List of Transjakarta corridors — Wikipedia](https://en.wikipedia.org/wiki/List_of_Transjakarta_corridors)
