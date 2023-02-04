//TIN ID SECTION
const tinCanvas = document.getElementById('tin')
const ctx = tinCanvas.getContext('2d')
const nameInput = document.getElementById('name')
const tinIdInput = document.getElementById('id')
const addressInput = document.getElementById('address')
const address2Input = document.getElementById('address2')
const address3Input = document.getElementById('address3')
const birthdayInput = document.getElementById('birthday')
const issueInput = document.getElementById('issue')
const idImageSignature = document.getElementById('imgDisplayedSignature')
const idImage = document.getElementById('imgDisplayed');
//var button = document.getElementById('logoutButton');

const tinImage = new Image()
tinImage.src = 'TinID3.jpg';
tinImage.onload = function () {
    drawImage()
}

function drawImage() {

    let width = tinImage.width;
    let height = tinImage.height;

    tinCanvas.width = width;
    tinCanvas.height = height;

    ctx.imageSmoothingEnabled = true;

    ctx.drawImage(tinImage, 0, 0, tinCanvas.width, tinCanvas.height) //first 0 is right, second 0 is down
    ctx.drawImage(idImage, 919, 293, 410, 420);
    ctx.drawImage(idImageSignature, 190, 725, 450, 150);

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

    /*ctx.font = 'bold 310% Amalfi Coast'
    ctx.fillStyle = 'black'
    ctx.fillText(signatureInput.value, 250, 800);*/
}

    /*signatureInput.addEventListener('input', function () {
        drawImage()
    })*/

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

    function loadSignatureImage(event) {
        const idImageSignature = document.getElementById("imgDisplayedSignature");
        idImageSignature.src = URL.createObjectURL(event.target.files[0]);
    }

    const clearCanvas = document.querySelector(".clear-btn");
    clearCanvas.addEventListener("click", () => {
        ctx.clearRect(0, 0, tinCanvas.width, tinCanvas.height);
    });

    const download = document.getElementById("down");
    download.addEventListener("click", function () {

        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(tinCanvas.msToBlob());
        } else {
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.href = tinCanvas.toDataURL();
            a.download = "Tin ID Generator - " + nameInput.value +
                " - Credits to Alexander Grayson ʕ•́ᴥ•̀ʔっ";
            a.click();
            document.body.removeChild(a);
        }
    });

//NATIONAL ID SECTION
const nationalCanvas = document.getElementById('national')
const nationalCtx = nationalCanvas.getContext('2d')
const nationalIdInput = document.getElementById('natId')
const nationalLastNameInput = document.getElementById('natLastName')
const nationalGivenNameInput = document.getElementById('natGivenName')
const nationalMiddleNameInput = document.getElementById('natMiddleName')
const nationalBirthdayInput = document.getElementById('natBirthday')
const nationalAddressInput = document.getElementById('natAddress')
const nationalIdImage = document.getElementById('natImgDisplayed')
const nationalIdImage2 = document.getElementById('natImgDisplayed2');

const nationalImage = new Image()
nationalImage.src = 'NationalID2.jpg';
nationalImage.onload = function () {
    drawImageNationalID()
}

function drawImageNationalID() {

    let width = nationalImage.width;
    let height = nationalImage.height;

    nationalCanvas.width = width;
    nationalCanvas.height = height;

    nationalCtx.imageSmoothingEnabled = true;

    nationalCtx.drawImage(nationalImage, 0, 0, nationalCanvas.width, nationalCanvas.height) //first 0 is right, second 0 is down
    nationalCtx.drawImage(nationalIdImage, 147, 480, 455, 525);
    nationalCtx.drawImage(nationalIdImage2, 632, 500, 175, 223);

    nationalCtx.font = 'bold 390% Arial' //600 FONT BEFORE
    nationalCtx.fillStyle = 'black'
    nationalCtx.fillText(nationalIdInput.value, 157, 423); 

    nationalCtx.font = 'bold 390% Arial' //600 FONT BEFORE
    nationalCtx.fillStyle = 'black'
    nationalCtx.fillText(nationalLastNameInput.value, 927, 557);
    
    nationalCtx.font = 'bold 390% Arial' //600 FONT BEFORE
    nationalCtx.fillStyle = 'black'
    nationalCtx.fillText(nationalGivenNameInput.value, 927, 685);

    nationalCtx.font = 'bold 390% Arial' //600 FONT BEFORE
    nationalCtx.fillStyle = 'black'
    nationalCtx.fillText(nationalMiddleNameInput.value, 927, 870);

    nationalCtx.font = 'bold 395% Arial' //600 FONT BEFORE
    nationalCtx.fillStyle = 'black'
    nationalCtx.fillText(nationalBirthdayInput.value, 927, 995);

    nationalCtx.font = '300% Arial' //600 FONT BEFORE
    nationalCtx.fillStyle = 'black'
    nationalCtx.fillText(nationalAddressInput.value, 178, 1115);
}

