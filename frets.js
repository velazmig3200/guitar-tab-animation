function frets() { 
    for (let i=0; i<22; i++) {
        cx.beginPath();
        cx.moveTo(88*(i+1), y1+h1-11);
        cx.lineTo(88*(i+1), y1+11);
        cx.strokeStyle = 'rgba(195,195,195,1)';
        cx.stroke();
        cx.closePath();
    }
}


let x1 = 20;
let y1 = canvas.height - 350;
let w1 = canvas.width - 70;
let h1 = 300;

//______________________________________dots
let x3 = x1; 
let y3 = y1;
let w3 = 17;
let h3 = 20;
function dots(x, y) {
    cx.beginPath();
    cx.strokeStyle = 'black';
    cx.fillStyle = 'rgba(255,255,255,1)';
    cx.lineWidth = 12;
    cx.rect(x3+x, y3+y, w3, h3);
    cx.stroke();
    cx.fill();
    cx.closePath();
}