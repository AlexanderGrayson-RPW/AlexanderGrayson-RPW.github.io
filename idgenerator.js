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
            a.download = "Tin ID - " + nameInput.value +
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
const nationalIdImage = document.getElementById('natImgDisplayed');

const fileInput = document.querySelector("#imageFileInput")
const brightnessInput = document.querySelector("#brightness");
const saturationInput = document.querySelector("#saturation");
const blurInput = document.querySelector("#blur");
const inversionInput = document.querySelector("#inversion");

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

    renderImage()
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

const settings = {};
let image = null;

function resetSettings() {
  settings.brightness = "100";
  settings.saturation = "100";
  settings.blur = "0";
  settings.inversion = "0";

  brightnessInput.value = settings.brightness;
  saturationInput.value = settings.saturation;
  blurInput.value = settings.blur;
  inversionInput.value = settings.inversion;
}

function updateSetting(key, value) {
  if (!image) return;

  settings[key] = value;
  renderImage();
}

function generateFilter() {
    const { brightness, saturation, blur, inversion } = settings;
  
    return `brightness(${brightness}%) saturate(${saturation}%) blur(${blur}px) invert(${inversion}%)`;
}
  
function renderImage() {
    nationalCtx.filter = generateFilter();
    nationalCtx.drawImage(image, 632, 500, 175, 223); 
}

brightnessInput.addEventListener("change", () =>
  updateSetting("brightness", brightnessInput.value)
);
saturationInput.addEventListener("change", () =>
  updateSetting("saturation", saturationInput.value)
);
blurInput.addEventListener("change", () =>
  updateSetting("blur", blurInput.value)
);
inversionInput.addEventListener("change", () =>
  updateSetting("inversion", inversionInput.value)
);

fileInput.addEventListener("change", () => {
    image = new Image();
  
    image.addEventListener("load", () => {
      resetSettings();
      renderImage();
});
  
image.src = URL.createObjectURL(fileInput.files[0]);
});
  
resetSettings();

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
        a.download = "National ID - " + nationalLastNameInput.value +
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
        a.download = "Voters ID - " + votersLastNameInput.value +
            " - Credits to Alexander Grayson ʕ•́ᴥ•̀ʔっ";
        a.click();
        document.body.removeChild(a);
    }
});

//DRIVER LICENSE SECTION

const driversCanvas = document.getElementById('drivers')
const driversCtx = driversCanvas.getContext('2d')
const driversFullNameInput = document.getElementById('driversName')
const driversNationalityInput = document.getElementById('driversNationality')
const driversSexInput = document.getElementById('driversSex')
const driversBirthdayInput = document.getElementById('driversBirthday')
const driversWeightInput = document.getElementById('driversWeight')
const driversHeightInput = document.getElementById('driversHeight')
const driversAddressInput1 = document.getElementById('driversAddress1')
const driversAddressInput2 = document.getElementById('driversAddress2')
const driversLicenseNoInput = document.getElementById('driversLicenseNo')
const driversRegistrationInput = document.getElementById('driversRegistration')
const driversExpirationInput = document.getElementById('driversExpiration')
const driversAgencyInput = document.getElementById('driversAgency')
const driversBloodTypeInput = document.getElementById('driversBloodType')
const driversEyesColorInput = document.getElementById('driversEyesColor')
const driversRestrictionInput = document.getElementById('driversRestriction')
const driversConditionsInput = document.getElementById('driversConditions')
const driversLicenseWithName = document.getElementById('driversLicenseWithName')
const driversIdImage = document.getElementById('driversImgDisplayed')
const driversLicenseLines = document.getElementById('driversLicenseLines')
const driversLicenseLogo = document.getElementById('driversLicenseLogo')
const driversIdImageSignature = document.getElementById('driversSignatureDisplayed');

const driversImage = new Image()
driversImage.src = 'DrivingLicense.jpg';
driversImage.onload = function () {
    drawImageDriversID()
}

