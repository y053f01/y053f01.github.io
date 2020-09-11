/*
#
# All Rights (c) to @y053f01 2020
# https://y053f01.github.io
# 
*/

function sklsTwo() {
var i = document.getElementById("codes-html");
var ii = document.getElementById("codes-css");
var iii = document.getElementById("codes-php");
var iv = document.getElementById("codes-mysql");
var v = document.getElementById("codes-js");
var vi = document.getElementById("codes-c");
var vii = document.getElementById("codes-java");
var viii = document.getElementById("codes-python");

 if (i.className == "codes-html") {
 	i.className = "codes-html-hover";
 	ii.className = "codes-css-hover";
 	iii.className = "codes-php-hover";
 	iv.className = "codes-mysql-hover";
 	v.className = "codes-js-hover";
 	vi.className = "codes-c-hover";
 	vii.className = "codes-java-hover";
 	viii.className = "codes-python-hover";
 } else {
 	i.className = "codes-html";
 	ii.className = "codes-css";
 	iii.className = "codes-php";
 	iv.className = "codes-mysql";
 	v.className = "codes-js";
 	vi.className = "codes-c";
 	vii.className = "codes-java";
 	viii.className = "codes-python";
 }
}
 
function test() {
var touchtocancel = document.getElementById("touchtocancel");
var aaaa = document.getElementById("aaaa");
var test = document.getElementById("test");

 if (test.className == "aaaj") {
  touchtocancel.className = "touchtocancel"
 	aaaa.className = "aaaa-aftr";
 	test.className = "aaaj2";
 } else {
  touchtocancel.className = "touchtocancelnone"
 	aaaa.className = "aaaa";
 	test.className = "aaaj";
 }
}

function skls() {
  var a = document.getElementById("skls-card");
  var aaaa = document.getElementById("aaaa");
  var html_pro = document.getElementById("html-pro");
  var css_pro = document.getElementById("css-pro");
  var php_pro = document.getElementById("php-pro");
  var mysql_pro = document.getElementById("mysql-pro");
  var js_pro = document.getElementById("js-pro");
  var c_pro = document.getElementById("c-pro");
  var java_pro = document.getElementById("java-pro");
  var python_pro = document.getElementById("python-pro");
  
  // Num progress id="code-per-html"
  
  var code_per_html = document.getElementById("code-per-html");
  var code_per_css = document.getElementById("code-per-css");
  var code_per_php = document.getElementById("code-per-php");
  var code_per_mysql = document.getElementById("code-per-mysql");
  var code_per_js = document.getElementById("code-per-js");
  var code_per_c = document.getElementById("code-per-c");
  var code_per_java = document.getElementById("code-per-java");
  var code_per_python = document.getElementById("code-per-python");
  var done = document.getElementById("done-btn");
  
  if (a.className == "skls-card") {
    done.className = "done-btn";
    a.className = "skls-card-hover";
    aaaa.className = "aaaa-aftr";
    //progress
    html_pro.className = "html-progress";
    css_pro.className = "css-progress";
    php_pro.className = "php-progress";
    mysql_pro.className = "mysql-progress";
    js_pro.className = "js-progress";
    c_pro.className = "c-progress";
    java_pro.className = "java-progress";
    python_pro.className = "python-progress";
    //progress num
    code_per_html.className = "code-per-html-hover";
    code_per_css.className = "code-per-css-hover";
    code_per_php.className = "code-per-php-hover";
    code_per_mysql.className = "code-per-mysql-hover";
    code_per_js.className = "code-per-js-hover";
    code_per_c.className = "code-per-c-hover";
    code_per_java.className = "code-per-java-hover";
    code_per_python.className = "code-per-python-hover";
    goIn();
   sklsTwo();

  } else {    
    done.className = "done-btn-hover";
    a.className = "skls-card";
    aaaa.className = "aaaa";
     	//back
    html_pro.className = "html";
    css_pro.className = "css";
    php_pro.className = "php";
    mysql_pro.className = "mysql";
    js_pro.className = "js";
    c_pro.className = "c";
    java_pro.className = "java";
    python_pro.className = "python";
    //progress num
    code_per_html.className = "code-per-html";
    code_per_css.className = "code-per-css";
    code_per_php.className = "code-per-php";
    code_per_mysql.className = "code-per-mysql";
    code_per_js.className = "code-per-js";
    code_per_c.className = "code-per-c";
    code_per_java.className = "code-per-java";
    code_per_python.className = "code-per-python";
    sklsTwo();
    goInLess();
  }
}

