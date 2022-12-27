const input = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  value = Number(input.value);
  switch (value) {
    case 1:
      text.textContent = "Dushanba";
      break;
    case 2:
      text.textContent = "Seshanba";
      break;
    case 3:
      text.textContent = "Chorshanba";
      break;
    case 4:
      text.textContent = "Payshanba";
      break;
    case 5:
      text.textContent = "Juma";
      break;
    case 6:
      text.textContent = "Shanba";
      break;
    case 7:
      text.textContent = "Yakshanba";
      break;
    default:
      text.textContent = "1 dan 7 gacha bo'lgan son kiriting!";
  }
});