function drawImageDriversID() {

    let width = driversImage.width;
    let height = driversImage.height;

    driversCanvas.width = width;
    driversCanvas.height = height;

    driversCtx.imageSmoothingEnabled = true;

    driversCtx.drawImage(driversImage, 0, 0, driversCanvas.width, driversCanvas.height) //first 0 is right
    driversCtx.drawImage(driversIdImage, 270, 550, 780, 990);
    driversCtx.drawImage(driversIdImageSignature, 450, 1560, 600, 500);

    driversCtx.font = 'bold 550% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversFullNameInput.value, 1080, 700);
    
    driversCtx.font = '450% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversNationalityInput.value, 1080, 890);

    driversCtx.font = '450% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversSexInput.value, 1500, 890);

    driversCtx.font = '450% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversBirthdayInput.value, 1710, 890);

    driversCtx.font = '450% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversWeightInput.value, 2310, 890);

    driversCtx.font = '450% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversHeightInput.value, 2620, 890);

    driversCtx.font = '450% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversAddressInput1.value, 1080, 1080);

    driversCtx.font = '450% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversAddressInput2.value, 1080, 1180);

    driversCtx.font = '500% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversLicenseNoInput.value, 1080, 1350);

    driversCtx.font = 'bold 500% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversExpirationInput.value, 1770, 1350);

    driversCtx.font = 'bold 500% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversAgencyInput.value, 2350, 1350);

    driversCtx.font = '450% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversBloodTypeInput.value, 1200, 1520);

    driversCtx.font = '450% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversEyesColorInput.value, 1550, 1520);

    driversCtx.font = '450% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversConditionsInput.value, 1550, 1680);

    driversCtx.font = '450% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversRestrictionInput.value, 1200, 1680);

    driversCtx.font = 'bold 400% Arial' 
    driversCtx.fillStyle = 'white'
    driversCtx.fillText(driversRegistrationInput.value, 500, 1520);

    driversCtx.font = 'bold 150% Arial' 
    driversCtx.fillStyle = 'black'
    driversCtx.fillText(driversLicenseWithName.value, 330, 1570);


    driversCtx.drawImage(driversLicenseLines, 260, 535, 800, 1100); //Lines
    driversCtx.drawImage(driversLicenseLogo, 800, 1100, 600, 600);
}

driversFullNameInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversNationalityInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversSexInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversBirthdayInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversWeightInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversHeightInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversAddressInput1.addEventListener('input', function () {
    drawImageDriversID()
})

driversAddressInput2.addEventListener('input', function () {
    drawImageDriversID()
})

driversLicenseNoInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversRegistrationInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversExpirationInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversAgencyInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversBloodTypeInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversEyesColorInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversRestrictionInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversConditionsInput.addEventListener('input', function () {
    drawImageDriversID()
})

driversLicenseWithName.addEventListener('input', function () {
    drawImageDriversID()
})

function loadDriversImage(event) {
    const driversIdImage = document.getElementById("driversImgDisplayed");
    driversIdImage.src = URL.createObjectURL(event.target.files[0]);
}

function loadDriversSignatureImage(event) {
    const driversIdImageSignature = document.getElementById("driversSignatureDisplayed");
    driversIdImageSignature.src = URL.createObjectURL(event.target.files[0]);
}

const driversClearCanvas = document.querySelector(".clear-btnDrivers");
driversClearCanvas.addEventListener("click", () => {
    driversCtx.clearRect(0, 0, driversCanvas.width, driversCanvas.height);
});

const driversDownloadBtn = document.getElementById("downDrivers");
driversDownloadBtn.addEventListener("click", function () {

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(driversCanvas.msToBlob());
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = driversCanvas.toDataURL();
        a.download = "National ID - " + driversFullNameInput.value +
            " - Credits to Alexander Grayson ʕ•́ᴥ•̀ʔっ";
        a.click();
        document.body.removeChild(a);
    }
});

//POSTAL ID SECTION

const postalCanvas = document.getElementById('postal')
const postalCtx = postalCanvas.getContext('2d')
const postalIdInput = document.getElementById('postalId')
const postalNameInput = document.getElementById('postalName')
const postalAddressInput1 = document.getElementById('postalAddress1')
const postalAddressInput2 = document.getElementById('postalAddress2')
const postalAddressInput3 = document.getElementById('postalAddress3')
const postalBirthdayInput = document.getElementById('postalBirthday')
const postalNationalityInput = document.getElementById('postalNationality')
const postalValidUntilInput = document.getElementById('postalValidUntil')
const postalPostOfficeInput = document.getElementById('postalPostOffice')
const postalIdImage = document.getElementById('postalImgDisplayed')
const postalIdImageSignature = document.getElementById('postalSignatureDisplayed');

