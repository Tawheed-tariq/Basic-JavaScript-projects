const heading = document.querySelector(".heading");
const intro = document.querySelector(".travel-intro");
const introduction = document.querySelector(".intro");

window.addEventListener("scroll", scrolling);

function scrolling(){
    const trigerPoint = window.innerHeight;
    const headTop = heading.getBoundingClientRect().top;
    const introTop = introduction.getBoundingClientRect().top;
    headTop < trigerPoint ? heading.classList.add("show") : heading.classList.remove("show");
    headTop < trigerPoint ? intro.classList.add("show") : intro.classList.remove("show");
    introTop < (trigerPoint) ? introduction.classList.add("show") : introduction.classList.remove("show");
}