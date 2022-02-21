const buttonWrapper = document.getElementById('content');
buttonWrapper.addEventListener('click', function(e) { buttonId(e) });

function buttonId(e){   
    if(e.target.nodeName !== 'BUTTON'){
        return;
    }
    else{
        updateDisplay(e.target.id);
    }
}

function updateDisplay(button){
    document.getElementById("screen").innerHTML = button;
}
