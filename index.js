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
  const questionDesc = document.querySelector("#question-desc");
  const result = document.querySelector(".result");
  const title = document.querySelector("#title");
  const type = document.querySelector("#type");
  const questionA = document.querySelector("#A");
  const questionB = document.querySelector("#B");
  const count = document.querySelector("#count");

  if (num === 13) {
    const EI = document.querySelector("#EI");
    const SN = document.querySelector("#SN");
    const TF = document.querySelector("#TF");
    const JP = document.querySelector("#JP");
    const profile = result.querySelector("#profile");
    const member = result.querySelector("#member");
    const description = result.querySelector("#description");
    let mbtiResult = "";

    questions.classList.add("hide");
    result.classList.remove("hide");

    EI.value > 2 ? (mbtiResult += "E") : (mbtiResult += "I");
    SN.value > 2 ? (mbtiResult += "S") : (mbtiResult += "N");
    TF.value > 2 ? (mbtiResult += "T") : (mbtiResult += "F");
    JP.value > 2 ? (mbtiResult += "J") : (mbtiResult += "P");

    alert(mbtiResult);

    profile.src = mbti[mbtiResult].imgSrc;
    member.innerHTML = mbti[mbtiResult].name;
    description.innerHTML = mbti[mbtiResult].description;
  } else {
    title.innerHTML = question[num].title;
    type.value = question[num].type;
    questionDesc.innerHTML = question[num].question;
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
  prev.value = parseInt(prev.value) + 1;
  next();
});

selectionB.addEventListener("click", () => {
  next();
});
