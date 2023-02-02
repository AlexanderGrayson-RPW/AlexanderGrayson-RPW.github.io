const tinCanvas = document.getElementById('tin')
const ctx = tinCanvas.getContext('2d')
const nameInput = document.getElementById('name')
const tinIdInput = document.getElementById('id')
const addressInput = document.getElementById('address')
const address2Input = document.getElementById('address2')
const address3Input = document.getElementById('address3')
const birthdayInput = document.getElementById('birthday')
const issueInput = document.getElementById('issue')
const signatureInput = document.getElementById('signature')
const downloadBtn = document.getElementById('download-btn')
const idImage = document.getElementById("imgDisplayed");
var button = document.getElementById('logoutButton');

/*button.addEventListener("click", () => {
    alert("Do you want to logout?");
    window.location.href = "index.html";
});*/

const image = new Image()
image.src = 'TinID3.jpg'
image.onload = function () {
    drawImage()
}

const width = image.width;
const height = image.height;
tinCanvas.width = width;
tinCanvas.height = height;

ctx.imageSmoothingEnabled = true;

function drawImage() {
    ctx.drawImage(image, 0, 0, tinCanvas.width, tinCanvas.height) //first 0 is right, second 0 is down

    ctx.drawImage(idImage, 919, 293, 410, 420);

    ctx.font = 'bold 530% Palatino Linotype' //600 FONT BEFORE
    ctx.fillStyle = 'black'
    ctx.fillText(nameInput.value, 140, 270);

    ctx.font = 'bold 495% Palatino Linotype' //620 FONT BEFORE
    ctx.fillStyle = 'black'
    ctx.fillText(tinIdInput.value, 260, 385);

    ctx.font = 'bold 310% Palatino Linotype' //400 FONT BEFORE
    ctx.fillStyle = 'black'
    ctx.fillText(addressInput.value, 140, 450);

    ctx.font = 'bold 310% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(address2Input.value, 140, 510);

    ctx.font = 'bold 310% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(address3Input.value, 140, 570);

    ctx.font = 'bold 350% Palatino Linotype' //400 FONT BEFORE
    ctx.fillStyle = 'black'
    ctx.fillText(birthdayInput.value, 510, 637);

    ctx.font = 'bold 350% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(issueInput.value, 510, 700);

    ctx.font = 'bold 310% Amalfi Coast'
    ctx.fillStyle = 'black'
    ctx.fillText(signatureInput.value, 250, 800);
}

signatureInput.addEventListener('input', function () {
    drawImage()
})

issueInput.addEventListener('input', function () {
    drawImage()
})

birthdayInput.addEventListener('input', function () {
    drawImage()
})

address3Input.addEventListener('input', function () {
    drawImage()
})

address2Input.addEventListener('input', function () {
    drawImage()
})

addressInput.addEventListener('input', function () {
    drawImage()
})

tinIdInput.addEventListener('input', function () {
    drawImage()
})

nameInput.addEventListener('input', function () {
    drawImage()
})

function loadImage(event) {
    const idImage = document.getElementById("imgDisplayed");
    idImage.src = URL.createObjectURL(event.target.files[0]);
}

const clearCanvas = document.querySelector(".clear-btn");
clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, tinCanvas.width, tinCanvas.height);
});

var logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", function() {
    location.href = "index.html";
});

const download = document.getElementById("down");
download.addEventListener("click", function () {

    if (window.navigator.msSaveBlob) {

        window.navigator.msSaveBlob(tinCanvas.msToBlob());
    } else {

        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = tinCanvas.toDataURL();
        a.download = "ID Generator - " + nameInput.value +
            " - Credits to Alexander Grayson ʕ•́ᴥ•̀ʔっ";
        a.click();
        document.body.removeChild(a);
    }
});

function showMap() {
    country = document.getElementById("country").value;
    if (country == "TIN") {
        document.getElementById("tinID").style.display = 'block'
    } else {
        document.getElementById("tinID").style.display = 'none'
    }

    country = document.getElementById("country").value;
    if (country == "VOTER") {
        document.getElementById("votersID").style.display = 'block'
    }
    else {
        document.getElementById("votersID").style.display = 'none'
    }

    country = document.getElementById("country").value;
    if (country == "PASSPORT") {
        document.getElementById("passportID").style.display = 'block'
    }
    else {
        document.getElementById("passportID").style.display = 'none'
    }

    country = document.getElementById("country").value;
    if (country == "DRIVER") {
        document.getElementById("driversID").style.display = 'block'
    }
    else {
        document.getElementById("driversID").style.display = 'none'
    }

    country = document.getElementById("country").value;
    if (country == "POSTAL") {
        document.getElementById("postalID").style.display = 'block'
    }
    else {
        document.getElementById("postalID").style.display = 'none'
    }

    country = document.getElementById("country").value;
    if (country == "PRC") {
        document.getElementById("prcID").style.display = 'block'
    }
    else {
        document.getElementById("prcID").style.display = 'none'
    }

    country = document.getElementById("country").value;
    if (country == "PHILHEALTH") {
        document.getElementById("philhealthID").style.display = 'block'
    }
    else {
        document.getElementById("philhealthID").style.display = 'none'
    }

    country = document.getElementById("country").value;
    if (country == "SSS") {
        document.getElementById("sssID").style.display = 'block'
    }
    else {
        document.getElementById("sssID").style.display = 'none'
    }

    country = document.getElementById("country").value;
    if (country == "OFW") {
        document.getElementById("ofwID").style.display = 'block'
    }
    else {
        document.getElementById("ofwID").style.display = 'none'
    }
}

function notify(type,message){

  (()=>{

    let n = document.createElement("div");

    let id = Math.random().toString(36).substr(2,10);

    n.setAttribute("id",id);

    n.classList.add("notification",type);

    n.innerText = message;

    document.getElementById("notification-area").appendChild(n);

    setTimeout(()=>{

      var notifications = document.getElementById("notification-area").getElementsByClassName("notification");

      for(let i=0;i<notifications.length;i++){

        if(notifications[i].getAttribute("id") == id){

          notifications[i].remove();

          break;

        }

      }

    },5000);

  })();

}

function notifySuccess(){

  notify("success","The image was successfully downloaded.");

}

function notifyError(){

  notify("error","Fatal Error: This session cannot be logged out.");

}

function notifyInfo(){

  notify("info","The canvas was successfully cleared.");

}
