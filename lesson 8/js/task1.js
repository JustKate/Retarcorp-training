(function(){
    "use strict"
  
   function ViewMenu (e){
    var menu=document.getElementById("menu");     
    menu.classList.toggle("active");   
    menu.style.position = "absolute";
        menu.style.left = e.clientX+'px';
        menu.style.top = e.clientY+'px';
       
   }
   
   function ViewTask(e){
    alert(e.target.textContent)
    e.stopPropagation()
   }

   window.addEventListener("click", ViewMenu);
   document.getElementById("task").addEventListener("click",ViewTask)
   
    
})();
