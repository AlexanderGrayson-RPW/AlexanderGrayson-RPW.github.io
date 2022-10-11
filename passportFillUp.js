const passportImage = new Image()
passportImage.src = 'Passport.jpg'
passportImage.onload = function() {
    drawImage()
}

function drawImage() {
    ctx.drawImage(image, 0, 0, passportCanvas.width, passportCanvas.height)
    
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

            window.navigator.msSaveBlob(passportCanvas.msToBlob());
        } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = passportCanvas.toDataURL();
    a.download = "ID Generator - " + nameInput.value + 
    " - Credits to Alexander Grayson ʕ•́ᴥ•̀ʔっ";
    a.click();
    document.body.removeChild(a);
  }
});
