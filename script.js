let randomNum = 0;

function numRand(){
    randomNum = Math.floor(Math.random() * 10) + 1
    document.getElementById('numGer').innerHTML = `Number generated, now guess!`;
        console.log(randomNum)
        document.getElementById('res').innerHTML = 'Guess the Number.'
}
function guessNum(){
    let num = document.getElementById('userNum').value;
        if (num == randomNum){
            document.getElementById('res').innerHTML = `You WON!!!<br> The Number: <strong>${randomNum}<strong>`
            randomNum = 0
            document.getElementById('numGer').innerHTML = 'Generate new Number!'
        } else {
            let tryAgain = ['Try again, buddy!', 'Still not the correct number', 'Next one, maybe...', 'Too close, but too far...', 'I believe in you!', 'Keep trying','Almost there brother...'];
                const randomQuo = tryAgain[Math.floor(Math.random() * tryAgain.length)]
                document.getElementById('res').innerHTML = `${randomQuo}`
        }
}