const faques = document.querySelectorAll('.faq-toggle')

faques.forEach((faque) => {
	faque.addEventListener('click', () => {
		faque.parentElement.classList.toggle('active')
	})
})
