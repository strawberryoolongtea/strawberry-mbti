import { question, mbti } from "./data.js";

let num = 1;
const questionNums = Object.keys(question).length;

function start() {
  const start = document.querySelector(".start");
  const firstQuestion = document.querySelector(".question");
  start.classList.add("hide");
  firstQuestion.classList.remove("hide");
  next();
}

function next() {
  const questions = document.querySelector(".question");
  const result = document.querySelector(".result");
  const title = document.querySelector("#title");
  const type = document.querySelector("#type");
  const questionA = document.querySelector("#A");
  const questionB = document.querySelector("#B");
  const count = document.querySelector("#count");
  if (num === 13) {
    questions.classList.add("hide");
    result.classList.remove("hide");
  } else {
    title.innerHTML = question[num].title;
    type.value = question[num].type;
    questionA.innerHTML = question[num].A;
    questionB.innerHTML = question[num].B;
    count.innerHTML = `${num}/${questionNums}`;
    num++;
  }
}

const startBtn = document.querySelector(".btn");
const selectionA = document.querySelector("#A");
const selectionB = document.querySelector("#B");

startBtn.addEventListener("click", start);

selectionA.addEventListener("click", () => {
  const type = document.querySelector("#type");
  const prev = document.querySelector(`#${type.value}`);
  console.log(type.value);
  prev.value = parseInt(prev.value) + 1;
  console.log(prev.value);
  next();
});

selectionB.addEventListener("click", () => {
  next();
});
