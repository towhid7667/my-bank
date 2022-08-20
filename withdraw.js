document.getElementById('btn-withdraw').addEventListener('click', function () {
    let newWithdrawElement = document.getElementById('withdraw-field');
    let newWithdrawAmountString = newWithdrawElement.value;
    let newWithdrawAmount = parseFloat(newWithdrawAmountString);


    let previousWithdrawElement = document.getElementById('withdraw-total');
    let previousWithdrawAmountString = previousWithdrawElement.innerText;
    let previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    let currentWithdrawalTotal = newWithdrawAmount + previousWithdrawAmount;
    previousWithdrawElement.innerText = currentWithdrawalTotal;

    let previousBalanceElement = document.getElementById('balance-total');
    let previousBalanceAmountString = previousBalanceElement.innerText;
    let previousBalanceAmount = parseFloat(previousBalanceAmountString);
    let currentBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    previousBalanceElement.innerText = currentBalanceTotal;
})