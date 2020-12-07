//color changer using rgb
let btn = document.getElementById("color-btn");
var rgbNum = document.getElementById("rgb-num");



//events
btn.addEventListener("click", colorFunc);

//functions
function colorFunc(e) {
    e.preventDefault();
    let num1 = Math.floor(Math.random() * 160);
    let num2 = Math.floor(Math.random() * 160);
    let num3 = Math.floor(Math.random() * 160);
    var z = document.body.style.backgroundColor = "rgb( " + num1 + "," + num2 + "," + num3 + ")";
    var t = document.getElementById("rgb-num");
    t.innerText = "RGB(" + num1 + " , " + num2 + ", " + num3 + ")";
    console.log(z);
}
