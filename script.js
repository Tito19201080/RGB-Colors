// RGB Colors with JS

// Variables to store HTML elements
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgb-code");
let displayEl = document.getElementById("display");
let widthInEl = document.getElementById("pre-width");
let heightInEl = document.getElementById("pre-height");

// Event Listener
redInEl.addEventListener("input", rgbPreview)
greenInEl.addEventListener("input", rgbPreview)
blueInEl.addEventListener("input", rgbPreview)
widthInEl.addEventListener("change", changeSize)
heightInEl.addEventListener("change", changeSize)

// Event Function
function rgbPreview() {
    // Input: get red green blue values
    let rValue = +redInEl.value;
    let gValue = +greenInEl.value;
    let bValue = +blueInEl.value;

    // Validate colors ()Constrain colors between 0 - 255
    // Check rValue
    if (rValue < 0) {
        rValue = 0;
        redInEl.value = 0;
    } else if (rValue > 255) {
        rValue = 255;
        redInEl.value = 255;
    }

    // Check gValue
    if (gValue < 0) {
        gValue = 0;
        greenInEl = 0;
        greenInEl.value = 0;
    } else if (gValue > 255) {
        gValue = 255;
        greenInEl.value = 255;
    }

    // Check bValue
    if (bValue < 0) {
        bValue = 0;
        blueInEl = 0;
        blueInEl.value = 0;
    } else if (bValue > 255) {
        bValue = 255;
        blueInEl.value = 255;
    }
    // Process: build rgb string rgb(_, _, _)
    let rgbString = "rgb(" + rValue + ", " + gValue + ", " +bValue + ")"

    // Output: display rgb string and update color preview
    rgbStringOutEl.innerHTML = rgbString
    displayEl.style.background = rgbString;
}

function changeSize() {
    let wValue = +widthInEl.value;
    let hValue = +heightInEl.value;

    if (wValue < 50) {
        wValue = 50;
        widthInEl.value = 50
    } else if (wValue > 400) {
        wValue = 400;
        widthInEl.value = 400;
    }

    if (hValue < 50) {
        hValue = 50;
        heightInEl.value = 50
    } else if (hValue > 200) {
        hValue = 200;
        heightInEl.value = 200;
    }

    displayEl.style.height = hValue + "px"
    displayEl.style.width = wValue + "px";
}