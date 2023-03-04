function showID() {
    validID = document.getElementById("validID").value;

    if (validID == "TIN") {
        document.getElementById("tinID").style.display = 'block'
    } else {
        document.getElementById("tinID").style.display = 'none'
    }
;
    if (validID == "NATIONAL") {
        document.getElementById("natID").style.display = 'block'
    }
    else {
        document.getElementById("natID").style.display = 'none'
    }

    if (validID == "VOTER") {
        document.getElementById("votersID").style.display = 'block'
    }
    else {
        document.getElementById("votersID").style.display = 'none'
    }

    if (validID == "DRIVER") {
        document.getElementById("driversID").style.display = 'block'
    }
    else {
        document.getElementById("driversID").style.display = 'none'
    }

    if (validID == "POSTAL") {
        document.getElementById("postalID").style.display = 'block'
    }
    else {
        document.getElementById("postalID").style.display = 'none'
    }

    if (validID == "PRC") {
        document.getElementById("prcID").style.display = 'block'
    }
    else {
        document.getElementById("prcID").style.display = 'none'
    }

    if (validID == "PHID") {
        document.getElementById("phID").style.display = 'block'
    }
    else {
        document.getElementById("phID").style.display = 'none'
    }
}
