// MouseEvent pageX Property
// EXAMPLE 1
function showCoords(event) {
    var x = event.pageX;
    var y = event.pageY;
    var coords = "X coords: " + x + " Y coords: " + y;
    document.getElementById('demo').innerHTML = coords;
}