function Login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(username == "alexgray" && password == "Alexander1107") {
        alert("WELCOME KINANGINAMO!");
        window.location.href="idgenerator.html";
        return false;
    } else {
        alert("TANGINA KA! KUHA KO NA IP ADDDRESS MO. TRY TRY KA PA HA");
        return false;
    }
}
