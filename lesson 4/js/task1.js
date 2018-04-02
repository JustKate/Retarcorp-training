(function(){
    "use strict" 
function Test()
{
    var inputNumber=document.getElementById("num").value;
    if(/^(80|\+375)[\-|\() ]?(29|25|44|33)[\-|\)|\s]?(\d{3})[\-|\s]?(\d{2})[\-|\s]?(\d{2})$/.test(inputNumber)){
        alert("This is correct number")
    }
    else{
        alert("This wrong number ")
    }
}
document.getElementById("go").addEventListener("click", Test);
})();