nationalIdInput.addEventListener('input', function () {
    drawImageNationalID()
})

nationalLastNameInput.addEventListener('input', function () {
    drawImageNationalID()
})

nationalGivenNameInput.addEventListener('input', function () {
    drawImageNationalID()
})

nationalMiddleNameInput.addEventListener('input', function () {
    drawImageNationalID()
})

nationalBirthdayInput.addEventListener('input', function () {
    drawImageNationalID()
})

nationalAddressInput.addEventListener('input', function () {
    drawImageNationalID()
})

function loadNationalImage(event) {
    const nationalIdImage = document.getElementById("natImgDisplayed");
    const nationalIdImage2 = document.getElementById("natImgDisplayed2");
    nationalIdImage.src = URL.createObjectURL(event.target.files[0]);
    nationalIdImage2.src = URL.createObjectURL(event.target.files[0]);
}

const nationalClearCanvas = document.querySelector(".clear-btnNational");
nationalClearCanvas.addEventListener("click", () => {
    nationalCtx.clearRect(0, 0, nationalCanvas.width, nationalCanvas.height);
});

const nationalDownloadBtn = document.getElementById("downNational");
nationalDownloadBtn.addEventListener("click", function () {

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(nationalCanvas.msToBlob());
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = nationalCanvas.toDataURL();
        a.download = "National ID Generator - " + nationalLastNameInput.value +
            " - Credits to Alexander Grayson ʕ•́ᴥ•̀ʔっ";
        a.click();
        document.body.removeChild(a);
    }
});

//VOTERS ID SECTION
const votersCanvas = document.getElementById('voters')
const votersCtx = votersCanvas.getContext('2d')
const votersCityInput = document.getElementById('votersCity')
const votersVinInput = document.getElementById('votersVin')
const votersLastNameInput = document.getElementById('votersLastName')
const votersFirstNameInput = document.getElementById('votersFirstName')
const votersMiddleNameInput = document.getElementById('votersMiddleName')
const votersBirthdayInput = document.getElementById('votersBirthday')
const votersCivilStatusInput = document.getElementById('votersCivilStatus')
const votersCitizenshipInput = document.getElementById('votersCitizenship')
const votersAddressInput1 = document.getElementById('votersAddress1')
const votersAddressInput2 = document.getElementById('votersAddress2')
const votersPrecinctNumberInput = document.getElementById('votersPrecinctNumber')
const votersIdImage = document.getElementById('votersImgDisplayed')
const votersIdImageSignature = document.getElementById('votersSignatureDisplayed');

const votersImage = new Image()
votersImage.src = 'VotersID2.jpg';
votersImage.onload = function () {
    drawImageVotersID()
}

