(function(){
    "use strict"
    var bookkeeping=new Object();
    bookkeeping.printEmployees=printEmployees;
    bookkeeping.printEmployee=addEmployee;
    bookkeeping.SortList=printSortList;
    //Test Data
    bookkeeping.employees=new Array();
    var employee1={
        Name: "Juli",
        Age : 25,
        Department : "QA",
        Salary : 1500,
        Experience : 12
        }
        var employee3={
            Name: "Nik",
            Age : 22,
            Department : "QA",
            Salary : 1600,
            Experience : 14
            }

    var employee2={
        Name: "Alex",
        Age : 29,
        Department : "Dev",
        Salary : 3000,
        Experience : 24
        }
    var employee4={
            Name: "Alic",
            Age : 22,
            Department : "Dev",
            Salary : 2000,
            Experience : 18
            }
        bookkeeping.employees.push(employee2);
        bookkeeping.employees.push(employee1);
        bookkeeping.employees.push(employee3);
        bookkeeping.employees.push(employee4);

    function printEmployees(){
     if(bookkeeping.employees!=undefined)
     {
        var empList=' '; 
        bookkeeping.employees.forEach(function(item){
            empList=empList+"Name:"+item.Name+" age:"+item.Age+" department:"+item.Department+" salary:"+item.Salary+" experience:"+item.Experience+'<br>'
        });
        document.getElementById("emplList").innerHTML=empList; 
    };
}
    function addEmployee()
    {
        var employee={
        Name: document.getElementById("eName").value,
        Age : document.getElementById("eAge").value,
        Department : document.getElementById("eDepart").value,
        Salary : document.getElementById("eSalary").value,
        Experience : document.getElementById("eExpr").value
        }
        if(bookkeeping.employees!=undefined)
        {bookkeeping.employees.push(employee);}
        else
        {
            bookkeeping.employees=new Array()
            bookkeeping.employees.push(employee);
        }
        document.getElementById("eName").value='';
        document.getElementById("eAge").value='';
        document.getElementById("eDepart").value='';
        document.getElementById("eSalary").value='';
        document.getElementById("eExpr").value=''

    }

    function delEmployee()
    {
        bookkeeping.employees=bookkeeping.employees.filter(em=>em.Name!=document.getElementById("eNameforDelete").value)
        document.getElementById("eNameforDelete").value='';


    }
    
    function printSortList()
    {
        if(bookkeeping.employees!=undefined)
        {
            var sumSalary=0;
            var SortList=bookkeeping.employees.sort(function(a,b){return a.Salary>b.Salary ? 1:-1})
        
            var empSortList=' '; 
            bookkeeping.employees.forEach(function(item){
                empSortList=empSortList+"Name:"+item.Name+" age:"+item.Age+" department:"+item.Department+" salary:"+item.Salary+" experience:"+item.Experience+'<br>'
                sumSalary=sumSalary+item.Salary;
            });
            empSortList=empSortList+" Sum Salary = "+sumSalary;
            document.getElementById("emplSortList").innerHTML=empSortList;
        }
    }
    
    function statistics()
    {  
        var SortList=bookkeeping.employees.sort(function(a,b){return a.Salary>b.Salary ? 1:-1})
        var EmplWithMinSalary=SortList[0];
        var EmplWithMaxSalary=SortList[SortList.length-1];
        var avgSalary=0;
        bookkeeping.employees.forEach(function(item){
            avgSalary=avgSalary+item.Salary;
        });
        avgSalary=avgSalary/bookkeeping.employees.length;
        var answ="Employees with min salary: Name:"+EmplWithMinSalary.Name+"; Age:"+EmplWithMinSalary.Age+"; Department: "+EmplWithMinSalary.Department+"; Salary"+
        EmplWithMinSalary.Salary+"; Experience: "+EmplWithMinSalary.Experience+"<br>"+
        "Employees with max salary: Name:"+EmplWithMaxSalary.Name+"; Age:"+EmplWithMaxSalary.Age+"; Department: "+EmplWithMaxSalary.Department+"; Salary"+
        EmplWithMaxSalary.Salary+"; Experience: "+EmplWithMaxSalary.Experience+"<br>"+
        "Average salary: "+avgSalary;
        document.getElementById("view_statistics").innerHTML=answ;
        
    }
    function fullStatistics()
    {
        
        var departments=bookkeeping.employees.map(a=>a.Department).filter((curv,i,ar)=>ar.indexOf(curv)===i);
        var res='';
       
        departments.forEach(function(item){
        var employeeByDepart=bookkeeping.employees.filter(emItem=>emItem.Department==item )
        var sumSalary=0;
        var sumAge=0;
           
        employeeByDepart.forEach(function(item){sumSalary=sumSalary+item.Salary; sumAge=sumAge+item.Age})                                  
        var avgSalary=sumSalary/employeeByDepart.length;
        var avgAge=sumAge/employeeByDepart.length;
        var employeeWithMaxExperience=employeeByDepart.sort(function(a,b){return a.Experience>b.Experience?1:-1})[0];

        res=res+"Department: "+item+" Sum Salary: "+sumSalary+" Average Salary: "+avgSalary+" Average Age: "+avgAge+"Number of Employees: "+employeeByDepart.length+
        "<br>Employee With Max Experience: Name: "+employeeWithMaxExperience.Name+" Age: "+employeeWithMaxExperience.Age+" Salary "+employeeWithMaxExperience.Salary
        + " Experience: "+employeeWithMaxExperience.Experience+"<br><br>"
        })
         document.getElementById("view_fstatistics").innerHTML=res;
    }

    document.getElementById('printEmpl').addEventListener("click", bookkeeping.printEmployees);
    document.getElementById('addEmpl').addEventListener("click", bookkeeping.printEmployee);
    document.getElementById('printSortList').addEventListener("click", bookkeeping.SortList);
    document.getElementById('statistics').addEventListener("click", statistics);
    document.getElementById('fstatistics').addEventListener("click", fullStatistics);
    document.getElementById('delEmpl').addEventListener("click", delEmployee);
    

})();