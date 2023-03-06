document.oncontextmenu = () => {
    alert("Don't try right click!")
    return false
}

document.onkeydown = e => {
    if(e.key == "F12") {
        alert("Don't try to Inspect Element!")
        return false
    }

    if(e.ctrlKey && e.key == "u") {
        alert("Don't try to View Page Source!")
        return false
    }
}
