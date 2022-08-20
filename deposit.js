document.getElementById('btn-deposit').addEventListener('click', function () {
    let newdepositElement = document.getElementById('deposit-field');
    let newDepositAmountString = newdepositElement.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);

    let previousDepositElement = document.getElementById('deposit-total');
    let previousDepositAmountString = previousDepositElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    let currentDepositTotal = previousDepositAmount + newDepositAmount;
    previousDepositElement.innerText = currentDepositTotal;


    // let us fix the balance element 
    let previousBalanceElement = document.getElementById('balance-total');
    let previousBalanceAmountString = previousBalanceElement.innerText;
    let previousBalanceAmount = parseFloat(previousBalanceAmountString);
    let currentBalanceTotal = previousBalanceAmount + newDepositAmount;
    previousBalanceElement.innerText = currentBalanceTotal;


    newdepositElement.value = '';



})