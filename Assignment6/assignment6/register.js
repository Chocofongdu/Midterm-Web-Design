window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
  	form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
var error = document.getElementById("errormsg");


  var x = document.forms["myForm"]["password"].value;
  var y = document.forms["myForm"]["confirmpassword"].value;

  if(x != y){
  	alert("Retype Password incorrect");
  	error.innerHTML = "*Password Incorrect";
  	return false;

  } else {
  	alert("Register Complete!");
  }

}