function Login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(username == "AlexRPW" && password == "Alexander1107") {
        alert("LOGIN SUCCESSFULLY!");
        window.location.href="idgenerator.html";
        return false;
    } else {
        alert("TANGINA KA! KUHA KO NA IP ADDDRESS MO. TRY TRY KA PA HA");
        return false;
    }
}
