function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
	  return params;
	  console.log(params);
 }

window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var form2 = document.getElementById("myLogin");
    form2.onsubmit = checkLogin;

    console.log("Running");

}

function checkLogin(){
	var id = document.forms["myLogin"]["username"].value;
	var pass = document.forms["myLogin"]["password"].value;
  
	var idPara = getParams()["username"];
	var pwPara = getParams()["password"];
  
	if(id != idPara || pass!=pwPara){
	  alert("Username or Password Incorrect!");
	  return false;
	}
  
	else {
	  alert("Log in complete!");
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			