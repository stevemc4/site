import { pickRandom, textColor, railColor } from './lines.js'

// Avatar (headpat meme): picks a random transit line on load and re-rolls on
// click. The active line color is shared page-wide via custom properties on
// :root so the hero rule, timeline rail, ::selection, and link accents follow it.
//
// setRootLineText: the home page also drives --line-text off :root (block-link
// hover and ::selection need a readable foreground); the resume doesn't.
export function initHeadpat({ setRootLineText = false } = {}) {
  const headpat = document.getElementById('headpat')
  const codeEl = document.getElementById('headpat-code')
  const root = document.documentElement
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  function apply(line) {
    headpat.style.setProperty('--line-color', line.color)
    headpat.style.setProperty('--line-text', textColor(line.color))
    codeEl.textContent = line.code
    // The rail is nudged for legibility against the current theme's background.
    root.style.setProperty('--line-color', line.color)
    if (setRootLineText) {
      root.style.setProperty('--line-text', textColor(line.color))
    }
    root.style.setProperty('--rail-color', railColor(line.color, darkQuery.matches))
  }

  // Random line on load (applied instantly, no fade on first paint).
  let current = pickRandom()
  apply(current)

  // Re-tune the rail color if the OS theme flips while the page is open.
  darkQuery.addEventListener('change', () => apply(current))

  // Click to re-roll a different line, crossfading: fade the code out, swap
  // color + text while it's invisible (the fill's background-color transition
  // runs concurrently), then fade back in.
  let swapping = false
  headpat.addEventListener('click', () => {
    if (swapping) return
    swapping = true
    let next = pickRandom()
    while (next.code === current.code) next = pickRandom()
    current = next

    headpat.classList.add('is-swapping')
    window.setTimeout(() => {
      apply(current)
      headpat.classList.remove('is-swapping')
      swapping = false
    }, 160)
  })
}
