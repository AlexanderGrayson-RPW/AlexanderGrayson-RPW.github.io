function Login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(username == "alexgray" && password == "Alexander1107") {
        alert("Login Successfully!");
        return false;
    } else {
        alert("TANGINA KA AH TRY TRY KA PA");
        return false;
    }
}

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