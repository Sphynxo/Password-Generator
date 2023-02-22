"use strict";

const rangeInput = document.querySelector(".length");
const rangeValue = document.querySelector(".length-value");
const btn = document.querySelector(".generate-btn");
const generatedWindow = document.querySelector(".password-window");
const blur = document.querySelector(".blur");
const closeBtn = document.querySelector(".fa-circle-xmark");
const generated = document.querySelector('.password-generated');
const copyBtn = document.querySelector('.copy-btn');
const copied = document.querySelector('.copied');

function generatePassword(length) {
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Set initial value
rangeValue.textContent = rangeInput.value;

// Update value on input change
rangeInput.addEventListener("input", () => {
  rangeValue.textContent = rangeInput.value;
});

btn.addEventListener("click", function () {
  generatedWindow.classList.remove("hidden");
  blur.classList.remove("hidden");
  generated.textContent = generatePassword(rangeInput.value);
  copyBtn.classList.remove('hidden');
  copied.classList.add('hidden')
});

blur.addEventListener("click", function () {
  generatedWindow.classList.add("hidden");
  blur.classList.add("hidden");
});

closeBtn.addEventListener("click", function () {
  generatedWindow.classList.add("hidden");
  blur.classList.add("hidden");
});

copyBtn.addEventListener('click', function() {
    const passwordText = generated.textContent;
    navigator.clipboard.writeText(passwordText);
    copyBtn.classList.add('hidden');
    copied.classList.remove('hidden')
  });



