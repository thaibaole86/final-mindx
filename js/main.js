//Bai 1
let chuoi = [];

function addtoarray() {
    let newstring = document.getElementById('stringinput').value;
    chuoi.push(newstring)
    document.getElementById('chuoioutput').innerHTML = chuoi;
}

function longeststring() {
    let max = chuoi[0];
    let maxarray = [];
    for ( i = 0; i < chuoi.length; i++) { 
        if (chuoi[i].length > max.length) {
            max = chuoi[i];
        }
    }

    for (j = 0; j < chuoi.length; j++) {
        if (chuoi[j].length == max.length) {
            maxarray.push(chuoi[j]);
        }
    }
    console.log(maxarray)
    document.getElementById('ketquabai1').innerHTML = 'Chuỗi dài nhất là:' + maxarray;


}
// Bai  2
let chuoi2 = [];
function addtoarray2() {
    let newstring = document.getElementById('stringinput2').value;
    chuoi2.push(newstring)
    document.getElementById('chuoioutput2').innerHTML = chuoi2;
}

function bai2() {
    let sumteam1 = 0;
    for (i = 0; i < chuoi2.length; i = i + 2) {
        sumteam1 = parseInt(sumteam1) + parseInt(chuoi2[i]);
    }
    document.getElementById('ketquabai2').innerHTML = 'Cân nặng team 1 là:' + sumteam1;

    let sumteam2 = 0;
    for (j = 1; j < chuoi2.length; j = j + 2) {
        sumteam2 = parseInt(sumteam2) + parseInt(chuoi2[j]);
    }
    document.getElementById('ketquabai2b').innerHTML = 'Cân nặng team 2 là:' + sumteam2;

}