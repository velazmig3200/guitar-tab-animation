//____________________________________global variables
let c = document.getElementById('canvas');
let cx = c.getContext('2d');

let dx1 = 4;
//"dy1" moved to "tab1";

x1 = 20;
y1 = canvas.height - 350;
w1 = canvas.width - 70;
h1 = 300;

let fps = 240;


//_____________________________________fretboard
function fretboard() {
    cx.beginPath();
    cx.strokeStyle = 'black';
    cx.fillStyle = 'rgba(0,0,0,1)';
    cx.lineWidth = 4;
    cx.rect(x1, y1, w1, h1);
    cx.stroke();
    cx.fill();
    cx.closePath();
}



//______________________________________numbersRay();
let j = 0;
let numbers = [];
function numbersRay() {
    for(let i=0; i<stringy.length; i++) {
        numbers[i] = tab[i+j];
    }
    j = j+6;
} numbersRay();


//________________________________________main draw loop
function frame() {
    cx.clearRect(0, 0, canvas.width, canvas.height);
    //________________________________main neck build
    fretboard();
    dots(190,145); dots(365,145); dots(543,145); dots(720,145); 
    dots(985,220); dots(985,65); dots(1248,145); dots(1425,145);
    dots(1600,145); dots(1778,145);
    frets();
    //________________________________strings
    strings(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],numbers[5],numbers[6]);
    //________notes
    for(let i=0; i<notes.length; i++) {notes[i].show(); notes[i].move();}
    for(let i=0; i<notes.length; i++) {
        switch (notes[i].colour) {
            case coloursC[5]: if (notes[i].y > stringy[0]) {notes.splice(0,1); numbersRay();}; break;
            case coloursC[4]: if (notes[i].y > stringy[1]) {notes.splice(0,1);}; break;
            case coloursC[3]: if (notes[i].y > stringy[2]) {notes.splice(0,1);}; break;
            case coloursC[2]: if (notes[i].y > stringy[3]) {notes.splice(0,1);}; break;
            case coloursC[1]: if (notes[i].y > stringy[4]) {notes.splice(0,1);}; break;
            case coloursC[0]: if (notes[i].y > stringy[5]) {notes.splice(0,1);}
        }
    }    

    animeID = requestAnimationFrame(frame);
} let animeID = requestAnimationFrame(frame);




// let state = true;
// function startStop() {
//     state = !state;
//     if (state == true) {animeID = requestAnimationFrame(frame);}
//     else {cancelAnimationFrame(animeID);}
//     console.log(state);
// } 