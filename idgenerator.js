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

tinCanvas.width = window.innerWidth;
tinCanvas.height = window.innerHeight;

/*button.addEventListener("click", () => {
    alert("Do you want to logout?");
    window.location.href = "index.html";
});*/

const image = new Image()
image.src = 'TinID3.jpg'
image.onload = function () {
    drawImage()
}

ctx.imageSmoothingEnabled = true;

function drawImage() {
    ctx.drawImage(image, 0, 0, tinCanvas.width, tinCanvas.height) //first 0 us right, second 0 is down

    ctx.drawImage(idImage, 1235, 325, 545, 450);

    ctx.font = 'bold 600% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(nameInput.value, 190, 310);

    ctx.font = 'bold 620% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(tinIdInput.value, 380, 430);

    ctx.font = 'bold 380% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(addressInput.value, 190, 500);

    ctx.font = 'bold 380% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(address2Input.value, 190, 570);

    ctx.font = 'bold 380% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(address3Input.value, 190, 640);

    ctx.font = 'bold 400% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(birthdayInput.value, 700, 710);

    ctx.font = 'bold 400% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(issueInput.value, 700, 780);

    ctx.font = 'bold 400% Amalfi Coast'
    ctx.fillStyle = 'black'
    ctx.fillText(signatureInput.value, 330, 890);
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

const download = document.getElementById("down");
download.addEventListener("click", function () {

    if (window.navigator.msSaveBlob) {

        window.navigator.msSaveBlob(tinCanvas.msToBlob());
    } else {

        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = tinCanvas.toDataURL();
        a.download = "ID Generator - " + nameInput.value +
            " - Credits to Alexander Grayson ????????????????????";
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
