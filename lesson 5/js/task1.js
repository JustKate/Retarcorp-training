"use strict" 
var names=["Chack","Bob","Jon","Kate","Alex","Juli"]
var purchases=["Boots","T-shirt","Shorts","Bag","Sweater","Jeans"]
var countries=["USA","Russia","Belarus","Poland","Australia","Itali"]
var div=document.getElementById("wraper");
var timing=1;
window.setInterval(function(){
    var body = document.getElementsByTagName("body")[0];
    if(timing%3!=0){
        
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");

        for (var i = 0; i < 2; i++) {
            var row = document.createElement("tr");
            for (var j = 0; j < 3; j++) {
                if(i===0){  
                    var cell = document.createElement("th");
                    switch(j){
                        case 0: var cellText = document.createTextNode("Name");
                        break;
                        case 1:  var cellText = document.createTextNode("Purchase");
                        break;
                        case 2:  var cellText = document.createTextNode("Countrie");
                        break;
                        }
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                }
                else{
                    var cell = document.createElement("td");
                    switch(j){
                    case 0: var cellText = document.createTextNode(names[Math.floor(Math.random()*6)]);
                    break;
                    case 1:  var cellText = document.createTextNode(purchases[Math.floor(Math.random()*6)]);
                    break;
                    case 2:  var cellText = document.createTextNode(countries[Math.floor(Math.random()*6)]);
                    break;
                    }
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        }
        
            tblBody.appendChild(row);
        }
            tbl.appendChild(tblBody);
            body.appendChild(tbl);
        }
        else{
                var list = document.getElementsByTagName("table");
                list[0].parentNode.removeChild(list[0]);
            }
    
    timing++;
}, 2000);