var xml =  new window.XMLHttpRequest();


function adds()
{
	
	var url = "ajaxaddstudent.php";
	xml.open("POST", url, true);
	var first = document.getElementById("first").value;
	var last = document.getElementById("last").value;
	var state = document.getElementById("state").value;
	var phone = document.getElementById("phone").value;
	var dept = document.getElementById("dept").value;
	var gender = document.getElementById("gender").value;
	var matric = document.getElementById("matric2").value;
	var password = document.getElementById("password2").value;
	
	if(first == ""){
		notify("please provide your First Name");
		return;
	}
	if(last == ""){
		notify("please provide your Last Name");
		return;
	}
	if(state == ""){
		notify("please provide your state");
		return;
	}
	if(phone == ""){
		notify("please provide your Phone");
		return;
	}
	if(dept == ""){
		notify("please provide Department");
		return;
	}
	
	if(matric == ""){
		notify("please provide your Matric Number");
		return;
	}
	if(password == ""){
		notify("please Create a password");
		return;
	}
	if(gender == "Gender"){
		notify("please provide your Gender");
		return;
	}
	var ff = new FormData();
	ff.append("data", maxid);
	xml.onreadystatechange = function(){
		if(xml.status == 200 && xml.readyState == 4){
			document.getElementById("ajax").innerHTML = xml.responseText;
		}
		
	}
	xml.send(ff);
}

function notify(str)
{
	document.getElementById("error").innerHTML = str;
}