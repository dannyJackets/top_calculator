(function(){
    var EXPRESSION = {
        opd1: '',
        op: '',
        opd2: ''
    };

    let buttonWrapper = document.getElementById('content');
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
        switch(button){
        case "clear":
            Object.keys(EXPRESSION).forEach(i => EXPRESSION[i] = '');  
            break;
        case "backspace": 
            backspace();
            break;
        case "divide":
        case "multiply":
        case "subtract":
        case "add":  
            operator(); 
            break;
        case "zero":  
        case "one":
        case "two":
        case "three":
        case "four":
        case "five":
        case "six":
        case "seven":
        case "eight":
        case "nine":
        case "point":
            operands();
            break;
        case "equal":
            solve();
            break;
        }
        document.getElementById("display").innerHTML = EXPRESSION.opd1 + EXPRESSION.op + EXPRESSION.opd2;
    }

    function backspace(){
        if(EXPRESSION.opd2 !== ''){
            if(Math.floor(EXPRESSION.opd2 / 10) === 0){
                EXPRESSION.opd2 = '';
            }
            else{
                EXPRESSION.opd2 = Math.floor(EXPRESSION.opd2 / 10);
            }
        }
        else if(EXPRESSION.op !== ''){
            EXPRESSION.op = '';
        }
        else if(EXPRESSION.opd1 !== ''){
            if(Math.floor(EXPRESSION.opd1 / 10) === 0){
                EXPRESSION.opd1 = '';
            }
            else{
                EXPRESSION.opd1 = Math.floor(EXPRESSION.opd1 / 10);
            }
        }
    }

    function operator(){
        
    }

    function operands(){
        
    }

    function solve(){
        
    }

    function error(){

    }

}());