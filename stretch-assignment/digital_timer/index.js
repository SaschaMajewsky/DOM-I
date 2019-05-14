const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const msHundreds = document.querySelector('#msHundreds')
const msTens = document.querySelector('#msTens')


const digits = document.querySelector('#digits') 
const buttons = document.querySelector('#buttons')

const startButton = document.createElement("button");
startButton.textContent = "Start"
startButton.style.marginLeft = "0.5rem"
startButton.style.marginTop = "2rem"
startButton.style.paddingTop = "0.7rem"
startButton.style.paddingBottom = "0.7rem"
startButton.style.paddingLeft = "3rem"
startButton.style.paddingRight = "3rem"
startButton.addEventListener('click', (event) => {
    secondTens.textContent = 0;
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;
    update();
});
buttons.appendChild(startButton);


function updateSeconds() {
    if(secondOnes.textContent == 9) {
        secondTens.style.color = "red";
        secondOnes.style.color = "red";
        msHundreds.style.color = "red";
        msTens.style.color = "red";
        secondTens.textContent = 1;
        clearInterval(refresh);
        // THIS DOES NOT GET EXECUTED BECAUSE CLEARINTERVAL STOPS IT :(
        secondOnes.textContent = 0;
    }

    if(msTens.textContent == 9) {
        msTens.textContent = 0;
        if(msHundreds.textContent == 9) {
            msHundreds.textContent = 0;
            if(secondOnes.textContent == 9) {
            } else {
                secondOnes.textContent = parseInt(secondOnes.textContent) + 1;
            }
        } else {
            msHundreds.textContent = parseInt(msHundreds.textContent) + 1;
        }
    } else {
        msTens.textContent = parseInt(msTens.textContent) + 1;
    }
}

function update() {
    const refresh = setInterval(function(){ updateSeconds(); }, 10);
}