const postalImage = new Image()
postalImage.src = 'PostalID.jpg';
postalImage.onload = function () {
    drawImagePostalID()
}

function drawImagePostalID() {

    let width = postalImage.width;
    let height = postalImage.height;

    postalCanvas.width = width;
    postalCanvas.height = height;

    postalCtx.imageSmoothingEnabled = true;

    postalCtx.drawImage(postalImage, 0, 0, postalCanvas.width, postalCanvas.height)

    postalCtx.drawImage(postalIdImage, 63, 255, 364, 486.5);
    postalCtx.drawImage(postalIdImageSignature, 100, 750, 350, 350);

    postalCtx.font = '240% Arial' 
    postalCtx.fillStyle = 'black'
    postalCtx.fillText(postalIdInput.value, 55, 240);

    postalCtx.font = 'bold 370% Arial' 
    postalCtx.fillStyle = 'black'
    postalCtx.fillText(postalNameInput.value, 500, 340);

    postalCtx.font = 'bold 280% Arial' 
    postalCtx.fillStyle = 'black'
    postalCtx.fillText(postalAddressInput1.value, 500, 435);

    postalCtx.font = 'bold 280% Arial' 
    postalCtx.fillStyle = 'black'
    postalCtx.fillText(postalAddressInput2.value, 500, 480);

    postalCtx.font = 'bold 280% Arial' 
    postalCtx.fillStyle = 'black'
    postalCtx.fillText(postalAddressInput3.value, 500, 525);

    postalCtx.font = 'bold 280% Arial' 
    postalCtx.fillStyle = 'black'
    postalCtx.fillText(postalBirthdayInput.value, 500, 600);

    postalCtx.font = 'bold 280% Arial' 
    postalCtx.fillStyle = 'black'
    postalCtx.fillText(postalValidUntilInput.value, 500, 675);

    postalCtx.font = 'bold 280% Arial' 
    postalCtx.fillStyle = 'black'
    postalCtx.fillText(postalNationalityInput.value, 810, 600);

    postalCtx.font = 'bold 280% Arial' 
    postalCtx.fillStyle = 'black'
    postalCtx.fillText(postalPostOfficeInput.value, 810, 675);
}

postalIdInput.addEventListener('input', function () {
    drawImagePostalID()
})

postalNameInput.addEventListener('input', function () {
    drawImagePostalID()
})

postalAddressInput1.addEventListener('input', function () {
    drawImagePostalID()
})

postalAddressInput2.addEventListener('input', function () {
    drawImagePostalID()
})

postalAddressInput3.addEventListener('input', function () {
    drawImagePostalID()
})

postalBirthdayInput.addEventListener('input', function () {
    drawImagePostalID()
})

postalNationalityInput.addEventListener('input', function () {
    drawImagePostalID()
})

postalValidUntilInput.addEventListener('input', function () {
    drawImagePostalID()
})

postalPostOfficeInput.addEventListener('input', function () {
    drawImagePostalID()
})

function loadPostalImage(event) {
    const postalIdImage = document.getElementById("postalImgDisplayed");
    postalIdImage.src = URL.createObjectURL(event.target.files[0]);
}

function loadPostalSignatureImage(event) {
    const postalIdImageSignature = document.getElementById("postalSignatureDisplayed");
    postalIdImageSignature.src = URL.createObjectURL(event.target.files[0]);
}

const postalClearCanvas = document.querySelector(".clear-btnPostal");
postalClearCanvas.addEventListener("click", () => {
    postalCtx.clearRect(0, 0, postalCanvas.width, postalCanvas.height);
});

const postalDownloadBtn = document.getElementById("downPostal");
postalDownloadBtn.addEventListener("click", function () {

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(driversCanvas.msToBlob());
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = postalCanvas.toDataURL();
        a.download = "Postal ID - " + postalNameInput.value +
            " - Credits to Alexander Grayson ʕ•́ᴥ•̀ʔっ";
        a.click();
        document.body.removeChild(a);
    }
});

//PRC ID SECTION

