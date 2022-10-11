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

const image = new Image()
image.src = 'TinID3.jpg'
image.onload = function() {
    drawImage()
}

function drawImage() {
    ctx.drawImage(image, 0, 0, tinCanvas.width, tinCanvas.height)
    
    ctx.font = 'bold 150% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(nameInput.value, 87, 145);

    ctx.font = 'bold 210% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(tinIdInput.value, 155, 182);

    ctx.font = 'bold 100% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(addressInput.value, 95, 205);
    
    ctx.font = 'bold 100% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(address2Input.value, 95, 224);

    ctx.font = 'bold 100% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(address3Input.value, 95, 243);

    ctx.font = 'bold 130% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(birthdayInput.value, 230, 266);

    ctx.font = 'bold 130% Palatino Linotype'
    ctx.fillStyle = 'black'
    ctx.fillText(issueInput.value, 230, 288);

    ctx.font = 'bold 120% Amalfi Coast'
    ctx.fillStyle = 'black'
    ctx.fillText(signatureInput.value, 132, 315);

    ctx.drawImage(idImage, 392, 151, 153, 135); 
}

signatureInput.addEventListener('input', function() {
    drawImage() })

issueInput.addEventListener('input', function() {
    drawImage() })

birthdayInput.addEventListener('input', function() {
    drawImage() })

address3Input.addEventListener('input', function() {
    drawImage() })

address2Input.addEventListener('input', function() {
    drawImage() })

addressInput.addEventListener('input', function() {
    drawImage() })

tinIdInput.addEventListener('input', function() {
    drawImage() })

nameInput.addEventListener('input', function() {
    drawImage() })

    function loadImage(event) {
        const idImage = document.getElementById("imgDisplayed");
        idImage.src = URL.createObjectURL(event.target.files[0]);
      }

        const download = document.getElementById("down");
        download.addEventListener("click", function(){

        if(window.navigator.msSaveBlob) {

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

function showMap() 
{
    country = document.getElementById("country").value; 
    if(country == "TIN") {
        document.getElementById("tinID").style.display='block'
    } else  {
        document.getElementById("tinID").style.display='none'
    }

    country = document.getElementById("country").value; 
    if (country == "VOTER")
    {
        document.getElementById("votersID").style.display='block'
    }
    else 
    {
        document.getElementById("votersID").style.display='none'
    }

    country = document.getElementById("country").value; 
    if (country == "PASSPORT")
    {
        document.getElementById("passportID").style.display='block'
    }
    else 
    {
        document.getElementById("passportID").style.display='none'
    }

    country = document.getElementById("country").value; 
    if (country == "DRIVER")
    {
        document.getElementById("driversID").style.display='block'
    }
    else 
    {
        document.getElementById("driversID").style.display='none'
    }

    country = document.getElementById("country").value; 
    if (country == "POSTAL")
    {
        document.getElementById("postalID").style.display='block'
    }
    else 
    {
        document.getElementById("postalID").style.display='none'
    }

    country = document.getElementById("country").value; 
    if (country == "PRC")
    {
        document.getElementById("prcID").style.display='block'
    }
    else 
    {
        document.getElementById("prcID").style.display='none'
    }

    country = document.getElementById("country").value; 
    if (country == "PHILHEALTH")
    {
        document.getElementById("philhealthID").style.display='block'
    }
    else 
    {
        document.getElementById("philhealthID").style.display='none'
    }

    country = document.getElementById("country").value; 
    if (country == "SSS")
    {
        document.getElementById("sssID").style.display='block'
    }
    else 
    {
        document.getElementById("sssID").style.display='none'
    }

    country = document.getElementById("country").value; 
    if (country == "OFW")
    {
        document.getElementById("ofwID").style.display='block'
    }
    else 
    {
        document.getElementById("ofwID").style.display='none'
    }
}
