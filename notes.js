//______________coloursC 
let coloursC = ['#fff', '#b0d', '#dd0', '#1c1', '#22d', '#d11'];
//_____________________________________notes
//interval: 88
let fretSpace = [24,107,190,  283,368,  455,542,  630,718,  806,894,
                       982,1070,1158,1246,  1334,1422,  1510,1598, 1686,1774,1862];
let x2 = 368;
let y2 = 13;
let w2 = 50;
let h2 = 30;
//_____________________________________constructor
function Note(fret,c,string) {
    this.x = fretSpace[fret-1];
    this.y = string-1050;//speed*4
    this.colour = c;
    this.show = function() {
        cx.beginPath();
        cx.strokeStyle = 'black';
        cx.fillStyle = this.colour;
        cx.lineWidth = 12;
        cx.rect(this.x, this.y, w2, h2);
        cx.stroke();
        cx.fill();
        cx.closePath();
    }
    this.move = function() {
        this.y = this.y + dy1;
    }
}

//_____________________________open string constructor
function OpenNote(c,string) {
    this.x = x1;
    this.y = string-1050;
    this.colour = c;
    this.show = function() {
        cx.beginPath();
        cx.moveTo(this.x, this.y);
        cx.lineTo(w1+30, this.y);
        cx.strokeStyle = this.colour;//colour
        cx.lineWidth = 7;
        cx.stroke();
        cx.closePath()
    }
    this.move = function() {
        this.y = this.y + dy1;
    }
}


//________________________________________addNote();
let notes = [];
let a = 0;
function addNote() {
    for(let i=0; i<stringy.length; i++) {
        if (tab[i+a] > 0) {
            notes.push(new Note(tab[i+a],coloursC[5-i],stringy[i])); 
        }
        else if (tab[i+a] == 0) {
            notes.push(new OpenNote(coloursC[5-i],stringy[i]));
        }
        else {notes.push(new Note(tab[i+a],coloursC[5-i],stringy[i]));}
    }
    a = a+6;
} setInterval(addNote, speed);