function load(dir){
    var xhr=new XMLHttpRequest;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200)   document.getElementById("content").innerHTML=this.responseText;
        else 
        document.getElementById("content").innerHTML="Loading..."
      }
      xhr.open('GET',dir,true);
    xhr.send(null);
     
}

function viewText(text){
    document.getElementById("content").innerHTML=text;
}

document.getElementById("load").addEventListener("click",function(){
    var dir=document.getElementById("directory").value;
    load(dir);
})