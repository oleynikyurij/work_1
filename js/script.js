//CUSTOM SCROLL
(function ($) {
	$(window).on("load", function () {
		$(".recepits__table").mCustomScrollbar();
		$('select').niceSelect();
	});
})(jQuery);


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


	btnAll.addEventListener('click', (e)=> {
		e.preventDefault();
		itemLine.forEach((i)=> {
			i.style.display = 'flex';
			i.querySelector('.table__item--open').classList.remove('rotate');
		});
		items.forEach((i)=> {
			i.style.display = 'flex';
			});
			itemParents.forEach((i)=> {
					i.querySelector('.table__item--open').classList.remove('rotate');
			});	
	});

	btnClose.addEventListener('click', (e)=> {
		e.preventDefault();
		itemLine.forEach((i)=> {
			i.style.display = 'none';
			i.querySelector('.table__item--open').classList.add('rotate');
		});
		items.forEach((i)=> {
			i.style.display = 'none';
			});

			itemParents.forEach((i)=> {
				i.querySelector('.table__item--open').classList.add('rotate');
		});
			
	});

	itemParent.forEach(function(elem) {
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
		let	items = document.querySelectorAll(`[data-close="${i}-0"]`);
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



})()