(function(){
    var EXPRESSION = {
        opd1: '',
        op: '',
        opd2: ''
    };

    const ERROR = 'ERROR';

    let buttonWrapper = document.getElementById('content');
    buttonWrapper.addEventListener('click', function(e) { buttonId(e) });

    function buttonId(e){   
        if(e.target.nodeName !== 'BUTTON'){
            return;
        }
        else{
            if(EXPRESSION.opd1 === ERROR){  //clear error message before button response
                clear();
            }
            updateDisplay(e.target.innerHTML);
        }
    }

    function updateDisplay(button){
        switch(button){
        case 'AC':
            clear(); 
            break;
        case '\u2190':
            backspace();
            break;
        case '\u00f7':  //divide
        case '\u00d7':  //multiply
        case '-':
        case '+':  
            operator(button); 
            break;
        case '0':  
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            operands(button);
            break;
        case '=':
            solve(button);
            break;
        }
        document.getElementById('display').innerHTML = EXPRESSION.opd1 + EXPRESSION.op + EXPRESSION.opd2;
    }

    function clear(){
        Object.keys(EXPRESSION).forEach(i => EXPRESSION[i] = ''); 
    }

    function backspace(){   //need to revisit for erasing operands with decimals, better strategy is to delete end of string....
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

    function operator(button){
        if(EXPRESSION.opd1 === ''){
            if(button === '-'){
                EXPRESSION.opd1 = button;       
            }
        }
        else if(EXPRESSION.opd2 === ''){
            EXPRESSION.op = button;
        }
    }

    function operands(button){
        if(EXPRESSION.op === ''){
            if(button === '.'){
                if(EXPRESSION.opd1 % 1 === 0){
                    EXPRESSION.opd1 = EXPRESSION.opd1 + '.';
                }
            }
            else{
                EXPRESSION.opd1 = EXPRESSION.opd1 + button;
            }
        }
        else{
            if(button === '.'){
                if(EXPRESSION.opd2 % 1 === 0){
                    EXPRESSION.opd2 = EXPRESSION.opd2 + '.';
                }
            }
            else{
                EXPRESSION.opd2 = EXPRESSION.opd2 + button;
            }
        }
    }

    function solve(button){
        if(EXPRESSION.opd1 !== '' && EXPRESSION.opd2 !== ''){
            if(EXPRESSION.op === '\u00f7'){
                divide(Number(EXPRESSION.opd1), Number(EXPRESSION.opd2));
            }
            else if(EXPRESSION.op === '\u00d7'){
                multiply(Number(EXPRESSION.opd1), Number(EXPRESSION.opd2));
            }
            else if(EXPRESSION.op === '-'){
                subtract(Number(EXPRESSION.opd1), Number(EXPRESSION.opd2));
            }
            else if(EXPRESSION.op === '+'){
                add(Number(EXPRESSION.opd1), Number(EXPRESSION.opd2));
            }
        }
    }

    function divide(a, b){
        if(b === 0){
            error();
        }
        else{
            clear();
            EXPRESSION.opd1 = (a / b).toString();
        }
    }

    function multiply(a, b){
        clear();
        EXPRESSION.opd1 = (a * b).toString();
    }

    function subtract(a, b){
        clear();
        EXPRESSION.opd1 = (a - b).toString();
    }

    function add(a, b){
        clear();
        EXPRESSION.opd1 = (a + b).toString();
    }

    function error(){ 
        clear();
        EXPRESSION.opd1 = ERROR;
    }

}());