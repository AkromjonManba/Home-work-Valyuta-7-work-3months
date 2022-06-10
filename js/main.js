let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elButton = document.querySelector(".js-btn");
let elText = document.querySelector(".js-text");
let elSelect = document.querySelector(".js-select");
let img_usd = document.querySelector('.img_usd');
let img_euro = document.querySelector('.img_euro');
let img_rub = document.querySelector('.img_rub');
let UZB_TO_USD = 11045;
let UZB_TO_EURO = 11764;
let UZB_TO_RUB = 192;

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let money = elInput.value;
  let valOfSel = elSelect.value;
  let course = 0;

  if (valOfSel == "EURO") {
    course = `THIS ${money} YEVRO CONVERT TO ${money * UZB_TO_EURO} SUM 🇺🇿`;
    img_euro.style.display = 'block'
    img_usd.style.display = 'none'
    img_rub.style.display = 'none'
  } else if (valOfSel == "USD") {
    course = `THIS ${money} USD CONVERT TO ${money * UZB_TO_USD} SUM uz`;
    img_usd.style.display = 'block'
    img_euro.style.display = 'none'
    img_rub.style.display = 'none'
  } else if (valOfSel == "RUB") {
    course = `THIS ${money} RUB CONVERT TO ${money * UZB_TO_RUB} SUM uz`;
    img_rub.style.display = 'block'
    img_euro.style.display = 'none'
    img_usd.style.display = 'none'
  } else {
    course = "";
  }

  elText.textContent = `${course}`;
});
