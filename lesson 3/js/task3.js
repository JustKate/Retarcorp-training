(function(){
    "use strict" 
    var home={ flat: [{floor: 1, number:1, area: 45, persons: [{name: 'John', age: 17},{name: 'Sam', age: 17}] },
    {floor: 1, number:2, area: 45, persons: [{name: 'Bob', age: 22},{name: 'Greg', age: 23}] },
     {floor: 2, number: 3, area: 55, persons: [{name: 'Juli', age: 23},{name: 'Nick', age: 25}] },
     {floor: 3, number: 4, area: 60, persons: [{name: 'Natali', age: 23},{name: 'Vit', age: 25},{name: 'Adam', age: 3}] },
     {floor: 4, number: 5, area: 45, persons: [{name: 'Kate', age: 23},{name: 'Dan', age: 25}] },
     {floor: 6, number: 6, area: 50, persons: [] }]};

     function ViewHome(){
         var homeList=""
         home.flat.forEach(function(item){
             homeList=homeList+" Number:"+item.number+" Floor: "+item.floor+" Area: "+item.area+"<br>";
         var pesonsList="Persons:<br>";
         item.persons.forEach(function(item){pesonsList=pesonsList+" Name: "+item.name+" Age: "+item.age+"<br><br>"});
         homeList=homeList+pesonsList   
        })
        return homeList;
    }

    function AddPerson(){
        var numberOfFlat=parseInt(document.getElementById("flatToAdd").value);
        var searchToken=false;
        for(var i=0;i<home.flat.length;i++){
            if(home.flat[i].number===numberOfFlat){
                var newPerson={name: document.getElementById("nameToAdd").value, age: document.getElementById("AgeToAdd").value};
                home.flat[i].persons.push(newPerson);
                var homeView=ViewHome();
                document.getElementById("personsList").innerHTML=homeView;
                searchToken=true;
                break;
            }
        }
        if(searchToken===false){
            alert("This flat is not exist")
        }
       
    }

    function DeletePerson(){
        var numberOfFlat=parseInt(document.getElementById("flatToDelete").value);
        var nametoDelete=document.getElementById("nameToDelete").value;
        var searchToken=false;
        for(var i=0;i<home.flat.length;i++){
            if(home.flat[i].number===numberOfFlat){
                var searchNameToken=false;
                for(var j=0;j<home.flat[i].persons.length;j++){
                    if(home.flat[i].persons[j].name===nametoDelete){
                        home.flat[i].persons.splice(j,1);
                        searchNameToken=true;
                        break;
                    }
                }
                if(searchNameToken===false)
                { 
                    alert("This person is not exist on that flat")
                }
                var homeView=ViewHome();
                document.getElementById("personsListAfterDelete").innerHTML=homeView;
                searchToken=true;
                break;
            }
        }
        if(searchToken===false){
            alert("This flat is not exist")
        }
       
    }

    function CleanFlat(){
        var numberOfFlat=parseInt(document.getElementById("flatToClean").value);
        if(home.flat.filter(item=>item.number===numberOfFlat).length==0){
            alert("this flat is not exist");
        }
        else{
            var index=home.flat.findIndex(item=>item.number==numberOfFlat);
           home.flat[index].persons=[];
            var homeView=ViewHome();
            document.getElementById("flatAfterClean").innerHTML=homeView;
        }
    }

    function CountPayments(){
        var paymentToAdd=0;
        var adultPersons=0;
        var homeArea=0;
        var cost=parseInt(document.getElementById("cost").value);
        var res=' ';
        home.flat.forEach(function(item){homeArea=homeArea+item.area;
                    item.persons.forEach(function(p){if(p.age>17)adultPersons++;
                    })});
        
        home.flat.forEach(function(item){
            if(item.persons.length===0 || item.persons.filter(p=>p.age<18).length===item.persons.length)
              { 
                  var partArea=Math.round(item.area*100/homeArea);
                  paymentToAdd=paymentToAdd+(cost*partArea/100);
              }
        });
        
        paymentToAdd=paymentToAdd/adultPersons; 
        
        home.flat.forEach(function(item){
            var adultPersons=item.persons.filter(p=>p.age>17).length;
            if(adultPersons!=0){
                var partArea=Math.round(item.area*100/homeArea);
                var flatCost=(cost*partArea/100)/adultPersons+paymentToAdd;
                item.persons.forEach(function(p){ if(p.age>17){res=res+" Name: "+p.name+" Cost: " +flatCost+"<br>"}
                                                  else{res=res+" Name: "+p.name+" Cost: " +0+"<br>"} 
                                                });
            }else{ item.persons.forEach(function(p){ res=res+" Name: "+p.name+" Cost: " +0+"<br>"});}
        })
        document.getElementById("payments").innerHTML=res;
    }

    document.getElementById("addPerson").addEventListener("click", AddPerson);
    document.getElementById("deletePerson").addEventListener("click", DeletePerson);
    document.getElementById("cleanFlat").addEventListener("click", CleanFlat);
    document.getElementById("payment").addEventListener("click", CountPayments);
     

})();