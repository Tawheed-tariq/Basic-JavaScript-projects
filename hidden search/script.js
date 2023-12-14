const button = document.querySelector(".btn");
const input = document.getElementById("input");
const search = document.querySelector(".search");


button.addEventListener("mouseover", ()=>{
    search.classList.add("active");
    input.focus();
})

input.addEventListener("mouseout", ()=>{
    search.classList.remove("active");
})