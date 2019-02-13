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




//CUSTOM SCROLL
(function($){
	$(window).on("load",function(){
			$(".recepits__table").mCustomScrollbar();
			$('select').niceSelect();
	});
})(jQuery);
