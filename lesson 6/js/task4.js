(function(){
    "use strict"
    var value=null;
    var act="";
    var result=null;
    var memory=0;
    
    function addVal(evt)
    {
        if(result==null)
        { 
            result=evt.target.value;
        }  
         else
        {
            value=evt.target.value
        } 
         document.getElementById("expr_js").value=evt.target.value;    
    }
 
    function countResult(evt)
    {
       
        if(result!=null && value != null){
            previousActionCount(act);
            document.getElementById("expr_js").value=result;
           
        }
       if(evt.target.value==="=")
       {
        act="";
        value=null;
       }
       switch(evt.target.value)
       {
        case "+":
             act="+";
        break;
        case "-": 
            act="-"
        break;
        case "/" : 
            act="/"
        break;
        case "*" : 
            act="*"
        break;
        }
    }
    
    function clearResult(){
         value=null;
         act="";
         result=null;
         document.getElementById("expr_js").value='';
        }
    
     function previousActionCount(act)
     {
        switch(act)
        {
            case "+":
                 result=parseInt(result)+parseInt(value);
            break;
            case "-": 
                result=parseInt(result)-parseInt(value);
            break;
            case "/" : 
                result=parseInt(result)/parseInt(value);
            break;
            case "*" : 
                result=parseInt(result)*parseInt(value);
            break;
        }
     }

     function addValKey(evt)
    {
        if(result==null)
        { 
            result=evt.key
        }  
        else
        {
            value=evt.key
        } 
    
        document.getElementById("expr_js").value=evt.key;    
    }  
    
    function countResultKey(evt)
    {
        if(result!=null && value != null){
                previousActionCount(act);
                document.getElementById("expr_js").value=result;
        }
        if(evt.keyCode===13)
        {
            act="";
            value=null;
        }
        switch(evt.key)
        {
            case "+":
                 act="+";
            break;
            case "-": 
                act="-"
            break;
            case "/" : 
                act="/"
            break;
            case "*" : 
                act="*"
            break;
        }
    }
        
    function SaveMemory(){
        memory=parseInt(document.getElementById("expr_js").value);
        result=null;
        value=null;
        document.getElementById("memoryToken").innerHTML="M"
        document.getElementById("expr_js").value=0;
    }

    function CleanMemory(){
        memory=0;
        document.getElementById("memoryToken").innerHTML=" "
    }

    function AddToMemory(){
        memory=memory+parseInt(document.getElementById("expr_js").value);
    }

    function SubtractFromMemory()
    { memory=memory-parseInt(document.getElementById("expr_js").value); }

    
    function ReadFromMemory(){
        value=memory;
        document.getElementById("expr_js").value=memory;
    }

     function keyboardHandl(e)
    {
        if(e.keyCode>95 && e.keyCode<106)
        addValKey(e)
        if(e.keyCode===111||e.keyCode===106||e.keyCode===109
        ||e.keyCode===107||e.keyCode===13)
        {
            countResultKey(e)
        }
        document.getElementById("expr_js").focus();
    } 
 
    
    var valButton=document.querySelectorAll('.val');
    for(var j=0;j<valButton.length;j++)
    { 
        valButton[j].addEventListener("click", addVal);
    }
    
    var actButton=document.querySelectorAll('.act');
    for(var i=0;i<actButton.length;i++)
    { 
        actButton[i].addEventListener("click", countResult);
    }
   
    document.getElementById('run').addEventListener("click", countResult);
    document.getElementById('clear').addEventListener("click", clearResult);
    document.getElementById('clear').addEventListener("click", clearResult);

    document.getElementById('ms').addEventListener("click", SaveMemory);
    document.getElementById('mr').addEventListener("click", ReadFromMemory);
    document.getElementById('mc').addEventListener("click", CleanMemory);
    document.getElementById('+m').addEventListener("click", AddToMemory);
    document.getElementById('-m').addEventListener("click", SubtractFromMemory);

    document.onkeydown=keyboardHandl;

   
    
})();
