
const ROMANS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function arabicToRoman() {
    let arabic = parseInt(document.getElementById('arabic').value);
    let roman = '';
    for (let key in ROMANS) {
        let value = ROMANS[key];
        while (arabic >= value) {
            roman += key;
            arabic -= value;
        }
    }
    document.getElementById('roman').innerHTML = roman;

    return roman;

}