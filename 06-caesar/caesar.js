
function caesar() {
    let plain = document.getElementById('plain').value;
    plain = plain.toUpperCase();

    let result = "";
    for (let char of plain) {
        if (char.match(/[A-Z]/)) {
        let i = char.charCodeAt(0);
        i += 13;
        if (i > 90) { i -= 26 };
        result += String.fromCharCode(i);
        }
        else {
            result += char;
        }
    }
    document.getElementById('coded_text').innerHTML = result;

    return result;
}

function uncaesar() {
    let rot13 = document.getElementById('rot13').value;
    let result = "";
    for (let char of rot13) {
        if (char.match(/[A-Z]/)) {
        let i = char.charCodeAt(0);
        i -= 13;
        if (i < 65) { i += 26 };
        result += String.fromCharCode(i);
        }
        else {
            result += char;
        }
    }
    document.getElementById('decoded_text').innerHTML = result;

    return result;
}