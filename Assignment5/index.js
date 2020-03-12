var click =1;
function postFunction(){
    
    var x = document.getElementById("text1").value;
    if(click == 1){
    var n1 = document.getElementById("post1");
    n1.innerHTML = x;
    }
    else if(click ==2)
    {
        var n2 = document.getElementById("reply1");
    n2.innerHTML = x;
    }
    else{
        var n3 = document.getElementById("reply2");
    n3.innerHTML = x;
    }
    click +=1;
    

}
function clearFunction(){
    click = 1;
    var n1 = document.getElementById("post1");
    n1.innerHTML = ""; 
    var n2 = document.getElementById("reply1");
    n2.innerHTML = "";
    var n3 = document.getElementById("reply2");
    n3.innerHTML = "";
}