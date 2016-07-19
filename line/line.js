"use strict";
var tangram = [
	{p:[{x:0,y:0},{x:800,y:0},{x:400,y:400}],color:"rgb(91, 24, 176)"},
	{p:[{x:0,y:0},{x:400,y:400},{x:0,y:800}],color:"rgb(217, 30, 30)"},
	{p:[{x:800,y:0},{x:800,y:400},{x:600,y:600},{x:600,y:200}],color:"rgb(241, 108, 12)"},
	{p:[{x:600,y:200},{x:600,y:600},{x:400,y:400}],color:"rgb(231, 46, 235)"},
	{p:[{x:400,y:400},{x:600,y:600},{x:400,y:800},{x:200,y:600}],color:"rgb(24, 199, 133)"},
	{p:[{x:200,y:600},{x:400,y:800},{x:0,y:800}],color:"rgb(23, 33, 119)"},
	{p:[{x:800,y:400},{x:800,y:800},{x:400,y:800}],color:"rgb(52, 139, 162)"},
];

var draw = function(piece ,ctx) {
    ctx.beginPath();
    ctx.moveTo(piece.p[0].x, piece.p[0].y);
    for (var i = 1; i < piece.p.length; i++) {
        ctx.lineTo(piece.p[i].x, piece.p[i].y);
    }
    ctx.closePath();
    ctx.fillStyle = piece.color;
    ctx.fill();
};

window.onload = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");
    for (var i = 0; i < tangram.length; i++) {
        draw(tangram[i], context);
    }

}
