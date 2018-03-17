var listapp=document.getElementById("list");
var b1=document.getElementById("b1");
var nameChange= document.getElementById("name");
var listItems = document.getElementById("List").getElementsByTagName("li");

// for(i=0; i<listItems.length; i++)
// {
// 	listItems[i].addEventListener("click",clickedList);
// }

listapp.addEventListener("click",clickedList);

function clickedList(e) {
	if(e.target.nodeName=="LI")
	{
		nameChange.innerHTML= e.target.innerHTML;
		for(i=0; i<e.target.parentNode.children.length; i++)
		{
			e.target.parentNode.children[i].classList.remove("clicked");
		}
		e.target.classList.add("clicked");
	}
}

b1.addEventListener("click",add);
function add() {
	listapp.innerHTML += "<hr> <li>New item</li>";
}