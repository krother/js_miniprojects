
const colors = {
    true: "red",
    false: "green"
};

function checkPrime(a, name) {
    let isPrime = true;
    for (i=2;i<a;i++) {
        if (a % i == 0) {
            isPrime = false;
        }
    }
    document.getElementById(name).style.backgroundColor = colors[isPrime];
}

function quoted(s) {
    return "'" + s + "'";
}

function get_cell(x, y) {
    let id_ = "x" + x + "y" + y;
    let number = y * 10 + x + 1;
    return '<div class="grid" onmouseover="checkPrime(' 
           + number + ',' + quoted(id_) + ')" id="' + id_ + '">' + number + '</div>';

}
    
function createGrid() {
    let result = "";
    for(y=0;y<10;y++) {
        result += '<div class="flex-container">';
        for(x=0;x<10;x++) {
            result += get_cell(x, y);
        }
        result += '</div>';
    }
    document.getElementById("primes").innerHTML = result;
}
