
function palindrome() {
    let str = document.getElementById('text_input').value

    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] != str[j]) {
            return false
        }
        i++;
        j--;
    }

    alert(`${str} is a palindrome`);
    return true;
  }
  