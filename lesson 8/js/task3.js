(function(){
    "use strict"

function ViewAction(e){

    if(e.target.childNodes[1])
    { if(e.target.childNodes[1].tagName==="UL")
        {e.target.childNodes[1].classList.toggle("hiden")}
    }
   
   
}
document.getElementById("nav").addEventListener("click",ViewAction)
}
)();