const prcCanvas = document.getElementById('prc')
const prcCtx = prcCanvas.getContext('2d')
const prcLastNameInput = document.getElementById('prcLastName')
const prcFirstNameInput = document.getElementById('prcFirstName')
const prcMiddleNameInput = document.getElementById('prcMiddleName')
const prcBirthdayInput = document.getElementById('prcBirthday')
const prcRegistrationNoIInput = document.getElementById('prcRegistrationNo')
const prcRegistrationDateInput = document.getElementById('prcRegistrationDate')
const prcJobInput = document.getElementById('prcJob')
const prcValidUntilInput = document.getElementById('prcValidUntil')
const prcIdImage = document.getElementById('prcImgDisplayed')
const prcIdImage2 = document.getElementById('prcImgDisplayed2')
const prcIdImageSignature = document.getElementById('prcSignatureDisplayed');

const prcImage = new Image()
prcImage.src = 'PrcID.jpg';
prcImage.onload = function () {
    drawImagePrcID()
}

function drawImagePrcID() {

    let width = prcImage.width;
    let height = prcImage.height;

    prcCanvas.width = width;
    prcCanvas.height = height;

    prcCtx.imageSmoothingEnabled = true;

    prcCtx.drawImage(prcImage, 0, 0, prcCanvas.width, prcCanvas.height)

    prcCtx.drawImage(prcIdImage, 1037, 315, 370, 368);
    prcCtx.drawImage(prcIdImage2, 965, 750, 120, 170);
    prcCtx.drawImage(prcIdImageSignature, 1110, 675, 300, 300);

    prcCtx.font = 'bold 320% Arial' 
    prcCtx.fillStyle = 'black'
    prcCtx.fillText(prcLastNameInput.value, 400, 395);

    prcCtx.font = 'bold 320% Arial' 
    prcCtx.fillStyle = 'black'
    prcCtx.fillText(prcFirstNameInput.value, 400, 450);

    prcCtx.font = 'bold 320% Arial' 
    prcCtx.fillStyle = 'black'
    prcCtx.fillText(prcMiddleNameInput.value, 400, 505);

    prcCtx.font = 'bold 320% Arial' 
    prcCtx.fillStyle = 'black'
    prcCtx.fillText(prcBirthdayInput.value, 400, 560);

    prcCtx.font = 'bold 320% Arial' 
    prcCtx.fillStyle = 'black'
    prcCtx.fillText(prcRegistrationNoIInput.value, 400, 615);

    prcCtx.font = 'bold 320% Arial' 
    prcCtx.fillStyle = 'black'
    prcCtx.fillText(prcRegistrationDateInput.value, 400, 670);

    prcCtx.font = 'bold 380% Arial' 
    prcCtx.fillStyle = 'white'
    prcCtx.fillText(prcJobInput.value, 300, 735);

    prcCtx.font = 'bold 340% Arial' 
    prcCtx.fillStyle = 'black'
    prcCtx.fillText(prcValidUntilInput.value, 1135, 915);
}

prcLastNameInput.addEventListener('input', function () {
    drawImagePrcID()
})

prcFirstNameInput.addEventListener('input', function () {
    drawImagePrcID()
})

prcMiddleNameInput.addEventListener('input', function () {
    drawImagePrcID()
})

prcBirthdayInput.addEventListener('input', function () {
    drawImagePrcID()
})

prcRegistrationNoIInput.addEventListener('input', function () {
    drawImagePrcID()
})

prcRegistrationDateInput.addEventListener('input', function () {
    drawImagePrcID()
})

prcJobInput.addEventListener('input', function () {
    drawImagePrcID()
})

prcValidUntilInput.addEventListener('input', function () {
    drawImagePrcID()
})

function loadPrcImage(event) {
    const prcIdImage = document.getElementById("prcImgDisplayed");
    prcIdImage.src = URL.createObjectURL(event.target.files[0]);
    const prcIdImage2 = document.getElementById('prcImgDisplayed2')
    prcIdImage2.src = URL.createObjectURL(event.target.files[0]);
}

function loadPrcSignatureImage(event) {
    const prcIdImageSignature = document.getElementById("prcSignatureDisplayed");
    prcIdImageSignature.src = URL.createObjectURL(event.target.files[0]);
}

