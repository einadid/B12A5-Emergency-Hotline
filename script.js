let hearts = 0;
let copies = 0;
let coins = 100;
let callHistory = [];

const navbarHeartCountDisplay = document.getElementById("navbarHeartCountDisplay");
const navbarCopyCountDisplay = document.getElementById("navbarCopyCountDisplay");
const navbarCoinCountDisplay = document.getElementById("navbarCoinCountDisplay"); 
const historyList = document.getElementById('historyList'); 
const clearHistoryButton = document.getElementById('clearHistory');

function updateNavbarCounts() {
  navbarHeartCountDisplay.textContent = hearts;
  navbarCopyCountDisplay.textContent = copies;
  navbarCoinCountDisplay.textContent = coins; 
}

function toggleHeart(event) {
  const heartIcon = event.currentTarget.querySelector('.fa-heart');

  if (heartIcon.classList.contains('fa-regular')) {
    heartIcon.classList.remove('fa-regular');
    heartIcon.classList.add('fa-solid');
    hearts++;
  } else {
    heartIcon.classList.remove('fa-solid');
    heartIcon.classList.add('fa-regular');
    // hearts--; 
  }
  updateNavbarCounts();
}

function handleCopy(event) {
  const card = event.currentTarget.closest('.card');
  const number = card.querySelector("p[data-phone-number]").dataset.phoneNumber;
  const serviceName = card.querySelector("h4[data-service-name]").dataset.serviceName;

  navigator.clipboard.writeText(number);

  copies++;
  updateNavbarCounts();

  alert(`Copied ${serviceName}: ${number}`);
}

function renderCallHistory() {
  historyList.innerHTML = ''; 

  if (callHistory.length === 0) {
    const noCallsItem = document.createElement('li');
    noCallsItem.className = 'text-slate-400 text-sm';
    noCallsItem.textContent = 'No calls yet';
    historyList.appendChild(noCallsItem);
  } else {
    const sortedHistory = [...callHistory].reverse();
    sortedHistory.forEach(call => {
      const listItem = document.createElement('li');
      listItem.className = 'bg-gray-50 p-3 rounded-xl shadow-sm flex items-center justify-between';
      listItem.innerHTML = `
        <div>
          <p class="font-semibold text-sm">${call.name}</p>
          <p class="text-xs text-gray-500">${call.number}</p>
        </div>
        <span class="text-xs text-gray-500">${call.time}</span>
      `;
      historyList.appendChild(listItem);
    });
  }
}

function handleCall(event) {
  if (coins < 20) { 
    alert("আপনার পর্যাপ্ত কয়েন নেই! (You don't have enough coins!)");
    return; 
  }

  const card = event.currentTarget.closest('.card');
  const serviceName = card.querySelector("h4[data-service-name]").dataset.serviceName; 
  const phoneNumber = card.querySelector("p[data-phone-number]").dataset.phoneNumber; 

  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

  const newCall = {
    name: serviceName,
    number: phoneNumber,
    time: timeString
  };

  callHistory.push(newCall);
  renderCallHistory(); 
  alert(`Calling ${serviceName}: ${phoneNumber}`);

  coins -= 20; 
  updateNavbarCounts(); 
}

function clearCallHistory() {
  callHistory = []; 
  renderCallHistory(); 
}

document.querySelectorAll(".cardHeartBtn").forEach(button => {
  button.addEventListener("click", toggleHeart);
});

document.querySelectorAll(".copyBtn").forEach(button => {
  button.addEventListener("click", handleCopy);
});

document.querySelectorAll(".callBtn").forEach(button => {
  button.addEventListener("click", handleCall);
});

clearHistoryButton.addEventListener('click', clearCallHistory);

document.addEventListener('DOMContentLoaded', () => {
  renderCallHistory();
  updateNavbarCounts(); 
});