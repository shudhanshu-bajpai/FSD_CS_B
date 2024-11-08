function val(){
    let user = document.getElementById("uname").value;
    let pass = document.getElementById("pass").value;       
    if(pass.length < 5){
        alert("password length should be more than or equla to 5")
        return false;
    }
    if(pass.length >= 5){
        return true;
    }
}