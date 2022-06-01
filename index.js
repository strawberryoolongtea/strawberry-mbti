function start() {
  const start = document.querySelector(".start");
  const question = document.querySelector(".question");
  start.classList.add("hide");
  question.classList.remove("hide");

  console.log(start);
}

const startBtn = document.querySelector(".btn");
startBtn.addEventListener("click", start);
