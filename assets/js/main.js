const btnNo = document.querySelector(".nao");
const btnYes = document.querySelector(".sim");
const question = document.querySelector(".question");

btnNo.addEventListener("mousemove", (e) => {
  e.preventDefault();
  btnNo.style.top = aleatorio(230, 110);
  btnNo.style.right = aleatorio(420, 70);

  if (window.innerWidth < 420) {
    btnNo.style.top = aleatorio(130, 60);
    btnNo.style.right = aleatorio(220, 10);
  }
});

const aleatorio = (a, b) => {
  const valor = Math.floor(Math.random() * a) - b;
  return valor + "px";
};

btnYes.addEventListener("click", (e) => {
  e.preventDefault();

  question.innerHTML = "i love u";
  btnYes.style.visibility = "hidden";
  btnNo.style.visibility = "hidden";
});
