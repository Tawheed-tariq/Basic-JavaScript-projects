const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", ()=> {
        removeActiveCLass();
        panel.classList.add("active");
    });
});

function removeActiveCLass(){
    panels.forEach(panel =>{
        panel.classList.remove("active");
    });
}