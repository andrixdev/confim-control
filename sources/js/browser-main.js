/**
 * ANDRIX © 2025
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

let toggleSwitch = (switchNode) => {
	// Toggle
	switchNode.classList.toggle('on')
	switchNode.classList.toggle('off')

	// Display/hide corresponding image
	if (switchNode.hasAttribute("data-switch-off-img-id") && switchNode.hasAttribute("data-switch-on-img-id")) {
		let imgOffId = switchNode.getAttribute("data-switch-off-img-id")
		let imgOnId = switchNode.getAttribute("data-switch-on-img-id")
		let isOn = switchNode.classList.contains("on")
		document.getElementById(imgOnId).style.display = isOn ? "inherit" : "none"
		document.getElementById(imgOffId).style.display = isOn ? "none" : "inherit"
	}
}

// Joint toggle of identical switches
Array.from(document.getElementsByClassName('switch')).forEach((el) => {
	el.addEventListener('click', () => {
		// Detect those with same confim-id
		let all = document.querySelectorAll("[data-confim-id='" + el.getAttribute('data-confim-id') + "']")
		all.forEach(el2 => {
			toggleSwitch(el2)
		})
	})
})

// Switch on/off all molecules at once
let setAllMoleculeSwitches = (targetState) => {
	Array.from(document.getElementsByClassName("molecule-switch")).forEach(el => {
		if (el.classList.contains(targetState == true ? 'off' : 'on')) toggleSwitch(el)
	})
}

Array.from(document.getElementsByClassName("all-molecules-off")).forEach(e => {
	e.addEventListener('click', () => {
		setAllMoleculeSwitches(false)
	})
})
Array.from(document.getElementsByClassName("all-molecules-on")).forEach(e => {
	e.addEventListener('click', () => {
		setAllMoleculeSwitches(true)
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
