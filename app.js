function updateInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value ;
    const newNumber = parseFloat(inputFieldText);
    inputField.value = '';
    return newNumber;
}
function controlWithdrawLimit(){
    const balanceField = document.getElementById('balance-total');
    const balanceFieldText = balanceField.innerText ;
    const previousBalance = parseFloat(balanceFieldText);
    return previousBalance;
}
function updateTotal(totalId, amount){
    const totalField = document.getElementById(totalId);
    const totalIdText = totalField.innerText ;
    const previousNumber = parseFloat(totalIdText);
    const newTotal = previousNumber + amount ;
    totalField.innerText = newTotal ;
}
function currentBalance(amount, isAdd){
    const balanceField = document.getElementById('balance-total');
    const balanceFieldText = balanceField.innerText ;
    const previousBalance = parseFloat(balanceFieldText);
    let newBalance;
    if(isAdd){
        newBalance = previousBalance + amount ;
    }
    else{
        newBalance = previousBalance - amount ;
    }
    balanceField.innerText = newBalance ;
}

document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = updateInputValue('deposit-input');
    if( amount > 0 ){
        updateTotal('deposit-total', amount);
        currentBalance(amount, true );
    }
    
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = updateInputValue('withdraw-input');
    const balance = controlWithdrawLimit();
    if( amount > 0 && amount <= balance ){
        updateTotal('withdraw-total', amount );
        currentBalance(amount, false );
    }  
})