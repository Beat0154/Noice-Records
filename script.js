function disableButton(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var submit = document.getElementById("submit");
    if(name.value==""||email.value==""||message.value=="")
    {
        submit.ClassName = "disabled";
        submit.disabled = "disabled";
    }else{
        submit.className = "";
        submit.disabled = "";
    }
}
