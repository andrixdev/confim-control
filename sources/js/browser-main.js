/**
 * ANDRIX © 2024
 */

// OSC send on clicks
Array.from(document.querySelectorAll('[data-confim-id]')).forEach((el) => {
	let num = el.getAttribute('data-confim-id')

	el.addEventListener('click', (e) => {
		// Send XHR with OSC number
		let xhr = new XMLHttpRequest()
		xhr.open("POST", location.origin + "/eh") // location is the browser's protocol, hostname and port number
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) { }
		}
		xhr.send("num=" + num)

		// Front-end loading time
		if (num >= 1 && num <= 49) animateLoadbar(2000) // 2 seconds (see Unity Chameleon.cs duration)
		else animateLoadbar(250) // Enough to prevent double-click
	})
})

// Special params controls (display)
Array.from(document.getElementsByClassName('switch')).forEach((el) => {
	el.addEventListener('click', () => {
		el.classList = "switch " + (el.classList.contains("on") ? "off" : "on")
	})
})

// Loadbar animation
let load = document.getElementById('loadbar-inner')
let overlay = document.getElementById('overlay')
let animateLoadbar = (duration) => {
	overlay.style.display = 'inherit';
	load.style.transitionDuration = duration + 'ms'
	load.style.width = '100%'

	setTimeout(() => {
		load.style.transitionDuration = '1ms'
		load.style.width = '0%'
		overlay.style.display = 'none'
	}, duration)
}