const prcClearCanvas = document.querySelector(".clear-btnPrc");
postalClearCanvas.addEventListener("click", () => {
    prcCtx.clearRect(0, 0, prcCanvas.width, prcCanvas.height);
});

const prcDownloadBtn = document.getElementById("downPrc");
prcDownloadBtn.addEventListener("click", function () {

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(prcCanvas.msToBlob());
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = prcCanvas.toDataURL();
        a.download = "PRC ID - " + prcLastNameInput.value +
            " - Credits to Alexander Grayson ʕ•́ᴥ•̀ʔっ";
        a.click();
        document.body.removeChild(a);
    }
});

//PHILHEALTH ID SECTION

const phCanvas = document.getElementById('ph')
const phCtx = phCanvas.getContext('2d')
const phIdNumberInput = document.getElementById('phIdNum')
const phBCIdNumberInput = document.getElementById('phBCIdNum')
const phFullNameInput = document.getElementById('phName')
const phBirthdayAndSexInput = document.getElementById('phBirthdayAndSex')
const phAddressInput = document.getElementById('phAddress')
const phAddressInput2 = document.getElementById('phAddress2')
const phIdImage = document.getElementById('phImgDisplayed')
const phIdImageSignature = document.getElementById('phSignatureDisplayed');

const phImage = new Image()
phImage.src = 'PhilhealthID.jpg';
phImage.onload = function () {
    drawImagePhID()
}

function drawImagePhID() {

    let width = phImage.width;
    let height = phImage.height;

    phCanvas.width = width;
    phCanvas.height = height;

    phCtx.imageSmoothingEnabled = true;

    phCtx.drawImage(phImage, 0, 0, phCanvas.width, phCanvas.height)

    phCtx.drawImage(phIdImage, 278, 628, 897, 866);
    phCtx.drawImage(phIdImageSignature, 470, 1550, 600, 600);

    phCtx.font = 'bold 700% Arial' 
    phCtx.fillStyle = 'black'
    phCtx.fillText(phIdNumberInput.value, 1255, 665);

    phCtx.font = 'bold 500% Times New Roman' 
    phCtx.fillStyle = 'black'
    phCtx.fillText(phBCIdNumberInput.value, 1450, 1838);

    phCtx.font = 'bold 530% Arial' 
    phCtx.fillStyle = 'black'
    phCtx.fillText(phFullNameInput.value, 1255, 780);

    phCtx.font = '380% Arial' 
    phCtx.fillStyle = 'black'
    phCtx.fillText(phBirthdayAndSexInput.value, 1255, 872);

    phCtx.font = '380% Arial' 
    phCtx.fillStyle = 'black'
    phCtx.fillText(phAddressInput.value, 1255, 938);

    phCtx.font = '380% Arial' 
    phCtx.fillStyle = 'black'
    phCtx.fillText(phAddressInput2.value, 1255, 1004);    

}

phIdNumberInput.addEventListener('input', function () {
    drawImagePhID()
})

phBCIdNumberInput.addEventListener('input', function () {
    drawImagePhID()
})

phFullNameInput.addEventListener('input', function () {
    drawImagePhID()
})

phBirthdayAndSexInput.addEventListener('input', function () {
    drawImagePhID()
})

phAddressInput.addEventListener('input', function () {
    drawImagePhID()
})

phAddressInput2.addEventListener('input', function () {
    drawImagePhID()
})

function loadPhImage(event) {
    const phIdImage = document.getElementById("phImgDisplayed");
    phIdImage.src = URL.createObjectURL(event.target.files[0]);
}

function loadPhSignatureImage(event) {
    const phIdImageSignature = document.getElementById("phSignatureDisplayed");
    phIdImageSignature.src = URL.createObjectURL(event.target.files[0]);
}

const phClearCanvas = document.querySelector(".clear-btnPh");
phClearCanvas.addEventListener("click", () => {
    phCtx.clearRect(0, 0, phCanvas.width, phCanvas.height);
});

const phDownloadBtn = document.getElementById("downPh");
phDownloadBtn.addEventListener("click", function () {

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(phCanvas.msToBlob());
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = phCanvas.toDataURL();
        a.download = "PHILHEALTH ID - " + phFullNameInput.value +
            " - Credits to Alexander Grayson ʕ•́ᴥ•̀ʔっ";
        a.click();
        document.body.removeChild(a);
    }
});
