"use strict"

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

const menuLink = document.querySelector('.menu__link');
const menuSubLink = document.querySelector('.first-link');
if (menuLink) {
	menuLink.addEventListener("click", function (e) {
		menuSubLink.classList.toggle('_active');
		menuLink.classList.toggle('_style');
	})
}

const secondLink = document.getElementById('second__link');
const secondSubLink = document.querySelector('.second-link');
if(secondLink){
	secondLink.addEventListener("click" , function(e){
		secondSubLink.classList.toggle('_active');
		secondLink.classList.toggle('_style');
	})
}

const thirdLink = document.getElementById('third__link');
const thirdSubLink = document.querySelector('.third-link');
if(secondLink){
	thirdLink.addEventListener("click" , function(e){
		thirdSubLink.classList.toggle('_active');
		thirdLink.classList.toggle('_style');
	})
}
