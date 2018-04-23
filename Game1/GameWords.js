
(function(){
    "use strict"
        var wordsList=['VIENNA','MINSK','OTTAWA','PRAGUE','COPPENHAGEN','TALIN','PARIS','BERLIN','DUBLIN','ROME','TOKYO','RIGA','OSLO','MOSCOW'];
        var gameObject=[];
        var userChoose={Coordinates: [], Words: [], ClassNames: []}; 
        var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var matrix=math.zeros(15, 15);
        var startChoose=true;
        var chackToken=false;
        document.getElementById("check").disabled = true;
        
        var tabSection = document.getElementsByClassName("tabl_section")[0];
        (function GenerteTable(){
            
            var tbl = document.createElement("table");
            tbl.classList.add("table-bordered");
            var tblBody = document.createElement("tbody");
            
                    for (var i = 0; i <15; i++) {
                        var row = document.createElement("tr");
                        for (var j = 0; j <15; j++) {
                            var cell = document.createElement("td");
                            cell.classList.add(i+'_'+j);
                            var n=Math.floor(Math.random() * (alphabet.length-2) );
                            var text= alphabet.substring(n,n+1);
                            var cellText = document.createTextNode(text);
                                cell.appendChild(cellText);
                                row.appendChild(cell);
                    }
                        tblBody.appendChild(row);
                    }
                        tbl.appendChild(tblBody);
                        tabSection.appendChild(tbl);
            
        })();
    

        function AvailablePlaces(word, position){
            var randomCor1=Math.floor(Math.random() * 14 );
            var maxIndex=14-word.length
            var randomCor2=Math.floor(Math.random() * maxIndex);
            var checkForPlace=true;
            var n=randomCor2+word.length;
            var indexes=[];
            for(var c=randomCor2;c<n;c++){
                var val=position===0?math.subset(matrix, math.index(randomCor1, c)):math.subset(matrix, math.index(c ,randomCor1));
               if(val!=0){
                  checkForPlace=false;
                  break;}
                } 
           if(checkForPlace)
           {
            for(var c=randomCor2;c<n;c++)
            {   
                if(position===0)
                {
                    matrix.subset(math.index(randomCor1,c),1);
                    indexes.push([randomCor1,c]);
                }
                else
                {
                    matrix.subset(math.index(c,randomCor1),1);
                    indexes.push([c,randomCor1])
                }
            }
           }
            return indexes;
        }
        
        (function FillTable()
        {
            var iToken=0
            while(iToken<wordsList.length){
                var positionRand=Math.floor(Math.random() * 2 );
                var word=wordsList[iToken];
                var indexList=AvailablePlaces(word,positionRand);
                if(indexList.length>0)
                {
                    gameObject.push({wordName: word});
                    for(var i=0;i<indexList.length;i++)
                    {
                        var clName=indexList[i].join("_");
                        var element=document.getElementsByClassName(clName)[0];
                        element.innerHTML=word[i];
                       // element.style.color = "blue"
                    }
                }
                iToken++;  
            }
            document.getElementById("counter").innerHTML="You need to serch a "+gameObject.length+" words";
        })();

        function ClickToTable(event){
            if(event.target.tagName==="TD"){
                if(startChoose){
                    userChoose.Words.push(event.target.innerHTML);
                    userChoose.Coordinates.push(event.target.classList[0].split("_"));
                    event.target.style.backgroundColor = '#99ff99';
                    userChoose.ClassNames.push(event.target.classList[0]);
                    startChoose=false;
                    document.getElementById("check").disabled = false;
                }
                else
                {
                    var cor=event.target.classList[0].split("_");
                    if(parseInt(userChoose.Coordinates[0][0])==parseInt(cor[0]) || parseInt(userChoose.Coordinates[0][1])==parseInt(cor[1]))
                    {
                        chackToken=true;
                        userChoose.ClassNames.push(event.target.classList[0]);
                        userChoose.Words.push(event.target.innerHTML);
                        event.target.style.backgroundColor = '#99ff99';
                    }
                    else
                    {
                        event.target.style.backgroundColor = '#ff5050';
                        userChoose.ClassNames.push(event.target.classList[0]);
                        userChoose.Words.push(event.target.innerHTML);
                        chackToken=false; 
                        document.getElementById("check").disabled = true;
                    }
                
                }
            }
        }
        
        function CheckWord()
        {
            var Checktoken=false;
            var iterator=0;
            var cityName=userChoose.Words.join("");
            for(var i=0;i<gameObject.length;i++)
            {
                if(gameObject[i].wordName==cityName)
                {
                    Checktoken=true;
                    gameObject = gameObject.filter(function(el) {
                        return el.wordName !== cityName;})
                        document.getElementById("counter").innerHTML="You need to serch a "+gameObject.length+" words";
                        alert("you find a new word!")
                    break;
                }
            }
            if(Checktoken==false){
                userChoose.ClassNames.forEach(item=>{document.getElementsByClassName(item)[0].style.backgroundColor = 'white'})
            }
            if(gameObject.length==0){
                alert("You Win!")
            }
            
            startChoose=true;
            userChoose.Coordinates=[];
            userChoose.ClassNames=[];
            userChoose.Words=[];
           
        }

        function ResetLastChoose(){
            userChoose.ClassNames.forEach(item=>{document.getElementsByClassName(item)[0].style.backgroundColor = 'white'});
            startChoose=true;
            userChoose.Coordinates=[];
            userChoose.ClassNames=[];
            userChoose.Words=[];
        }
        

        document.getElementsByTagName("table")[0].addEventListener("click",ClickToTable);
        document.getElementById("restart").addEventListener("click",function(){location.reload();});
        document.getElementById("check").addEventListener("click",CheckWord);
        document.getElementById("reset").addEventListener("click", ResetLastChoose);
   
})();
