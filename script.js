/* var i = 0;
 var name = "Yosef Al-Hakmani";
 var nickname = "Yosef raven";
 var speed = 50;*/


 var speed = 20;
 transitions = "1s";


 function bachelor() {
 	document.getElementById("edubarin").style.width = "25%"; 
 	document.getElementById("edubarin").style.transition = transitions;

 	document.getElementById("cursorone").style.marginLeft = "25%";
 	document.getElementById("cursorone").style.transition = transitions;

 	document.getElementById("inboxone").style.marginLeft = "24%";
 	document.getElementById("inboxone").style.transition = transitions;
 }



function python(){
	document.getElementById("pythonbar").style.width = "75%"; 
 	document.getElementById("pythonbar").style.transition = transitions;

 	document.getElementById("cursortwo").style.marginLeft = "74%";
 	document.getElementById("cursortwo").style.transition = transitions;

 	document.getElementById("inboxtwo").style.marginLeft = "73%";
 	document.getElementById("inboxtwo").style.transition = transitions;

}

function js(){
	document.getElementById("jsbar").style.width = "60%"; 
 	document.getElementById("jsbar").style.transition = transitions;

 	document.getElementById("cursorthree").style.marginLeft = "59%";
 	document.getElementById("cursorthree").style.transition = transitions;

 	document.getElementById("inboxthree").style.marginLeft = "58%";
 	document.getElementById("inboxthree").style.transition = transitions;

}


function english(){
	document.getElementById("engbar").style.width = "99%"; 
 	document.getElementById("engbar").style.transition = transitions;

 	document.getElementById("cursorfour").style.marginLeft = "98%";
 	document.getElementById("cursorfour").style.transition = transitions;

 	document.getElementById("inboxfour").style.marginLeft = "96%";
 	document.getElementById("inboxfour").style.transition = transitions;

}


function webfun(){
	document.getElementById("webbar").style.width = "90%"; 
 	document.getElementById("webbar").style.transition = transitions;

 	document.getElementById("cursorfive").style.marginLeft = "88%";
 	document.getElementById("cursorfive").style.transition = transitions;

 	document.getElementById("inboxfive").style.marginLeft = "86%";
 	document.getElementById("inboxfive").style.transition = transitions;
}


function allFunctions(){
	python();
	bachelor();
	js();
	english();
	webfun();
}

function showSkillsShowAtch(){
  document.getElementById("info_skillss").style.height = "510px";
  document.getElementById("info_skillss").style.padding = "15px";
  document.getElementById("info_skillss").style.transition = "0.5s";

   document.getElementById("info_atch").style.height = "700px";
  document.getElementById("info_atch").style.padding = "15px";
  document.getElementById("info_atch").style.transition = "0.5s";
}

document.getElementById("info_first").ontouchmove = showSkillsShowAtch;
document.getElementById("info_first").onmousemove = showSkillsShowAtch;

// on touch move
document.getElementById("info_skillss").ontouchmove = allFunctions;
document.getElementById("info_skillss").onmousemove = allFunctions;

