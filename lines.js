// Jakarta transit line codes + colors, from colors.md.
// Used by the headpat avatar to pick a random line's color/code on each load.

export const LINES = [
  // KAI Commuter (KRL)
  { code: 'C', color: '#25B8EB' },
  { code: 'B', color: '#EE3D43' },
  { code: 'R', color: '#96C83E' },
  { code: 'T', color: '#C15F28' },
  { code: 'TP', color: '#ED4F98' },
  { code: 'A', color: '#262262' },
  // MRT Jakarta
  { code: 'M', color: '#CA2A51' },
  // LRT Jakarta
  { code: 'S', color: '#F26324' },
  // LRT Jabodebek
  { code: 'BK', color: '#006838' },
  { code: 'CB', color: '#21409A' },
  // TransJakarta trunk corridors
  { code: '1', color: '#FF0000' },
  { code: '2', color: '#264598' },
  { code: '3', color: '#FBC715' },
  { code: '4', color: '#562A62' },
  { code: '5', color: '#BC581A' },
  { code: '6', color: '#2EA43F' },
  { code: '7', color: '#E1245A' },
  { code: '8', color: '#CC2790' },
  { code: '9', color: '#409592' },
  { code: '10', color: '#8E181E' },
  { code: '11', color: '#2D4CA4' },
  { code: '12', color: '#62BB72' },
  { code: '13', color: '#802B7C' },
  // TransJakarta branch / express (inherit parent corridor color)
  { code: '2A', color: '#264598' },
  { code: '3F', color: '#FBC715' },
  { code: '3H', color: '#FBC715' },
  { code: '4D', color: '#562A62' },
  { code: '5C', color: '#BC581A' },
  { code: '6A', color: '#2EA43F' },
  { code: '6B', color: '#2EA43F' },
  { code: '6V', color: '#2EA43F' },
  { code: '7F', color: '#E1245A' },
  { code: '9A', color: '#409592' },
  { code: '9C', color: '#409592' },
  { code: '9N', color: '#409592' },
  { code: '10H', color: '#8E181E' },
  { code: '13B', color: '#802B7C' },
  { code: '13E', color: '#802B7C' },
  { code: 'L13E', color: '#802B7C' }
]

// Pick a random line.
export function pickRandom() {
  return LINES[Math.floor(Math.random() * LINES.length)]
}

// Return the readable text color ('#2d2d2d' or '#ffffff') for a given line color,
// using the luminance formula from the commute repo's utils/colors.ts.
export function textColor(hex) {
  const h = hex.replace(/^#/, '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b
  return luminance > 150 ? '#2d2d2d' : '#ffffff'
}
