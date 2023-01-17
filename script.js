const container = document.querySelector(".container"),

      pwShowHide = document.querySelectorAll(".showHidePw"),

      pwFields = document.querySelectorAll(".password"),

      signUp = document.querySelector(".signup-link"),

      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon

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

    if(username == "Alexander0407" && password == "Alexander0407") {
        alert("Login Successfully!");
        window.location.href="idgenerator.html";
        return false;
    }else{
        alert("TANGINA KA AH TRY TRY KA PA");
        return false;
    }
}
