function getInputNumber(inputId){
    const inputField = document.getElementById(inputId);
    const fieldText = inputField.value ;
    const inputNumber = parseFloat(fieldText);
    inputField.value = '';
    return inputNumber;
}
// User can't withdraw big amount from current amount
function controlWithdrawLimit(fieldId) {
    const currentTag = document.getElementById(fieldId);
    const currentText = currentTag.innerText;
    const value = parseFloat(currentText);
    return value ;

}
function updateTotal(totalId, amount){
    const getTag = document.getElementById(totalId);
    const totalTagText = getTag.innerText;
    const previousNumber = parseFloat(totalTagText);
    const newNumber = previousNumber + amount ;
    getTag.innerText = newNumber;
}
function currentBalance(amount, isAdding ){
    const currentTag = document.getElementById('current-balance');
    const currentText = currentTag.innerText;
    const previousNumber = parseFloat(currentText);
    let newBalance;
    if( isAdding == true ){
        newBalance = previousNumber + amount ;
    }
    else{
        newBalance = previousNumber - amount ;
    }
    currentTag.innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputNumber('deposit-input');
    if( amount > 0 ){
        updateTotal('deposit-total', amount );
        currentBalance(amount, true );
    }
    
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = getInputNumber('withdraw-input');
    const balance = controlWithdrawLimit('current-balance');
    if( amount > 0 && amount <= balance ) {
        updateTotal('withdraw-total', amount);
        currentBalance(amount, false );
    }
})