function goIn() {
 // #frame_html()
 setTimeout(function()
 {
  var width_html = 0;
  var id_html = setInterval(frame_html, 10);    
  var elem_html = document.getElementById("html-91");
     
  function frame_html() {
    if (width_html >= 91) {
     i = 0;
    } else {
      width_html++;
  
      //elem.style.width = width + "%";
      elem_html.innerHTML = width_html  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 2000);
 // #frame_css()
 setTimeout(function()
 {
  var elem_css = document.getElementById("css-80");
  var id_css = setInterval(frame_css, 10);
  var width_css = 0;
  
  function frame_css() {
    if (width_css >= 80) {
     i = 0;
    } else {
      width_css++;
  
      //elem.style.width = width + "%";
      elem_css.innerHTML = width_css  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 2100);
 // #frame_php()
 setTimeout(function()
 {
  var id_php = setInterval(frame_php, 10);
  var elem_php = document.getElementById("php-41");
  var width_php = 0;
  
  function frame_php() {
    if (width_php >= 41) {
     i = 0;
    } else {
      width_php++;
  
      //elem.style.width = width + "%";
      elem_php.innerHTML = width_php  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 2200);
 // #frame_mysql()
 setTimeout(function()
 {
  var id_mysql = setInterval(frame_mysql, 10);
  var elem_mysql = document.getElementById("mysql-40");
  var width_mysql = 0;
  
  function frame_mysql() {
    if (width_mysql >= 40) {
     i = 0;
    } else {
      width_mysql++;
  
      //elem.style.width = width + "%";
      elem_mysql.innerHTML = width_mysql  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 2300);
 // #frame_js()
 setTimeout(function()
 {
  var id_js = setInterval(frame_js, 10);
  var elem_js = document.getElementById("js-50");
  var width_js = 0;
  
  function frame_js() {
    if (width_js >= 50) {
     i = 0;
    } else {
      width_js++;
  
      //elem.style.width = width + "%";
      elem_js.innerHTML = width_js  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 2400);
 // #frame_c()
 setTimeout(function()
 {
  var id_c = setInterval(frame_c, 10);
  var elem_c = document.getElementById("c-10");
  var width_c = 0;
  
  function frame_c() {
    if (width_c >= 10) {
     i = 0;
    } else {
      width_c++;
  
      //elem.style.width = width + "%";
      elem_c.innerHTML = width_c  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 2500);
 // #frame_java()
 setTimeout(function()
 {
  var id_java = setInterval(frame_java, 10);
  var elem_java = document.getElementById("java-1");
  var width_java = 0;
  
  function frame_java() {
    if (width_java >= 1) {
     i = 0;
    } else {
      width_java++;
  
      //elem.style.width = width + "%";
      elem_java.innerHTML = width_java  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 2600);
 // #frame_python()
 setTimeout(function()
 {
  var id_python = setInterval(frame_python, 10);
  var elem_python = document.getElementById("python-20");
  var width_python = 0;
  
  function frame_python() {
    if (width_python >= 20) {
     i = 0;
    } else {
      width_python++;
  
      //elem.style.width = width + "%";
      elem_python.innerHTML = width_python  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 2700);
}

function goInLess() {
 // #frame_html()
 setTimeout(function()
 {
  var width_html = 91;
  var id_html = setInterval(frame_html, 10);    
  var elem_html = document.getElementById("html-91");
     
  function frame_html() {
    if (width_html <= 0) {
     i = 0;
    } else {
      width_html--;
  
      //elem.style.width = width + "%";
      elem_html.innerHTML = width_html  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 0);
 // #frame_css()
 setTimeout(function()
 {
  var elem_css = document.getElementById("css-80");
  var id_css = setInterval(frame_css, 10);
  var width_css = 80;
  
  function frame_css() {
    if (width_css <= 0) {
     i = 0;
    } else {
      width_css--;
  
      //elem.style.width = width + "%";
      elem_css.innerHTML = width_css  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 0);
 // #frame_php()
 setTimeout(function()
 {
  var id_php = setInterval(frame_php, 10);
  var elem_php = document.getElementById("php-41");
  var width_php = 41;
  
  function frame_php() {
    if (width_php <= 0) {
     i = 0;
    } else {
      width_php--;
  
      //elem.style.width = width + "%";
      elem_php.innerHTML = width_php  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 0);
 // #frame_mysql()
 setTimeout(function()
 {
  var id_mysql = setInterval(frame_mysql, 10);
  var elem_mysql = document.getElementById("mysql-40");
  var width_mysql = 40;
  
  function frame_mysql() {
    if (width_mysql <= 0) {
     i = 0;
    } else {
      width_mysql--;
  
      //elem.style.width = width + "%";
      elem_mysql.innerHTML = width_mysql  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 0);
 // #frame_js()
 setTimeout(function()
 {
  var id_js = setInterval(frame_js, 10);
  var elem_js = document.getElementById("js-50");
  var width_js = 50;
  
  function frame_js() {
    if (width_js <= 0) {
     i = 0;
    } else {
      width_js--;
  
      //elem.style.width = width + "%";
      elem_js.innerHTML = width_js  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 0);
 // #frame_c()
 setTimeout(function()
 {
  var id_c = setInterval(frame_c, 10);
  var elem_c = document.getElementById("c-10");
  var width_c = 10;
  
  function frame_c() {
    if (width_c <= 0) {
     i = 0;
    } else {
      width_c--;
  
      //elem.style.width = width + "%";
      elem_c.innerHTML = width_c  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 0);
 // #frame_java()
 setTimeout(function()
 {
  var id_java = setInterval(frame_java, 10);
  var elem_java = document.getElementById("java-1");
  var width_java = 1;
  
  function frame_java() {
    if (width_java <= 0) {
     i = 0;
    } else {
      width_java--;
  
      //elem.style.width = width + "%";
      elem_java.innerHTML = width_java  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 0);
 // #frame_python()
 setTimeout(function()
 {
  var id_python = setInterval(frame_python, 10);
  var elem_python = document.getElementById("python-20");
  var width_python = 20;
  
  function frame_python() {
    if (width_python <= 0) {
     i = 0;
    } else {
      width_python--;
  
      //elem.style.width = width + "%";
      elem_python.innerHTML = width_python  + "%<div class=\"triangle-0\"></div>";
    }      
  }
 }, 0);
}
function closeit() {
 var load_page = document.getElementById("load-page");
 if (load_page.className == "load-page") {
  load_page.className = "load-page-hover";
 }
}

function btn_close_hover() {
 var load_page = document.getElementById("btn-close-id");
 if (load_page.className == "btn-close") {
  load_page.className = "btn-close-hover";
 }
}
function namename() {
	var name = document.getElementById("name");
	var mylogo = document.getElementById("mylogo");
 if (name.className == "name-hover") {
   	name.className = "name-hover-two";
   	mylogo.className = "mylogo-hover-two";
 }
}
   
function content() {
 var content = document.getElementById("content");
 var name = document.getElementById("name");
 var mylogo = document.getElementById("mylogo");
 var theme4 = document.getElementById("theme4");
 var theme3 = document.getElementById("theme3");
 var theme2 = document.getElementById("theme2");
 var theme1 = document.getElementById("theme1");
 
 if (content.className == "content") {
  content.className = "content-hover";
  name.className = "name-hover";
  mylogo.className = "mylogo-hover";
  theme4.className = "theme4-hover";
  theme3.className = "theme3-hover";
  theme2.className = "theme2-hover";
  theme1.className = "theme1-hover";
  setTimeout(function()
		{  
	  $('#messagess').typeIt({
	    strings: ['Messages:']
	  });
		}, 1000);
		setTimeout(function()
		{  
   namename();
		}, 2000);
		
 } else {
 	content.className = "content";
 }
}

function skls_dis() {
	var i = document.getElementById("skls-dis");
	var ii = document.getElementById("skls-dis-card");
	if (i.className == "skls-dis") {
		i.className = "skls-dis-hover";
		ii.className = "skls-dis-card-hover";
	}
}
function skls_dis_end() {
	var i = document.getElementById("skls-dis");
	var ii = document.getElementById("skls-dis-card");
	if (i.className == "skls-dis-hover") {
		i.className = "skls-dis";
		ii.className = "skls-dis-card";
	}
}

function skls_dis_start() {
	var i = document.getElementById("skls-dis");
	var ii = document.getElementById("skls-dis-card");
	if (i.className == "skls-dis-hover") {
		i.className = "skls-dis";
		ii.className = "skls-dis-card";
			setTimeout(function()
			{  
			skls();   
			}, 500);
		}
	}
	
function profun() {
var content = document.getElementById("content");
var projects = document.getElementById("content-pro");
 if (content.className == "content-hover" || content.className == "content-hover-two") {
  content.className = "content-two";
  projects.className = "content-pro-hover";
 }
}

function mefun() {
var content = document.getElementById("content");
var projects = document.getElementById("content-pro");
 if (content.className == "content-two") {
  content.className = "content-hover-two";
 	projects.className = "content-pro";
 }
}
