function Login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(username == "Alexander0407" && password == "Alexander0407") {
        alert("Login Successfully!");
        window.location.href="idgenerator.html";
        return false;
    }else{
        alert("KA AH TRY TRY KA PA");
        return false;
    }
}
