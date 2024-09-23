const donationInputEl = document.getElementById('donation-input')
const noakhaiBalanceEl = document.getElementById('noakhai-balance')
const currentBalanceEl = document.getElementById('current-balance')

// const modal1 = document.getElementById('my_modal_1')

const donationInputEl2 = document.getElementById('donation-input2')
const feniBalanceEl2 = document.getElementById('feni-balance')

const donationInputEl3 = document.getElementById('donation-input3')
const quotaBalanceEl3 = document.getElementById('quota-balance')

const historyContainer = document.getElementById('history-container')

// -----------------------------------noakhali ------------------------------
function donationHandle(event) {
    // console.log('hello')
    const donationInput = (donationInputEl.value);
    if (isNaN(donationInput) || donationInput <= 0) {
        return alert('invalid input')
    } else {
        alert('wow')
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
    noakhaiBalanceEl.innerText = newNoakhaliBalance;

    // history list 
    const historyList = document.createElement("div");
    historyList.className = " rounded-xl border border-red-500 font-semibold p-5 mb-5";

    historyList.innerHTML = `
    <p class="text-black text-xl">${donationInputValue} Taka is Donated for Food at Noakhali, Bangladesh</p>
    <p class="text-gray-500" >${new Date().toLocaleDateString()} +6066 (Bangladesh Standard Time)</p>

    `
    historyContainer.insertBefore(historyList, historyContainer.firstChild)

    // -----------------------------------------------------------------------------------------------------------------------------------------





    // return modal1;


    // -----------------------------------------------------------------------------------------------------------------------------------------------
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

    // history list 
    const historyList = document.createElement("div");
    historyList.className = " rounded-xl border border-red-500 font-semibold p-5 mb-5 bg-white ";

    historyList.innerHTML = `
     <p class="text-black text-xl">${donationInputValue} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
     <p class="text-gray-500" >${new Date().toLocaleDateString()} +6066 (Bangladesh Standard Time)</p>
 
     `
    historyContainer.insertBefore(historyList, historyContainer.firstChild)
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

    // history list 
    const historyList = document.createElement("div");
    historyList.className = " rounded-xl border border-red-500 font-semibold p-5 mb-5  bg-white ";

    historyList.innerHTML = `
     <p class="text-black text-xl">${donationInputValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
     <p class="text-gray-500" >${new Date().toLocaleDateString()} +6066 (Bangladesh Standard Time)</p>
 
     `
    historyContainer.insertBefore(historyList, historyContainer.firstChild)
}

// ===========================================================================================================
// history section 
const donationTab = document.getElementById('donation-tab');
const historyTab = document.getElementById('history-tab');
const mainSection = document.getElementById('main-section')

historyTab.addEventListener('click', function () {
    historyTab.classList.add("bg-[#B4F461]", "focus:border-none", "duration-200", "text-white");

    donationTab.classList.remove("bg-[#B4F461]", "focus:border-none", "duration-200", "text-white");

    mainSection.classList.add('hidden');

    document.getElementById("history-section").classList.remove("hidden")



})
donationTab.addEventListener('click', function () {
    historyTab.classList.remove("bg-[#B4F461]", "focus:border-none", "duration-200", "text-white");

    donationTab.classList.add("bg-[#B4F461]", "focus:border-none", "duration-200", "text-white");

    mainSection.classList.remove('hidden');

    document.getElementById("history-section").classList.add("hidden")



})

