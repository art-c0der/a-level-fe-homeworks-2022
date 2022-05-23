const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const bannerRow = document.querySelectorAll(".banner-row");

const firstBanner = document.querySelector(".first-banner");
const A4Button = document.getElementById("A4-button");
A4Button.addEventListener("click", (e) => {
    bannerRow.forEach(element =>{
        element.classList.remove("show");})
    firstBanner.classList.add('show');});

const secondBanner = document.querySelector(".second-banner");
const A5Button = document.getElementById("A5-button");
A5Button.addEventListener("click", (e) => {
    bannerRow.forEach(element =>{
        element.classList.remove("show");})
    secondBanner.classList.add('show');});

const thirdBanner = document.querySelector(".third-banner");
const A8Button = document.getElementById("A8-button");
A8Button.addEventListener("click", (e) => {
    bannerRow.forEach(element =>{
        element.classList.remove("show");})
    thirdBanner.classList.add('show');});

const fourthBanner = document.querySelector(".fourth-banner");
const Q5Button = document.getElementById("Q5-button");
Q5Button.addEventListener("click", (e) => {
    bannerRow.forEach(element =>{
        element.classList.remove("show");})
    fourthBanner.classList.add('show');});

const fifthBanner = document.querySelector(".fifth-banner");
const Q8Button = document.getElementById("Q8-button");
Q8Button.addEventListener("click", (e) => {
    bannerRow.forEach(element =>{
        element.classList.remove("show");})
    fifthBanner.classList.add('show');});
