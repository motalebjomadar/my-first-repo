function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const getInputText = inputField.value ;
    const inputNumber = parseFloat(getInputText);
    inputField.value = '';
    return inputNumber ;
}

function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText ;
    const value = parseFloat(fieldValueInText);
    return value ;
}

function updateTotal(totalId, amount){
    const totalField = document.getElementById(totalId);
    const getTotalFieldText = totalField.innerText ;
    const previousFieldNumber = parseFloat(getTotalFieldText);
    const newTotal = previousFieldNumber + amount ;
    totalField.innerText = newTotal ;
    return newTotal;
}

function updateBalance(amount, isAdding ) {
    const balanceField = document.getElementById('total-balance');
    const balanceText = balanceField.innerText ;
    const previousBalance = parseFloat(balanceText);
    let newBalance;
    if(isAdding == true ) {
        newBalance = previousBalance + amount ;
    }
    else{
        newBalance = previousBalance - amount ;
    }
    
    balanceField.innerText = newBalance ;
}

document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input');
    if(amount > 0 ) {
        updateTotal('deposit-total',amount);
        updateBalance(amount, true);
    }
    
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('total-balance');
    if(amount > 0 & amount <= balance ) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
        
})







