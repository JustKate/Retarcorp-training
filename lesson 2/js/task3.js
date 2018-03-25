(function(){
    "use strict"
    var now = new Date();
    document.getElementById("runIn").innerHTML=now;
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    document.getElementById("tomorrowStart").innerHTML= (tomorrow - now)/60000+" (min)";
})();