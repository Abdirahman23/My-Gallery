let panels = document.querySelectorAll(".panel")



function open(){
    
   this.classList.toggle("open")
}

panels.forEach(panel => {panel.addEventListener("click",open)
    
});