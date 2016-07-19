window.onload = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = 1024;
    canvas.height = 768;
    var context = canvas.getContext("2d");
    context.lineWidth = 5;
    context.fillStyle = "rgb(142, 81, 212)";
    for (var i = 0; i < 8; i++) {
        context.beginPath();
        context.arc((i+1)*100, 200, 40, 2*(i+1)/10*Math.PI, 0, true);
        context.stroke();
        context.fill();
    }
}
