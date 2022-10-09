//string y coordinates
let stringy = [canvas.height-86, canvas.height-140, canvas.height-187, canvas.height-240, canvas.height-292, canvas.height-350];

//_____________string colours
let coloursA = ['rgba(255,255,255,0.2)', 'rgba(255,50,255,0.2)', 'rgba(255,255,50,0.2)', 
'rgba(30,255,30,0.2)', 'rgba(50,90,255,0.2)', 'rgba(255,30,30,0.2)']
;
let coloursB = ['rgba(255,255,255,1)', 'rgba(255,50,255,1)', 'rgba(255,255,50,1)', 
'rgba(30,255,30,1)', 'rgba(50,90,255,1)', 'rgba(255,30,30,1)'];

//_____________strings 2.0
function strings(E,A,D,G,B,E2) {
    let y;
    for(let i=0; i<stringy.length; i++) {
        if (i == 5 && E > -1) {y = coloursB;}
        else if (i == 4 && A > -1) {y = coloursB;}
        else if (i == 3 && D > -1) {y = coloursB;}
        else if (i == 2 && G > -1) {y = coloursB;}
        else if (i == 1 && B > -1) {y = coloursB;}
        else if (i == 0 && E2 > -1) {y = coloursB;}
        else {y = coloursA;}
        //275, 224, 173, 122, 71, 20// string interval numbers// interval of 51
        cx.beginPath();
        cx.moveTo(x1, y1+h1 - (275-51*i));
        cx.lineTo(w1+30, y1+h1 - (275-51*i));
        cx.strokeStyle = y[i];//colour
        cx.lineWidth = 4;
        cx.stroke();
        cx.closePath()
    }
}