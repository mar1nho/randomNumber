let randomNum = 0;

function numRand(){
    randomNum = Math.floor(Math.random() * 100) + 1
    document.getElementById('numGer').innerHTML = `Number generated, now guess!`;
    document.getElementById('userNum').readOnly = false;   
    document.getElementById('res').innerHTML = 'Guess the Number.'
        console.log(randomNum)
}
function guessNum(){
    let num = document.getElementById('userNum').value;
        if (num == randomNum){
            document.getElementById('userNum').value = ''
            document.getElementById('res').innerHTML = `You WON!!!<br> The Number: <strong>${randomNum}<strong>`
            document.getElementById('userNum').readOnly = true; 
            document.getElementById('numGer').innerHTML = 'Generate new Number!'
            randomNum = 0
        } else {
            let tryAgain = ['Try again, buddy!', 'Still not the correct number', 'Next one, maybe...', 'Too close, but too far...', 'I believe in you!', 'Keep trying','Almost there brother...'];
                document.getElementById('userNum').value = ''
            const randomQuo = tryAgain[Math.floor(Math.random() * tryAgain.length)]
                document.getElementById('res').innerHTML = `${randomQuo}`
        }
    }
