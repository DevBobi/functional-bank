/* function doubleIt(num){
    const result = num*2;
    return result;
}
const first =doubleIt(5);
const secodn = doubleIt(7);
 */

function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const despositAmount = parseFloat(depositAmountText);

    //    clear input feild 
    depositInput.value = '';

    return despositAmount;
}

const depositAmount = getInputValue();