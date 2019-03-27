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
	;(function () {

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
	;(function () {
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
	;(function () {
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
	;(function() {

		function move() {
			var elem = document.getElementById("myBar"); 
			var width = 1;
			var id = setInterval(frame, 10);
			function frame() {
				if (width >= 100) {
					clearInterval(id);
				} else {
					width++; 
					elem.style.width = width + '%'; 
				}
			}
		}




	})();

});