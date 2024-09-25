const donationInputEl = document.getElementById('donation-input')
const noakhaiBalanceEl = document.getElementById('noakhai-balance')
const currentBalanceEl = document.getElementById('current-balance')

const modal1 = document.getElementById('modal')

const donationInputEl2 = document.getElementById('donation-input2')
const feniBalanceEl2 = document.getElementById('feni-balance')

const donationInputEl3 = document.getElementById('donation-input3')
const quotaBalanceEl3 = document.getElementById('quota-balance')

const historyContainer = document.getElementById('history-container')

// -----------------------------------noakhali ------------------------------
function donationHandle(event) {

    const donationInput = (donationInputEl.value);
    if (isNaN(donationInput) || donationInput <= 0) {
        return alert('invalid input')
    }

    const donationInputValue = parseFloat(donationInput);
    const currentBalance = parseFloat(currentBalanceEl.innerText);

    if(currentBalance < donationInputValue){
        return alert('Uncufficent Balance')
    }
    const newCurrentBalance = currentBalance - donationInputValue;
    currentBalanceEl.innerText = newCurrentBalance.toFixed(2);

    const noakhaiBalance = parseFloat(noakhaiBalanceEl.innerText);
    const newNoakhaliBalance = noakhaiBalance + donationInputValue;
    noakhaiBalanceEl.innerText = newNoakhaliBalance.toFixed(2);

    // history list 
    const historyList = document.createElement("div");
    historyList.className = " rounded-xl border border-red-500 font-semibold p-5 mb-5";

    historyList.innerHTML = `
    <p class="text-black text-xl">${donationInputValue.toFixed(2)} Taka is Donated for Food at Noakhali, Bangladesh</p>
    <p class="text-gray-500" >${new Date()}</p>
    `
    historyContainer.insertBefore(historyList, historyContainer.firstChild)



    // --------------------modal------------------
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden')


}
// -----------------------------------------------feni---------------------------------------
function donationHandle2(event) {
    const donationInput = (donationInputEl2.value);
    if (isNaN(donationInput) || donationInput <= 0) {
        return alert('invalid input')
    }
    const donationInputValue = parseFloat(donationInput);
    const currentBalance = parseFloat(currentBalanceEl.innerText);
    if(currentBalance < donationInputValue){
        return alert('Uncufficent Balance')
    }
    const newCurrentBalance = currentBalance - donationInputValue;
    currentBalanceEl.innerText = newCurrentBalance.toFixed(2);

    const feniBalance = parseFloat(feniBalanceEl2.innerText);
    const newfeniBalance = feniBalance + donationInputValue;
    feniBalanceEl2.innerText = newfeniBalance.toFixed(2);

    // history list 
    const historyList = document.createElement("div");
    historyList.className = " rounded-xl border border-red-500 font-semibold p-5 mb-5 bg-white ";

    historyList.innerHTML = `
     <p class="text-black text-xl">${donationInputValue.toFixed(2)} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
     <p class="text-gray-500" >${new Date()}</p>
 
     `
    historyContainer.insertBefore(historyList, historyContainer.firstChild)

    // --------------------modal------------------
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden')
}
function donationHandle3(event) {
    const donationInput = (donationInputEl3.value);
    if (isNaN(donationInput) || donationInput <= 0) {
        return alert('invalid input')
    }
    const donationInputValue = parseFloat(donationInput);
    const currentBalance = parseFloat(currentBalanceEl.innerText);
    if(currentBalance < donationInputValue){
        return alert('Uncufficent Balance')
    }
    const newCurrentBalance = currentBalance - donationInputValue;
    currentBalanceEl.innerText = newCurrentBalance.toFixed(2);
    const quotaBalance = parseFloat(quotaBalanceEl3.innerText);
    const newNquotaBalance = quotaBalance + donationInputValue;
    quotaBalanceEl3.innerText = newNquotaBalance.toFixed(2);

    // history list 
    const historyList = document.createElement("div");
    historyList.className = " rounded-xl border border-red-500 font-semibold p-5 mb-5  bg-white ";

    historyList.innerHTML = `
     <p class="text-black text-xl">${donationInputValue.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
     <p class="text-gray-500" >${new Date()}</p>
 
     `
    historyContainer.insertBefore(historyList, historyContainer.firstChild);

    // --------------------modal------------------
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden')
}

// ===========================================================================================================
// history button
const donationTab = document.getElementById('donation-tab');
const historyTab = document.getElementById('history-tab');
const mainSection = document.getElementById('main-section')

historyTab.addEventListener('click', function () {
    historyTab.classList.add("bg-[#B4F461]", "focus:border-none", "duration-200", "text-white");

    donationTab.classList.remove("bg-[#B4F461]", "focus:border-none", "duration-200", "text-white");

    mainSection.classList.add('hidden');

    document.getElementById("history-section").classList.remove("hidden")

    const blogSection = document.getElementById('blog-section');
    blogSection.classList.add('hidden')


})
// donation Button
donationTab.addEventListener('click', function () {
    historyTab.classList.remove("bg-[#B4F461]", "focus:border-none", "duration-200", "text-white");

    donationTab.classList.add("bg-[#B4F461]", "focus:border-none", "duration-200", "text-white");

    mainSection.classList.remove('hidden');

    document.getElementById("history-section").classList.add("hidden")

    const blogSection = document.getElementById('blog-section');
    blogSection.classList.add('hidden')


})

// <!-- =============================================== Blog section ============================================== -->
const blog = document.getElementById('blog-btn').addEventListener('click', function () {
    const blogSection = document.getElementById('blog-section');
    blogSection.classList.remove('hidden')
    mainSection.classList.add('hidden');

    document.getElementById("history-section").classList.add("hidden")

    donationTab.classList.remove("bg-[#B4F461]", "focus:border-none", "duration-200", "text-white");
    historyTab.classList.remove("bg-[#B4F461]", "focus:border-none", "duration-200", "text-white");

})


// <!-- =============================================== modal section ============================================== -->
const close = document.getElementById('close').addEventListener('click', function () {
    // e.preventDefault();
    const modal = document.getElementById('modal');
    modal.classList.add('hidden')
})