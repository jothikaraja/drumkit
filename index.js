
 

$("h1").text("hello");
var btns=document.querySelectorAll("button");
var aud=["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3"];

window.addEventListener("keydown",press);

for(var i=0;i<7;i++)
{
	/*btns[i].addEventListener("click",handleclick);
	btns[i].addEventListener("click",changebg);*/

    btns[i].addEventListener("click",playsound);


}
function press(e){
	var x=0;
	var t=['w','a','s','d','j','k','l'];
	for(var i=0;i<7;i++)
	{
		if(e.key == t[i])
			x=i;
	}
	var audio = new Audio(aud[x]);
	audio.play();
}
function playsound(){
	var x=0;
	var t=['w','a','s','d','j','k','l'];
	for(var i=0;i<7;i++)
	{
         if(this.textContent == t[i])
         {
         	x=i;
         }
	}
	var audio = new Audio(aud[x]);
	audio.play();
}


/*function handleclick(){
	alert("i got clicked");
}
function changebg(){
	this.style.backgroundColor="red";


}*/