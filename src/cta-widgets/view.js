import domReady from '@wordpress/dom-ready'

domReady(() => {
	const tabLabels = document.querySelectorAll('.tabs__label')

	for (let label of tabLabels) {
		label.addEventListener('click', (e) => {
			e.preventDefault()

			const selectedLabelIndex = Number(label.dataset.labelIndex)

			for (let i = 0; i < tabLabels.length; i++) {
				if (i === selectedLabelIndex) {
					label.classList.add('tabs__label--active')

					document
						.querySelectorAll('.tabs__panel')
						[i].classList.add('tabs__panel--active')
				} else {
					document
						.querySelectorAll('.tabs__label')
						[i].classList.remove('tabs__label--active')

					document
						.querySelectorAll('.tabs__panel')
						[i].classList.remove('tabs__panel--active')
				}
			}
		})
	}
})
