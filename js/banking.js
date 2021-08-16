document.getElementById('deposit-button').addEventListener('click', function () {
    // get amount from inputfeild
    const depositInput = document.getElementById('deposit-input');

    const depositAmountText = depositInput.value;
    const despositAmount = parseFloat(depositAmountText);


    // get current deposit 
    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + despositAmount;

    // get update main balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + despositAmount;




    //    clear input feild 
    depositInput.value = '';

})

// withdraw balance 

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);

    // get withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');

    const withdrawTotalText = withdrawTotal.innerText;
    const previoudWithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = previoudWithdrawTotal + withdrawAmount;

    // clear inputfeild
    withdrawInput.value = '';

    // get update withdraw with main balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;



})