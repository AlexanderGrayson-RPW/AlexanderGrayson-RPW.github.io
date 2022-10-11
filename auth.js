function Login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(username == "alexgray" && password == "Alexander1107") {
        alert("Login Successfully!");
        window.location.href="index.html";
        return false;
    } else {
        alert("TANGINA KA AH TRY TRY KA PA");
        return false;
    }
}