function drawImageVotersID() {

    let width = votersImage.width;
    let height = votersImage.height;

    votersCanvas.width = width;
    votersCanvas.height = height;

    votersCtx.imageSmoothingEnabled = true;

    votersCtx.drawImage(votersImage, 0, 0, votersCanvas.width, votersCanvas.height) //first 0 is right, second 0 is down
    votersCtx.drawImage(votersIdImage, 72.5, 240, 197, 252);
    votersCtx.drawImage(votersIdImageSignature, 85, 495, 250, 150);

    votersCtx.font = '130% Arial' 
    votersCtx.fillStyle = 'black'
    votersCtx.fillText(votersCityInput.value, 305, 132); 

    votersCtx.font = '163% Arial' 
    votersCtx.fillStyle = 'black'
    votersCtx.fillText(votersVinInput.value, 335, 162); 

    votersCtx.font = 'bold 150% Arial' 
    votersCtx.fillStyle = 'black'
    votersCtx.fillText(votersLastNameInput.value, 307, 205); 

    votersCtx.font = 'bold 150% Arial' 
    votersCtx.fillStyle = 'black'
    votersCtx.fillText(votersFirstNameInput.value, 307, 228); 

    votersCtx.font = 'bold 150% Arial' 
    votersCtx.fillStyle = 'black'
    votersCtx.fillText(votersMiddleNameInput.value, 307, 251); 

    votersCtx.font = '130% Arial' 
    votersCtx.fillStyle = 'black'
    votersCtx.fillText(votersBirthdayInput.value, 458, 293); 

    votersCtx.font = '130% Arial' 
    votersCtx.fillStyle = 'black'
    votersCtx.fillText(votersCivilStatusInput.value, 458, 323); 

    votersCtx.font = '130% Arial' 
    votersCtx.fillStyle = 'black'
    votersCtx.fillText(votersCitizenshipInput.value, 458, 350.5); 

    votersCtx.font = '130% Arial' 
    votersCtx.fillStyle = 'black'
    votersCtx.fillText(votersAddressInput1.value, 310, 410);

    votersCtx.font = '130% Arial' 
    votersCtx.fillStyle = 'black'
    votersCtx.fillText(votersAddressInput2.value, 310, 435);

    votersCtx.font = '130% Arial' 
    votersCtx.fillStyle = 'black'
    votersCtx.fillText(votersPrecinctNumberInput.value, 495, 463);
}

votersCityInput.addEventListener('input', function () {
    drawImageVotersID()
})

votersVinInput.addEventListener('input', function () {
    drawImageVotersID()
})

votersLastNameInput.addEventListener('input', function () {
    drawImageVotersID()
})

votersFirstNameInput.addEventListener('input', function () {
    drawImageVotersID()
})

votersMiddleNameInput.addEventListener('input', function () {
    drawImageVotersID()
})

votersBirthdayInput.addEventListener('input', function () {
    drawImageVotersID()
})

votersCivilStatusInput.addEventListener('input', function () {
    drawImageVotersID()
})

votersCitizenshipInput.addEventListener('input', function () {
    drawImageVotersID()
})

votersAddressInput1.addEventListener('input', function () {
    drawImageVotersID()
})

votersAddressInput2.addEventListener('input', function () {
    drawImageVotersID()
})

votersPrecinctNumberInput.addEventListener('input', function () {
    drawImageVotersID()
})

function loadVotersImage(event) {
    const votersIdImage = document.getElementById("votersImgDisplayed");
    votersIdImage.src = URL.createObjectURL(event.target.files[0]);
}

function loadVotersSignatureImage(event) {
    const votersIdImageSignature = document.getElementById("votersSignatureDisplayed");
    votersIdImageSignature.src = URL.createObjectURL(event.target.files[0]);
}

const votersClearCanvas = document.querySelector(".clear-btnVoters");
votersClearCanvas.addEventListener("click", () => {
    votersCtx.clearRect(0, 0, votersCanvas.width, votersCanvas.height);
});

const votersDownloadBtn = document.getElementById("downVoters");
votersDownloadBtn.addEventListener("click", function () {

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(votersCanvas.msToBlob());
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = votersCanvas.toDataURL();
        a.download = "Voters ID Generator - " + votersLastNameInput.value +
            " - Credits to Alexander Grayson ʕ•́ᴥ•̀ʔっ";
        a.click();
        document.body.removeChild(a);
    }
});
