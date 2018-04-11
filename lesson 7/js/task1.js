(function(){
    "use strict"
    var n=parseInt(prompt("Write number N"))
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");
    
   (function createTable(){    
       

        for (var i = 1; i <=n; i++) {
            var row = document.createElement("tr");
            for (var j = 1; j <= n; j++) {
                var cell = document.createElement("td");
                   // if(i===j){ cell.style.backgroundColor="blue";}
                   var cellText = document.createTextNode(i*j);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
        }
            tblBody.appendChild(row);
        }
            tbl.appendChild(tblBody);
            body.appendChild(tbl);

    })();

    function AddColor(e){
     
        if(e.target.tagName==="TD")
        {e.target.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        }
    }
    function DeleteColor(e){
        if(e.target.tagName==="TD")
        {e.target.style.backgroundColor = "ghostwhite";
        }
    }
   document.getElementsByTagName("table")[0].addEventListener("mouseover",AddColor)
   document.getElementsByTagName("table")[0].addEventListener("mouseout",DeleteColor)

}
)();