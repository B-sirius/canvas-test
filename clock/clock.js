var RADIUS = 8;
var WINDOW_WIDTH = document.body.clientWidth;
var WINDOW_HEIGHT = document.body.clientHeight;
var MARGIN_TOP = document.body.clientHeight / 2 - 125;
var MARGIN_LEFT = document.body.clientWidth / 2 - 500;

var originDate = new Date();
var originHour = originDate.getHours();
var originMin = originDate.getMinutes();
var originSec = originDate.getSeconds();
originDate = null;

var balls = [];
var colors = ["rgb(208, 17, 17)", "rgb(204, 204, 30)", "rgb(197, 97, 233)", "rgb(245, 13, 89)", "rgb(102, 213, 224)", "rgb(22, 187, 72)", "rgb(200, 28, 80)", "rgb(69, 55, 228)", "rgb(148, 207, 52)", "rgb(180, 21, 150)"];

window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    setInterval(
        function() {
            checkTime(context);
        },
        20
    );
}

var checkTime = function(ctx) {
    var currDate = new Date();
    var currHour = currDate.getHours();
    var currMin = currDate.getMinutes();
    var currSec = currDate.getSeconds();
    currDate = null;
    if (parseInt(currHour / 10) !== parseInt(originHour / 10)) {
        addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(currHour / 10), ctx);
    };
    if (parseInt(currHour % 10) !== parseInt(originHour % 10)) {
        addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(currHour % 10));
    };
    if (parseInt(currMin / 10) !== parseInt(originMin / 10)) {
        addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(currMin / 10));
    };
    if (parseInt(currMin % 10) !== parseInt(originMin % 10)) {
        addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(currMin % 10));
    };
    if (parseInt(currSec / 10) !== parseInt(originSec / 10)) {
        addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(currSec / 10));
    };
    if (parseInt(currSec % 10) !== parseInt(originSec % 10)) {
        addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(currSec % 10));
        originSec = currSec;
        originMin = currMin;
        originHour = currHour;
    };
    upDateBalls();
    render(ctx, currSec, currMin, currHour);
}

var addBalls = function(x, y, num) {
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] === 1) {
                var aBall = {
                    x: x + (j * 2 + 1) * (RADIUS + 1),
                    y: y + (i * 2 + 1) * (RADIUS + 1),
                    g: 1.5 + Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                    vy: -5 + Math.random(),
                    color: colors[Math.floor(Math.random() * colors.length)]
                };
                balls.push(aBall);
            }
        }
    }
}

var upDateBalls = function() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;
        if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
            balls[i].y = WINDOW_HEIGHT - RADIUS;
            balls[i].vy = - balls[i].vy * 0.85;
        }
        if (balls[i].x >= WINDOW_WIDTH + 10 || balls[i].x < 0 - 10) {
            balls.splice(i, 1);
        }
    }
}

var render = function(ctx, sec, min, hour) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hour / 10), ctx);
    renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hour % 10), ctx);
    renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
    renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(min / 10), ctx);
    renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(min % 10), ctx);
    renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
    renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(sec / 10), ctx);
    renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(sec % 10), ctx);
    for (var i = 0; i < balls.length; i++) {
        ctx.fillStyle = balls[i].color;
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, RADIUS, 0, 2*Math.PI, true);
        ctx.closePath();
        ctx.fill();
    }
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
