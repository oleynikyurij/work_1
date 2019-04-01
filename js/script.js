//CUSTOM SCROLL
(function ($) {
	$(window).on("load", function () {
		$(".recepits__table").mCustomScrollbar();

		$('select').niceSelect();
	});




})(jQuery);

window.addEventListener('DOMContentLoaded', () => {


	//Mobile menu
	let mobileMenu = document.querySelector('.menu-toggle');
	let overlay = document.querySelector('.overlay');
	let mobile = document.querySelector('.mobile');
	let menuToggle = document.querySelector('.menu-toggle');
	let section = document.querySelectorAll('section');
	let logo = document.querySelector('.logo');

	let input = document.querySelector('#text');

	mobileMenu.addEventListener('click', (e) => {
		e.preventDefault();
		overlay.classList.toggle('dn');
		mobileMenu.classList.toggle('dn');
		mobile.classList.toggle('dn');
		menuToggle.classList.toggle('toggled-on');
		section[0].classList.toggle('blur');
		logo.classList.toggle('blur');
	});

	//w8-form
	(function () {
		let w8Form = document.querySelector('.w8__form');
		let w8Btn = document.getElementById('w8');
		let w8SaveBtn = document.getElementById('w8-save');

		if (w8Form) {
			w8Btn.addEventListener('click', function (e) {
				e.preventDefault();
				w8Form.classList.toggle('dn');
			});

			w8SaveBtn.addEventListener('click', function (e) {
				e.preventDefault();
				let input = document.querySelectorAll('.w8__form input'),
					inputCheckbox = document.querySelectorAll('.w8__form input[type="radio"]');
				input.forEach(function (item) {
					item.value = '';
				});
				inputCheckbox.forEach(function (item) {
					item.checked = false;
				});
				w8Form.classList.add('dn');
			});
		} else {
			return;
		}

	})();


	//
	(function () {

		let itemParent = document.querySelectorAll('[data-parent] > .table__item:first-child'),
			itemParents = document.querySelectorAll('[data-parent]'),
			item = document.querySelectorAll('[data-line] > .table__item:first-child'),
			itemLine = document.querySelectorAll('[data-line]'),
			items = document.querySelectorAll('[data-close]'),
			btnClose = document.getElementById('btn-close'),
			btnAll = document.getElementById('btn-all');

		if (!btnAll) {
			return;
		};


		btnAll.addEventListener('click', (e) => {
			e.preventDefault();
			itemLine.forEach((i) => {
				i.style.display = 'flex';
				i.querySelector('.table__item--open').classList.remove('rotate');
			});
			items.forEach((i) => {
				i.style.display = 'flex';
			});
			itemParents.forEach((i) => {
				i.querySelector('.table__item--open').classList.remove('rotate');
			});
		});

		btnClose.addEventListener('click', (e) => {
			e.preventDefault();
			itemLine.forEach((i) => {
				i.style.display = 'none';
				i.querySelector('.table__item--open').classList.add('rotate');
			});
			items.forEach((i) => {
				i.style.display = 'none';
			});

			itemParents.forEach((i) => {
				i.querySelector('.table__item--open').classList.add('rotate');
			});

		});

		itemParent.forEach(function (elem) {
			elem.addEventListener('click', function () {
				// console.log(itemLine);
				itemLine.forEach((it) => {
					if (it.style.display == 'none') {
						it.style.display = 'flex';
					} else {
						it.style.display = 'none';
					};
					it.querySelector('.table__item--open').classList.add('rotate');

				});
				items.forEach((it) => {
					it.style.display = 'none';
				});
				this.querySelector('.table__item--open').classList.toggle('rotate');
			});
		});


		item.forEach((el, i) => {
			el.addEventListener('click', function () {
				let items = document.querySelectorAll(`[data-close="${i}-0"]`);
				this.querySelector('.table__item--open').classList.toggle('rotate');

				items.forEach((it) => {
					if (it.style.display == 'none') {
						it.style.display = 'flex';
					} else {
						it.style.display = 'none';
					}
				});
			});
		});



	})();

	(function () {
		let filter = document.querySelector('.filter__input');
		if (!filter) {
			return;
		}
		let contactOpen = document.querySelectorAll('.contact__open');
		let infoBlock = document.querySelectorAll('.info');
		contactOpen.forEach(function (el, i) {
			el.addEventListener('click', function (e) {
				e.preventDefault();
				el.classList.toggle('open');
				infoBlock[i].classList.toggle('active');
				// console.log(infoBlock[i]);
			});
		});
	})();


	// PROFILE
	;
	(function () {

		let range = document.querySelector('#range-block');
		if (!range) {
			return;
		}
		let circle = document.querySelector('.courved_range .range__circle');
		let data = document.querySelector('.courved_range .data__inner');
		// let section = document.querySelector('.recepits .billing .range');


		range.addEventListener('click', circlePosition);
		range.addEventListener('mousemove', function (e) {

			if (event.which == 1) {
				circlePosition(e);
			}
		});

		function circlePosition(e) {

			let x = (e.clientX - range.getBoundingClientRect().left),
				y;


			if (x < 10) {
				x = 10;
			} else if (x > 224) {
				x = 226;
			}

			circle.style.left = `${x-12}px`;
			y = Math.round(-41 + 125 * Math.sin(Math.acos((x - 118) / 125)));
			circle.style.bottom = `${y-22}px`;


			let percent = Math.round((x - 10) * 100 / 216);
			data.innerHTML = `${percent}%`;
		}
	})();

	// Automaile
	;
	(function () {
		let automaile = document.querySelector('.automaile');
		if (!automaile) {
			return;
		}


		let viewBtn = document.querySelectorAll('[data-view]');
		let infoBlock = document.querySelectorAll('.info');
		let closeBlock = document.querySelectorAll('.view__close');



		viewBtn.forEach(function (el, i) {
			el.addEventListener('click', function (e) {
				e.preventDefault();
				el.classList.add('view-link');
				closeBlock[i].classList.remove('hidden');
				infoBlock[i].classList.add('active');

			});
		});

		closeBlock.forEach(function (el, i) {
			el.addEventListener('click', function (e) {
				e.preventDefault();
				el.classList.toggle('hidden');
				viewBtn[i].classList.remove('view-link');
				infoBlock[i].classList.remove('active');
			});
		});
	})();

	//GENEALOGY
	;
	(function () {
		let genealogy = document.querySelector('.genealogy');
		if (!genealogy) {
			return;
		};

		let itemParent = document.querySelectorAll('[data-parent]'),
			itemParents = document.querySelectorAll('[data-parent]'),
			// item = document.querySelectorAll('[data-line] > .table__item:first-child'),
			item = document.querySelectorAll('[data-line]'),
			itemLine = document.querySelectorAll('[data-line]'),
			items = document.querySelectorAll('[data-close]');


		itemParent.forEach(function (elem) {

			elem.addEventListener('click', function () {
				// console.log(itemLine);
				itemLine.forEach((it) => {
					if (it.style.display == 'none') {
						it.style.display = 'flex';
					} else {
						it.style.display = 'none';
					}
					it.querySelector('.table__item--open').classList.add('rotate');

				});
				items.forEach((it) => it.style.display = 'none');
				this.querySelector('.table__item--open').classList.toggle('rotate');
			});
		});


		item.forEach((el, i) => {
			el.addEventListener('click', function () {
				let items = document.querySelectorAll(`[data-close="${i}-0"]`);
				this.querySelector('.table__item--open').classList.toggle('rotate');

				items.forEach((it) => {
					if (it.style.display == 'none') {
						it.style.display = 'flex';
					} else {
						it.style.display = 'none';
					}
				});
			});
		});



	})();

	//Mobile Dashboard
	;
	(function () {
		let moneyDashboard = document.querySelector('.money-dashboard');
		if (!moneyDashboard) {
			return;
		};

		function moveProgressBar(el) {

			let element = document.querySelector(`.${el}`);

			let dataProgress = element.getAttribute('data-progress');

			let widthElement = 1;
			let interval = setInterval(widthProgressBar, 10);

			function widthProgressBar() {
				if (widthElement >= dataProgress) {
					clearInterval(interval);
				} else {
					widthElement++;
					element.style.width = `${widthElement}%`;
					element.innerHTML = `${widthElement}%`;
				}
			}
		}
		moveProgressBar('progress__bar--1');
		moveProgressBar('progress__bar--2');
		moveProgressBar('progress__bar--3');


		//diagramm 
		var ctx = document.getElementById('circle-graph').getContext('2d');
		Chart.defaults.global.defaultFontSize = 18;
		Chart.defaults.global.defaultFontColor = 'black';

		var chart = new Chart(ctx, {
			// The type of chart we want to create
			type: 'doughnut',

			// The data for our dataset
			data: {
				labels: ['Local', 'International', 'Out of State'],
				datasets: [{
					backgroundColor: ["#0172ff", "#9b51e0", "#27ae60", ],
					borderWidth: 0,
					data: [67, 30, 56]
				}]
			},


			// Configuration options go here
			options: {
				responsive: false,
				legend: {
					display: false,

				},
				title: {
					display: false,

				},
				animation: {
					animateScale: true,
					animateRotate: true
				},
				// tooltips: false
				tooltips: {
					cornerRadius: 10,
					caretSize: 0,
					xPadding: 10,
					yPadding: 10,
					backgroundColor: 'rgba(255, 255, 255, 0.8)',
					bodyFontColor: 'rgb(0, 0, 0)',
					titleFontStyle: 'bold',
					titleMarginBottom: 15
				}
			}
		});

		var ctx1 = document.getElementById('graph').getContext('2d');
		var chart1 = new Chart(ctx1, {
			type: 'line',

			// The data for our dataset
			data: {
				labels: ['Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20', 'Feb 21', 'Feb 22'],
				datasets: [
					{
						label: '$',
						backgroundColor: 'rgba(227,240,250,0.7)',
						fill: true,
						data: [
							30,
							75,
							47,
							64,
							57,
							38,
							77
						],
						borderColor: '#0474ff',
						pointBorderColor: '#0474ff',
						pointBackgroundColor: '#fff',
						pointRadius: 5,
						pointHoverRadius: 7,
						pointHitRadius: 10,
						pointBorderWidth: 2,
						pointStyle: 'rectRounded'

					},
					{
						label: '$',
						backgroundColor: '#e6f9f5',
						fill: true,
						data: [
							44,
							65,
							57,
							43,
							74,
							25,
							70
						],
						borderColor: '#74e2c9',
						pointBorderColor: '#74e2c9',
						pointBackgroundColor: '#fff',
						pointRadius: 5,
						pointHoverRadius: 7,
						pointHitRadius: 10,
						pointBorderWidth: 2,
						pointStyle: 'rectRounded'

					},

				]
			},


			// Configuration options go here
			options: {
				responsive: true,
				legend: {
					display: false,

				},
				title: {
					display: false,

				},
				animation: {
					animateScale: true,
					animateRotate: true
				},
				// tooltips: false
				tooltips: {
					cornerRadius: 10,
					caretSize: 0,
					xPadding: 10,
					yPadding: 10,
					backgroundColor: 'rgba(0, 0, 0, 0.7)',
					// backgroundColor: '#0474ff',
					bodyFontColor: 'rgb(255, 255, 255)',
					fontColor: 'rgb(0, 0, 0)',
					titleFontStyle: 'bold',
					titleMarginBottom: 15
				},

			}
		});

	})();

});