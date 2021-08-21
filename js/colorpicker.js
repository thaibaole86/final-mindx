let r,b,g;

function randomcolor() {
    let min = 0;
    let max = 255;
    r = Math.floor(Math.random() * (max - min) + min);
    g = Math.floor(Math.random() * (max - min) + min);
    b = Math.floor(Math.random() * (max - min) + min);
    console.log(r,g,b)
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    return r,g,b;
}

function convertRgbToHex(n) {
    let hex = Number(n).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
}

function showHex(){
    let webhex = convertRgbToHex(r) + convertRgbToHex(g) + convertRgbToHex(b);
    console.log(webhex)
    document.getElementById('hexvalue').value = "#" + webhex;
}

function copy() {
  var copyText = document.getElementById("hexvalue");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}

function changegradient() {
    let color1 = document.getElementById('color1').value;
    let color2 = document.getElementById('color2').value;
    document.getElementById('container').style.backgroundImage = 'linear-gradient( ' + color1 + ',' + color2 + ')';
}