const container = document.querySelector(".container"),

      pwShowHide = document.querySelectorAll(".showHidePw"),

      pwFields = document.querySelectorAll(".password"),

      signUp = document.querySelector(".signup-link"),

      login = document.querySelector(".login-link");

    pwShowHide.forEach(eyeIcon =>{

        eyeIcon.addEventListener("click", ()=>{

            pwFields.forEach(pwField =>{

                if(pwField.type ==="password"){

                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{

                        icon.classList.replace("uil-eye-slash", "uil-eye");

                    })

                }else{

                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{

                        icon.classList.replace("uil-eye", "uil-eye-slash");

                    })

                }

            }) 

        })

    })

function Login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(username == "Grayson0407" && password == "Grayson0407") {
        alert("Login Successfully!");
        window.location.href="idgenerator.html";
        return false;
    }else{
        alert("TANGINA KA AH TRY TRY KA PA");
        return false;
    }
}
