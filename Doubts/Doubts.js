// MouseEvent pageX Property
// EXAMPLE 1
function showCoords(event) {
    var x = event.pageX;
    var y = event.pageY;
    var coords = "X coords: " + x + " Y coords: " + y;
    document.getElementById('demo').innerHTML = coords;
}


// HTML DOM Element offsetTop
// EXAMPLE 1
function offsetTop1() {
    var testDiv = document.getElementById("test");
    document.getElementById("demoOT").innerHTML = testDiv.offsetTop;
}


// HTML DOM Element offsetHeight
// EXAMPLE 1
const element = document.getElementById("myDIV");
let text = "Height including padding and border: " + element.offsetHeight + "px<br>";
text += "Width including padding and border: " + element.offsetWidth + "px";
document.getElementById("demoOH").innerHTML = text;