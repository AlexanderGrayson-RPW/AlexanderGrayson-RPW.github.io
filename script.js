function Login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(username == "Alex" && password == "Alexander1107") {
        alert("Login Successfully!");
        window.location.href="idgenerator.html";
        return false;
    }else{
        alert("KA AH TRY TRY KA PA");
        return false;
    }
}
