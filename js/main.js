function display(val) {

    document.getElementById('result').value += val

    console.log(val);
}

function solve() {

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    console.log(val);

}

function clearScreen() {


    document.getElementById('result').value = ''

}

// function display(val) {

//     document.getElementById('result').value = square()

//     console.log(val);
// }

// function display(val) {

//     document.getElementById('result').value = Math.sqrt(val)

//     console.log(val);
// }