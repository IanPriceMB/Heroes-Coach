//we ahve to have globals to avoid function passing problems
var canvas, ctx, flag = false,
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,
dot_flag = false;
var mode="pen";

//theses are set globally so that we can mess with them in the main page
var x = 'black',
y = 2;

// setting up the cavas and context as well as our even listeners
function init() {
canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");
mode="pen";

canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function findxy(res, e) {
    //when clicked set flags and variables
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.getBoundingClientRect().left;
        currY = e.clientY - canvas.getBoundingClientRect().top;
        flag = true;
        $('#canvas').css({'z-index': '4'})
        //this section just starts the line where you first click
        if(mode=="pen"){
            $('#easel').removeClass('.crosshair')
            ctx.globalCompositeOperation="source-over";
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
        } 
        if(mode=='eraser'){
            $('#easel').addClass('.crosshair')
            ctx.globalCompositeOperation="destination-out";
            ctx.arc(currX, currY,10,0,Math.PI*2,false);
            ctx.fill();
        }
    }
    //if mouse up or outside of canvas stop drawing
    if (res == 'up' || res == "out") {
        $('#easel').removeClass('.crosshair')
        $('#canvas').css({'z-index': '2'})
        flag = false;
    }
    //while mouse down and moving loop your mouse positions and draw
    if (res == 'move') {
        if (flag && mode=='pen') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.getBoundingClientRect().left;
            currY = e.clientY - canvas.getBoundingClientRect().top;
            draw();
        } else if (flag && mode=='eraser'){
            eraser(e);
        }
    }
}

//clearing all lines
$('#lines').on('click', function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})
//selecting my color
$('.colorLi').on('click', function(){
    document.getElementById("colordd").classList.toggle("show");
    x = $(this).attr('data-color');
    init();
    mode = "pen";
})
//making an eraser
$('#eraser').on('click', function(){
    mode="eraser";
})
//draw the lines on the canvas
function draw() {
    $('#canvas').css({'z-index': '4'})
    ctx.globalCompositeOperation="source-over";
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

//draw with the eraser
function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left,
        y = event.clientY - canvas.getBoundingClientRect().top;

    return {x: x, y: y};
    
}
function eraser(event){
    $('#canvas').css({'z-index': '4'})
    var position = getCanvasCoordinates(event);

    ctx.globalCompositeOperation="destination-out";
    ctx.beginPath();
    ctx.arc(position.x,position.y,10,0,Math.PI*2,false);
    ctx.fill();
    ctx.closePath();
}

init();