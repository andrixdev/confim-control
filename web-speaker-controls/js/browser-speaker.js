/**
 * ANDRIX © 2023-2025
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

// OSC send on slider input changes - Screen position
document.getElementById('screen-position-range').addEventListener('input', (ev) => {
	let num = ev.target.value // {0, 1, 2}

	let xhr = new XMLHttpRequest()
	xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	// 114 -> OFF
	// 115 -> FAR
	// 116 -> CLOSE
	let oscRangeOffset = 114 
	num = oscRangeOffset - (-num)
	xhr.send("num=" + num)
})
