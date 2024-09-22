const donationInputEl = document.getElementById('donation-input')
const noakhaiBalanceEl = document.getElementById('noakhai-balance')
const currentBalanceEl = document.getElementById('current-balance')

const donationInputEl2 = document.getElementById('donation-input2')
const feniBalanceEl2 = document.getElementById('feni-balance')

const donationInputEl3 = document.getElementById('donation-input3')
const quotaBalanceEl3 = document.getElementById('quota-balance')


// -----------------------------------noakhali ------------------------------
function donationHandle(event) {
    // console.log('hello')
    const donationInput = (donationInputEl.value);
    if (isNaN(donationInput) || donationInput <= 0) {
        return alert('invalid input')
    }
    const donationInputValue = parseFloat(donationInput);
    const currentBalance = parseFloat(currentBalanceEl.innerText);
    // console.log(donationInputValue, currentBalance)
    const newCurrentBalance = currentBalance - donationInputValue;
    // console.log(newCurrentBalance);
    currentBalanceEl.innerText = newCurrentBalance;

    const noakhaiBalance = parseFloat(noakhaiBalanceEl.innerText);
    // console.log(noakhaiBalance)
    const newNoakhaliBalance = noakhaiBalance + donationInputValue;
    // console.log(newNoakhaliBalance)
    return noakhaiBalanceEl.innerText = newNoakhaliBalance;
}

// -----------------------------------------------feni---------------------------------------
function donationHandle2(event) {
    // console.log('hello')
    const donationInput = (donationInputEl2.value);
    if (isNaN(donationInput) || donationInput <= 0) {
        return alert('invalid input')
    }
    const donationInputValue = parseFloat(donationInput);
    const currentBalance = parseFloat(currentBalanceEl.innerText);
    // console.log(donationInputValue, currentBalance)
    const newCurrentBalance = currentBalance - donationInputValue;
    // console.log(newCurrentBalance);
    currentBalanceEl.innerText = newCurrentBalance;

    const feniBalance = parseFloat(feniBalanceEl2.innerText);
    // console.log(noakhaiBalance)
    const newfeniBalance = feniBalance + donationInputValue;
    // console.log(newNoakhaliBalance)
    feniBalanceEl2.innerText = newfeniBalance;
}
function donationHandle3(event) {
    // console.log('hello')
    const donationInput = (donationInputEl3.value);
    if (isNaN(donationInput) || donationInput <= 0) {
        return alert('invalid input')
    }
    const donationInputValue = parseFloat(donationInput);
    const currentBalance = parseFloat(currentBalanceEl.innerText);
    // console.log(donationInputValue, currentBalance)
    const newCurrentBalance = currentBalance - donationInputValue;
    // console.log(newCurrentBalance);
    currentBalanceEl.innerText = newCurrentBalance;
    const quotaBalance = parseFloat(quotaBalanceEl3.innerText);
    // console.log(noakhaiBalance)
    const newNquotaBalance = quotaBalance + donationInputValue;
    // console.log(newNoakhaliBalance)
    quotaBalanceEl3.innerText = newNquotaBalance;
}

