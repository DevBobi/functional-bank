

function getInputValue(inputId) {
    debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalFeild(totalFeildId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFeildId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}

document.getElementById('deposit-button').addEventListener('click', function () {

    if (depositAmount > 0) {
        const depositAmount = getInputValue('deposit-input');
        updateTotalFeild('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

});


// handle withdraw button 

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalFeild('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('Input is bigger than your remaining amount');
    }

});