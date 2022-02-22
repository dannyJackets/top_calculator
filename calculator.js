(function(){
    var EXPRESSION;

    let buttonWrapper = document.getElementById('content');
    buttonWrapper.addEventListener('click', function(e) { buttonId(e) });

    function buttonId(e){   
        if(e.target.nodeName !== 'BUTTON'){
            return;
        }
        else{
            updateDisplay(e.target.innerHTML);
        }
    }

    function updateDisplay(button){
        if(button === "AC"){
            EXPRESSION = '';  
        }
        else if(button === "&#8592"){
            
        }
        document.getElementById("screen").innerHTML = EXPRESSION;
    }
}());