var RADIUS = 8;
var MARGIN_TOP = 30;

window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 1024;
    canvas.height = 250;
    setInterval(
        function() {
            render(context);
        },
        50
    );
}

var render = function(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    var currDate = new Date();
    var hour = currDate.getHours();
    var min = currDate.getMinutes();
    var sec = currDate.getSeconds();
    currDate = null;
    renderDigit(30, MARGIN_TOP, parseInt(hour / 10), ctx);
    renderDigit(30 + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hour % 10), ctx);
    renderDigit(30 + 30 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
    renderDigit(30 + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(min / 10), ctx);
    renderDigit(30 + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(min % 10), ctx);
    renderDigit(30 + 69 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
    renderDigit(30 + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(sec / 10), ctx);
    renderDigit(30 + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(sec % 10), ctx);
}

var renderDigit = function(x, y, num, ctx) {
    ctx.fillStyle = "rgb(143, 20, 194)";
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] === 1) {
                drawBall(x + (j * 2 + 1) * (RADIUS + 1), y + (i * 2 + 1) * (RADIUS + 1), ctx);
            }
        }
    }
}

var drawBall = function(x, y, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, RADIUS, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}
