/**
 * ANDRIX © 2024
 */

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
