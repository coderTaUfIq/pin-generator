document.getElementById('generate-btn').addEventListener('click', function(){
    document.getElementById('notify-success').style.display = 'none';
    document.getElementById('notify-failed').style.display = 'none';
    let randomNum = Math.round(Math.random() * 100000);
    let pin = randomNum + '';
    if (pin.length == 5){
        document.getElementById('random-output').value = randomNum;
    }
    else{
        randomNum = Math.round(Math.random() * 100000);
    }
})

let submitScreen = document.getElementById('submit-screen');
let screenValue = '';
buttons = document.getElementsByClassName('button');
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if (buttonText == 'C'){
            screenValue = '';
            submitScreen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            submitScreen.value = screenValue;
        }
    })
}

function pinVarify(){
    let pin = document.getElementById('random-output').value;
    let typedButton = document.getElementById('submit-screen').value;
    let successMsg = document.getElementById('notify-success');
    let failedMsg = document.getElementById('notify-failed');
    let attmt = document.getElementById('attempt').innerText;
    let numAtmpt = parseFloat(attmt);
    if (pin == typedButton){
        successMsg.style.display ='block';
        failedMsg.style.display = 'none';
        document.getElementById('submit-screen').value = '';
        document.getElementById('attempt').innerText = 3;
    }
    else{
        failedMsg.style.display = 'block';
        successMsg.style.display ='none';
        let attemptLeft = 0;
        for(i = 0; i < numAtmpt; i++){
            attemptLeft = i;
        }
        document.getElementById('submit-screen').value = '';
        document.getElementById('attempt').innerText = attemptLeft;
        if(attmt == 1){
            document.getElementById('attmt-line').style.display = 'none';
            document.getElementById('notify-thief').style.display = 'block';
        }
    }
}