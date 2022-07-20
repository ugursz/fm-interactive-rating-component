'use scrict';

const containerEl = document.querySelector('.container');
const thankYouStateEl = document.querySelector('.thank-you-state');
const submitBtn = document.querySelector('.submit');
const rating = document.querySelector('.rating');
const rates = document.querySelectorAll('.btn');

submitBtn.addEventListener('click', function () {
  thankYouStateEl.classList.remove('hidden');
  containerEl.classList.add('hidden');
});

rates.forEach(function (rate) {
  rate.addEventListener('click', function () {
    rating.textContent = rate.textContent;
  });
});
