/**
 * ANDRIX © 2023
 */

// Conference tiles controls (display)
let activate = (id) => {
	Array.from(document.getElementsByClassName('confim-click')).forEach((el) => {
		let isActive = el.getAttribute('data-confim-id') == id
		el.classList.toggle("active", isActive)
	})
}
// Conference tiles controls (send OSC)
Array.from(document.querySelectorAll('[data-confim-id]')).forEach((el) => {
	let num = el.getAttribute('data-confim-id')

	el.addEventListener('click', (e) => {
		activate(num)
		
		let xhr = new XMLHttpRequest()
		xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) { }
		}
		xhr.send("num=" + num)
	})
})
// Special params controls (display)
Array.from(document.getElementsByClassName('switch')).forEach((el) => {
	el.addEventListener('click', () => {
		el.classList = "switch " + (el.classList.contains("on") ? "off" : "on")
	})
})

// Handle constrained cam transitions
let cams = document.getElementsByClassName('cam')
let resetCams = () => {
	Array.from(cams).forEach(c => {
		c.classList.toggle('active', false)
	})
}
Array.from(cams).forEach(c => {
	c.addEventListener('click', () => {
		resetCams()
		c.classList.toggle('active', true)
	})
})
