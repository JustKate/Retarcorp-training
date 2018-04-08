(function(){
    "use strict"
    
    function NameVal(){
       var name=document.getElementById("name").value;
        if(name.length<3 ||name.length>20){
            document.getElementById("nameVal").innerHTML="Not valid name length";
            return false;
        }else if(name.indexOf(" ")===-1 && name.indexOf("-")===-1){
            document.getElementById("nameVal").innerHTML="Name should have space or - "
            return false;
        }
        document.getElementById("nameVal").innerHTML=" ";
        return true;
    }

  
    function PhoneVal(){
        var phoneVal=document.getElementById("phone").value;
        if(/^(80|\+375)[\-|\() ]?(29|25|44|33)[\-|\)|\s]?(\d{3})[\-|\s]?(\d{2})[\-|\s]?(\d{2})$/.test(phoneVal)===false){
            document.getElementById("phoneVal").innerHTML="phone number is not correct";
            return false;
        }
        document.getElementById("phoneVal").innerHTML="";
        return true;
    }

    function EmailVal(){
        var email=document.getElementById("email").value;
        if(/[a-z A-Z][a-z A-Z 0-9\_\-\.]*@[a-z A-Z 0-9\_\-\.]*\.[a-z]{2,10}\.?/.test(email)===false){
            document.getElementById("emailVal").innerHTML="email is not correct";
            return false;
        }
        document.getElementById("emailVal").innerHTML=""
        return true;
    }
    
    function SiteVal(){
        var site=document.getElementById("site").value;
        if(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(site)===false){
            document.getElementById("siteVal").innerHTML="site address is not correct";
            return false;
        }
        document.getElementById("siteVal").innerHTML=""
        return true;
    }
    function AgeVal(){
        var age=parseInt(document.getElementById("age").value);
        if(age<14 || age>90){
            document.getElementById("ageVal").innerHTML="Age is not valid";
            return false;
        }
        document.getElementById("ageVal").innerHTML="";
        return true;
    }
    
    function Submite(){
        if(NameVal()===true && EmailVal()===true && SiteVal()===true && AgeVal()===true){
            alert("Validate is passed");
        }else{ alert("not paseed validate");}
    }

    document.getElementById("name").addEventListener("focus",function(){setTimeout(NameVal, 5000)});
    document.getElementById("phone").addEventListener("focus",function(){setTimeout(PhoneVal, 5000)});
    document.getElementById("email").addEventListener("focus",function(){setTimeout(EmailVal, 5000)});
    document.getElementById("site").addEventListener("focus",function(){setTimeout(SiteVal, 5000)});
    document.getElementById("age").addEventListener("focus",function(){setTimeout(AgeVal, 5000)});

    document.getElementById("sub").addEventListener("click",Submite);

})()