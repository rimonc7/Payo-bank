document.getElementById('btn-add-money').addEventListener('click', function () {
    const addMoneyForm = document.getElementById('add-money-form');
    addMoneyForm.classList.remove('hidden');
})

document.getElementById('money-added-primarybtn').addEventListener('click', function (event) {
    event.preventDefault();

    const amount = document.getElementById('amount-input');
    const amountValue = amount.value;
    const pin = document.getElementById('pin-input').value;

    if (pin === '1234') {
        const Balance = document.getElementById('available-balance').innerText;
        const availableMoney = parseFloat(Balance)
        const addedAmount = parseFloat(amountValue);
        const total = availableMoney + addedAmount;
        document.getElementById('available-balance').innerText = total;
        amount.value = '';
        document.getElementById('pin-input').value = '';
    }
    else {
        alert('you foul')
    }
})