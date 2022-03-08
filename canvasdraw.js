$(document).ready(function () {

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var rect = {};
    var drag = false;
    var imageObj = null;
    var rotateflag = true;
    var degree = 0;
    var popuptext = "x1 = a, y1= b , x2= c, y2= d";

    function init() {
        imageObj = new Image();
        imageObj.onload = function () { ctx.drawImage(imageObj, imageObj.width / 2, imageObj.width / 2); };
        imageObj.src = 'forest.jpg';
        canvas.addEventListener('mousedown', mouseDown, false);
        canvas.addEventListener('mouseup', mouseUp, false);
        canvas.addEventListener('mousemove', mouseMove, false);
    }

    function mouseDown(e) {
        rect.startX = e.pageX - this.offsetLeft;
        rect.startY = e.pageY - this.offsetTop;
        drag = true;
        console.log(e);
    }

    function mouseUp() { drag = false; }

    function mouseMove(e) {
        if (drag) {
            if (rotateflag) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(imageObj, imageObj.width / 2, imageObj.width / 2);
            }
            else {
                drawRotated(degree);
            }
            rect.w = (e.pageX - this.offsetLeft) - rect.startX;
            rect.h = (e.pageY - this.offsetTop) - rect.startY;
            ctx.strokeStyle = 'red';
            ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
            //alert(rect.startX, rect.startY, rect.w, rect.h);

            popuptext=popuptext.replace("a",rect.startX);
            popuptext=popuptext.replace("b",rect.startY);
            popuptext=popuptext.replace("c",rect.w);
            popuptext=popuptext.replace("d",rect.h);
            //console.log(popuptext);
            document.getElementById("co-ord").innerText = popuptext;
            //document.getElementById("box").innerText = popuptext;

        }
    }

    init();
 function refreshCoordinates(){
   debugger
   alert("hello");
   document.getElementById("box").innerText = popuptext;
 }
});
