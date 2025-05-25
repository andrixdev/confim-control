/**
 * ANDRIX © 2025
 */

// Highlight chapters on item click
let chapterItems = document.getElementsByClassName('chapter-item')
let chapters = document.getElementsByClassName('chapter')
let resetChapters = () => {
	Array.from(chapters).forEach(c => {
		c.classList.toggle('active', false)
	})
}
Array.from(chapterItems).forEach(s => {
	s.addEventListener('click', () => {
		resetChapters()
		s.parentNode.classList.toggle('active', true)
	})
})
