function generateNumbers() {
    let numbers = [];
    while (numbers.length < 4) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}
var numbers = [];
numbers = generateNumbers();
console.log(numbers);



const first1 = document.querySelector("#first");
const second2 = document.querySelector("#second");
const third3 = document.querySelector("#third");
const fourth4 = document.querySelector("#fourth");
const guessBtn = document.getElementById("guessButton");
const prediction = document.getElementById("predictions");
const input = document.getElementById("input");


async function guess0() {
    var plus = 0;
    var minus = 0;
    const guesses = [first1.value, second2.value, third3.value, fourth4.value];

    for (let i = 0; i < 4; i++) {
        for (let y = 0; y < 4; y++) {
            if (guesses[i] == numbers[y]) {
                if (i == y) {
                    plus++;
                    if (plus == 4) {
                        window.alert("Oyunu kazandınız");
                        guessBtn.style.visibility = 'hidden';
                        break;
                    }
                    console.log(plus);
                }
                else {
                    minus++;
                    console.log(minus);
                }
            }
        }
    }
    prediction.innerHTML += first1.value + second2.value + third3.value + fourth4.value + "+" + plus + " -" + minus + "<br>";
}

