
const rows = 4, columns = 5;

const images = ['bubbles.jpg', 'clouds.jpg', 'coffee.jpg',
                'flower.jpg', 'ivy.jpg', 'orange.jpg', 
                'pebbles.jpg', 'puddle.jpg', 'rainbow.jpg',
                'waterfall.jpg'
];

const backside = 'images/back.jpg';
var empty = ''; // dirty hack, JS puts full file path into src

let cards = {};
var unveiled = [];

function shuffleCards() {
    let a = images.concat(images); // everything twice
    a.sort(() => Math.random() - 0.5);
    for (i=0;i<a.length;i++) {
        let id_ = "x" + i % columns + "y" + (i - i % columns) / columns;
        cards[id_] = a[i];
    }
}

function flipOpen(id_) {
    var src = document.getElementById(id_).src;
    console.log(src);
    if ((src != backside) && (src != empty)) {
        document.getElementById(id_).src = 'images/' + cards[id_];
        if (unveiled.length != 1 || unveiled[0] != id_) {
            unveiled.push(id_);
        }
    }
}
function flipBack() {
    document.getElementById(unveiled[0]).src = backside;
    document.getElementById(unveiled[1]).src = backside;
    unveiled.pop();
    unveiled.pop();    
}

function checkForPair() {
    if (unveiled.length == 2) {
        img1 = document.getElementById(unveiled[0]).src;
        img2 = document.getElementById(unveiled[1]).src;
        if (img1 == img2) {
            document.getElementById(unveiled[0]).src = 'images/empty.jpg';
            document.getElementById(unveiled[1]).src = 'images/empty.jpg';
            empty = document.getElementById(unveiled[0]).src; // part of dirty hack
            unveiled.pop();
            unveiled.pop();
        }
    }    

}
function turn(id_) {
    if (unveiled.length == 2) {
        flipBack();
    }
    else if (unveiled.length <= 1) {
        flipOpen(id_);
    }
    checkForPair();
}

function createCard(x, y) {
    let id_ = "x" + x + "y" + y;
    let image = `<img src="images/back.jpg" id="${id_}" width="160px">`;
    return `<div class="grid" onclick="turn('${id_}')">${image}</div>`;

}
    
function startGame() {
    let result = "";
    shuffleCards();
    for(y=0;y<rows;y++) {
        result += '<div class="flex-container">';
        for(x=0;x<columns;x++) {
            result += createCard(x, y);
        }
        result += '</div>';
    }
    document.getElementById("memory").innerHTML = result;
}
