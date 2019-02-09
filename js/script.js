let mobileMenu = document.querySelector('.menu-toggle');
let overlay = document.querySelector('.overlay');
let mobile = document.querySelector('.mobile');
let menuToggle = document.querySelector('.menu-toggle');
let section = document.querySelectorAll('section');
let logo = document.querySelector('.logo');

// let btnDrop = document.querySelector('.btn-drop');
// let dropDown = document.querySelector('.drop-down');

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

(function($){
	$(window).on("load",function(){
			$(".recepits__table").mCustomScrollbar();
	});
})(jQuery);
// btnDrop.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	dropDown.classList.toggle('dn');

// 	if (btnDrop.classList.contains('menu-item-link_drop-down') ) {
// 		btnDrop.classList.toggle('menu-item-link__active');
// 	} 
	
// });

// dropDown.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	dropDown.classList.toggle('dn');
// 	if (btnDrop.classList.contains('menu-item-link_drop-down') ) {
// 		btnDrop.classList.toggle('menu-item-link__active');
// 	}
	
// });

// let qestionsTitle = document.querySelectorAll('.qestions-title');
// let qestionsContent = document.querySelectorAll('.qestions-content');
// let qestionsImg = document.querySelectorAll('.qestions-img');


// qestionsTitle.forEach((item, i) => {

// 	item.addEventListener('click', (e) => {
// 		e.preventDefault();

// 		if (e.currentTarget == item && qestionsContent[i].classList.contains('content-active')) {

// 			qestionsContent[i].classList.remove('content-active');
// 			qestionsImg[i].classList.remove('rotate');
// 		} else {
// 			qestionsContent.forEach((item) => {
// 				item.classList.remove('content-active');
// 			});
// 			qestionsImg.forEach((item) => {
// 				item.classList.remove('rotate');
// 			});
// 			qestionsContent[i].classList.add('content-active');
// 			qestionsImg[i].classList.add('rotate');
// 		}

// 	})

// });