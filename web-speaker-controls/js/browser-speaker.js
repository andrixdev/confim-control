/**
 * ANDRIX © 2023-2024
 */

// Highlight sections on section tile click
let sections = document.getElementsByClassName('section')
let steps = document.getElementsByClassName('step')
let resetSteps = () => {
	Array.from(steps).forEach(c => {
		c.classList.toggle('active', false)
	})
}
Array.from(sections).forEach(s => {
	s.addEventListener('click', () => {
		resetSteps()
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
