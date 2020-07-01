'use strict';
const hi = document.querySelector('.hi'),
day = document.querySelector('.day'),
date = document.querySelector('.date'),
newYear = document.querySelector('.new_year');

let dateTime = new Date();

date.textContent = dateTime;