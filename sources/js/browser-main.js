/**
 * ANDRIX © 2023-2024
 */

// OSC send on clicks
Array.from(document.querySelectorAll('[data-confim-id]')).forEach((el) => {
	let num = el.getAttribute('data-confim-id')

	el.addEventListener('click', (e) => {
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
		// Detect those with same confim-id
		let all = document.querySelectorAll("[data-confim-id='" + el.getAttribute('data-confim-id') + "']")
		all.forEach(el => {
			el.classList.toggle('on')
			el.classList.toggle('off')
		})
	})
})
