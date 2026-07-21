import { initHeadpat } from './headpat.js'

initHeadpat({ setRootLineText: true })

// Pickaroo easter egg: the phrase starts in Tagalog, tapping it flips
// between Tagalog and English.
const tagalog = document.getElementById('tagalog-toggle')
const phrases = {
  tl: 'i-tap lang ang pagkain at mga pang-araw-araw mong pangangailangan gamit ang',
  en: 'one-tap your food and daily needs with',
}
let phraseLang = 'tl'
function togglePhrase() {
  phraseLang = phraseLang === 'tl' ? 'en' : 'tl'
  tagalog.textContent = phrases[phraseLang]
  tagalog.setAttribute('lang', phraseLang)
}
tagalog.addEventListener('click', togglePhrase)
// The toggle is a span (a button wouldn't line-wrap with the prose),
// so Enter/Space activation is wired up manually.
tagalog.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    togglePhrase()
  }
})
