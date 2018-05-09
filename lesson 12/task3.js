
var content=document.getElementById("content");

function loadNews(){
	document.removeEventListener("scroll",scrollAction);
    var xhr = new XMLHttpRequest();
	xhr.open("GET", 'news.html', true);
	xhr.onload = function(){
		content.innerHTML+=this.responseText;
		document.addEventListener("scroll",scrollAction);
		
    }
	xhr.send(null);
}

function scrollAction(e){
    if( document.body.getBoundingClientRect().bottom < window.innerHeight + 100  ){
		loadNews();
	}
}



document.addEventListener("scroll",scrollAction)
document.onload= loadNews();
