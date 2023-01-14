canvas=document.getElementById("myc");
pen=canvas.getContext("2d")
pen_color="blue";

pen.beginPath();
pen.strokeStyle=pen_color;

pen.lineWidth=2;
pen.arc(400,300,40,0,2*Math.PI);
pen.stroke();

canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    mousex=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY- canvas.offsetTop;
    pen.beginPath();
    pen.arc(mousex,mouseY,40,0,2*Math.PI);
    pen.stroke();
}
