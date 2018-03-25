(function(){
    "use strict"
    function viewResult(){
        var coeffArr=document.getElementById("coeff").value.split(",");
        var num=parseInt(document.getElementById("num").value);
        var fx=0;
        var res="F(x)=";
        for(var i=0; i<coeffArr.length; i++){
            res=res+(coeffArr[i]>0 ? ("+"+coeffArr[i]+"x^"+i):(coeffArr[i]+"x^"+i));
            fx=fx+parseInt(coeffArr[i])*Math.pow(num,i);
        }
        res=res+ " "+"F("+num+") = "+fx;
        document.getElementById("result").innerHTML=res;
    }

    document.getElementById('run').addEventListener("click", viewResult);
})();