(function(){
    "use strict"
  
   var header=document.getElementById("myHeader");
  
    function scrollRule(e) {
        var sticky = document.getElementById("myHeader").getBoundingClientRect().bottom;
        var footer=document.getElementsByTagName("footer")[0].getBoundingClientRect().top;    
       
        if (footer > sticky) {
        header.classList.add("sticky");
        } 
        else {
        header.classList.remove("sticky");
        }
      
 
    }

    window.addEventListener("scroll",scrollRule)
   
    
})();
