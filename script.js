'use strict'
const date = new Date (2024, 6, 16);
const reel = navigator.language
const power = {
    year: 'numeric',
    month: "numeric",
    day: 'numeric',
}
const gera = new Intl.DateTimeFormat('en-GB', power).format(date)

const reveal = document.querySelector(".letterNum");
reveal.textContent = `${gera}`
reveal.style.backgroundColor = '#90e0ef';
reveal.style.width = "80px";

