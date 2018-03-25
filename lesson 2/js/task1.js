(function(){
    "use strict"
    function viewResult(){
        var numArr=parseInt(document.getElementById("num_arr").value);
        var num=parseInt(document.getElementById("num").value);
        var per=parseInt(document.getElementById("per").value);
        var arr=new Array(numArr);
        var max=num+(num*per/100);
        var min=num-(num*per/100);
        var res="Array = ";
        var avHarmonic=0;
        var avDenominator=0;
        for(var i=0; i<numArr; i++){
            arr[i]=Math.floor(Math.random() * (max - min + 1) ) + min;
            res=res+" "+arr[i];
            avDenominator=avDenominator+1/arr[i];
        }
        res=res+" Average harmonic = "+numArr/avDenominator;
        document.getElementById("result").innerHTML=res;
    }

    document.getElementById('run').addEventListener("click", viewResult);
})();