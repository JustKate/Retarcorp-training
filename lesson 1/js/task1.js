(function(){
    "use strict"

function result(){
var inputValue=document.getElementById("input_js").value 
var openPar=0;
var closePar=0;
var viewMessToken=false;
for (var i=0 ;i<inputValue.length;i++)
{
    if(openPar<closePar){
        alert("Wrong string")
        viewMessToken=true;
        break;
   
    }
    if(inputValue[i]==='('){
        openPar=openPar+1
    }
    if(inputValue[i]===')'){
        closePar=closePar+1
    }
} 
if(openPar!=closePar && viewMessToken===false)
    alert("Wrong string")
if(openPar===closePar)
alert("string is ok")
}


document.getElementById("act").addEventListener("click", result);

}
)();