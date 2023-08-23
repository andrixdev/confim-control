/**
 * Alex Andrix @2023
 */

// Conference tiles controls (display)
let activate = (id) => {
	Array.from(document.getElementsByClassName('confim-click')).forEach((el) => {
		el.classList = "confim-click"

		if (el.getAttribute('data-confim-id') == id) el.classList = "confim-click active"
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
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				
			}
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

// Menu controls
let menuNode = document.getElementById('menu')
let titleNode = document.getElementById('title')
let burgerNode = document.getElementById('burger')
let bodyNode = document.getElementsByTagName('body')[0]
let openMenu = () => {
	burgerNode.classList = 'open'
	titleNode.innerHTML = "Conférence Immersive - Menu"
	menuNode.classList = ''
	bodyNode.classList = 'frozen'
	window.scrollTo(0, 0)
}
let closeMenu = () => {
	burgerNode.classList = ''
	titleNode.innerHTML = "Conférence Immersive - Damien"
	menuNode.classList = 'hidden'
	bodyNode.classList = ''
}
document.getElementById('burger').addEventListener('click', () => {
	let isHidden = menuNode.classList == 'hidden'
	if (isHidden) openMenu()
	else closeMenu()
})
