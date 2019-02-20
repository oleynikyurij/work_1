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


(function checkPage() {
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