"use strict" 
var n=parseInt(prompt("Write number N"))
var body = document.getElementsByTagName("body")[0];
    
        
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");

        for (var i = 1; i <=n; i++) {
            var row = document.createElement("tr");
            for (var j = 1; j <= n; j++) {
                var cell = document.createElement("td");
                    if(i===j){ cell.style.backgroundColor="blue";}
                   var cellText = document.createTextNode(i*j);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
        }
            tblBody.appendChild(row);
        }
            tbl.appendChild(tblBody);
            body.appendChild(tbl);
        