var countries=[{name: "Austria", flag: "content/23px-Flag_of_Austria.svg.png", population: 8169929, code: 61},
{name: "Finland", flag: "content/23px-Flag_of_Finland.svg.png", population: 5157153, code: 358 },
{name: "Germany", flag: "content/23px-Flag_of_Germany.svg.png", population: 80716000, code: 49 },
{name: "Ireland", flag: "content/23px-Flag_of_Ireland.svg.png", population: 4234925, code: 353 },
{name: "Italy", flag: "content/23px-Flag_of_Italy.svg.png", population: 69655643, code: 39 },
{name: "Norway", flag: "content/21px-Flag_of_Norway.svg.png", population: 5018586, code: 47 },

{name: "Spain", flag: "content/23px-Flag_of_Spain.svg.png", population: 47067265, code: 34 },
{name: "Sweden", flag: "content/23px-Flag_of_Sweden.svg.png", population: 9090013, code: 46 },
{name: "Switzerland", flag: "content/16px-Flag_of_Switzerland.svg.png", population: 7507000, code: 41 },
{name: "Belgium", flag: "content/23px-Flag_of_Belgium_(civil).svg.png", population: 8169876, code: 32 },
{name: "Czech Republic", flag: "content/23px-Flag_of_the_Czech_Republic.svg.png", population: 10256245, code: 420 },
{name: "Estonia", flag: "content/23px-Flag_of_Estonia.svg.png", population: 1340194, code: 372 }]

var ol = document.createElement('ol');
var body = document.getElementsByTagName("body")[0];
body.appendChild(ol);
 
countries.forEach(function(item){
			var li = document.createElement('li');
			ol.appendChild(li);
            var _img=document.createElement('img');
            _img.src=item.flag;
            li.innerHTML += "Name: "+item.name+" Population: "+item.population+" code: "+item.code+" flag: ";
            li.appendChild(_img);
		});