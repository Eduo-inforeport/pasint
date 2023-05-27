canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var colour="black";
var line=2;
var radius=20;
mouseEvent="";
var last_positionofX, last_positionofY;




canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){



    colour=document.getElementById("colour").value;
    line=document.getElementById("line-width").value;
    radius=document.getElementById("radius").value;

   mouseEvent="mousedown";    
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";

}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";

}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_position_mousex=e.clientX-canvas.offsetLeft;
    current_position_mousey=e.clientY-canvas.offsetTop;
    console.log(" current_position_mousex="+ current_position_mousex+",  current_position_mousey="+ current_position_mousey);

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=line;

        ctx.arc(current_position_mousex, current_position_mousey, radius, 0, 2 * Math.PI);

        
        ctx.stroke();
    }
    

}


function ClearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
