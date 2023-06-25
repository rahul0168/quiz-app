const questions = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: "4. all of the above",
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
      answer: "3. quotes",
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: "4. console.log",
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: "1. break",
    },
  ];

  let currentQuestion = 0;
let score = 0;
const resultContainer = document.getElementById("result");

const elem = document.getElementById("quiz-start");
const quizquestions = document.getElementById("quiz-questions");
const choicesContainer = document.getElementById("choices");
const scoreContainer = document.getElementById("score");
const HightestscoreList = document.getElementById("HightestscoreList");
const scoreboard = document.getElementById("scoreboard");
const box = document.getElementById("box");
box.style.display = "none";

function startQuiz() {
   
  box.style.display = "block";
    elem.style.display = "none";
    quizquestions.style.display = "block";

    const question = questions[currentQuestion];
    console.log(question.questionText);
    //quizquestions.textContent = question.questionText;
  
    
    // questions += "www.google.com";
    // questions += "sfsf.google";

    document.getElementById("quiz-questions").innerHTML = question.questionText;
    choicesContainer.innerHTML = "";

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.value = option;
      button.classList.add("options");
      console.log(button);
      button.addEventListener("click", checkAnswer);  
      choicesContainer.appendChild(button);
    })

  }

  // Check the selected answer
function checkAnswer(event) {
  const selectedAnswer = event.target.value;
  const question = questions[currentQuestion];

  if (selectedAnswer === question.answer) {
    score++;
    resultContainer.textContent = "Correct!";
  } else {
    resultContainer.textContent = "Wrong!";
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    startQuiz();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  quizquestions.style.display = "none";
  choicesContainer.style.display = "none";
  box.style.marginLeft="auto";
  box.style.marginRight="auto";
  box.style.width="29%";
  box.style.padding="20px";
  //submitButton.style.display = "none";
  resultContainer.textContent = "";
  scoreContainer.innerHTML ="<h1>All Done</h1>";
  scoreContainer.innerHTML += "<b>Your Final score: is " + score+'</b>';
  scoreContainer.innerHTML += '<br><input type="hidden" name="score" id="qscore" value="' + score + '"/> ';
  scoreContainer.innerHTML += 'Enter Initials: <input type="text" name="name" id="name"/> ';
  scoreContainer.innerHTML += '<input type="button" class="start-quiz" value="Submit" onclick="ScoreSave()"/> ';
 // scoreContainer.innerHTML += '<input type="button" class="start-quiz" value="Clear score" onclick="ClearScore()"/> ';
 // scoreContainer.innerHTML += '<input type="button" class="start-quiz" value="view score" onclick="ShowScore()"/> ';


  // Save the high score in localStorage
 
}

function ScoreSave() {
  scoreContainer.style.display = 'none';
  HightestscoreList.style.display = "block";

  const name = document.getElementById('name').value;
  const qscore = document.getElementById('qscore').value;
  console.log(qscore);

  // Retrieve existing records from localStorage
  var savedRecords = JSON.parse(localStorage.getItem("records")) || [];

  // Create a new record object
  var newRecord = {
    name: name,
    score: parseInt(qscore)
  };

  console.log(newRecord);

  // Add the new record to the savedRecords array
  savedRecords.push(newRecord);

  // Save the updated records back to localStorage
  localStorage.setItem("records", JSON.stringify(savedRecords));
  ShowScore();
  console.log(savedRecords);

  // Save the name and score individually
  // localStorage.setItem("name", name);
  // localStorage.setItem("score", score);
}


// var savedName = localStorage.getItem("name");
// var savedScore = parseInt(localStorage.getItem("score"));

// Use the retrieved values
function ShowScore(){
  quizquestions.style.display = "none";
  choicesContainer.style.display = "none";
  choicesContainer.style.display = "none";
  var savedRecords = JSON.parse(localStorage.getItem("records"));
  box.style.marginLeft="auto";
  box.style.marginRight="auto";
  box.style.width="26%";
  box.style.padding="20px";
//  console.log(savedRecords);
  // Use the retrieved records
  // const HSL = 
  HightestscoreList.innerHTML = "";
  HightestscoreList.innerHTML += "<h1>Highscore</h1>";

  var i = 0;
  if (savedRecords && savedRecords.length > 0) {
    i++;
    savedRecords.sort(function(a, b) {
      return b.score - a.score;
    });
    savedRecords.forEach(function(record, i) {
      HightestscoreList.innerHTML += (i + 1) + " " + record.name + " - " + record.score + "<br>";
    });

    HightestscoreList.innerHTML += '<br>';
    HightestscoreList.innerHTML += '<input type="button" class="start-quiz" value="Go Back" onclick="refresh()"/> ';
    HightestscoreList.innerHTML += '<input type="button" class="start-quiz" value="Clear score" onclick="ClearScore()"/> ';

  } else {
    HightestscoreList.innerHTML = "No scores found.";
  }

}

function ShowScore1(){
  quizquestions.style.display = "none";
  choicesContainer.style.display = "none";
  choicesContainer.style.display = "none";
  var savedRecords = JSON.parse(localStorage.getItem("records"));
  box.style.marginLeft="auto";
  box.style.marginRight="auto";
  box.style.width="50%";
  box.style.padding="20px";
//  console.log(savedRecords);
  // Use the retrieved records
  // const HSL = 
  HightestscoreList.innerHTML = "<h1>Score Board</h1>";
  var table = document.createElement("table");
  table.style.width = "100%";
  var thead = document.createElement("tr");
  var Hname = document.createElement("th");
  Hname.textContent = "Name";
  thead.appendChild(Hname);
  var Hscore = document.createElement("th");
  Hscore.textContent = "Score";
  thead.appendChild(Hscore);
  table.appendChild(thead);
  var tbody = document.createElement("tbody");
  
  if (savedRecords && savedRecords.length > 0) {
    savedRecords.forEach(function(record) {
      var row = document.createElement("tr");
  
      var nameCell = document.createElement("td");
      nameCell.textContent = record.name;
      row.appendChild(nameCell);
  
      var scoreCell = document.createElement("td");
      scoreCell.textContent = record.score;
      row.appendChild(scoreCell);
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    HightestscoreList.appendChild(table);
    HightestscoreList.innerHTML += '<input type="button" class="start-quiz" value="Go Back" onclick="refresh()"/> ';
    HightestscoreList.innerHTML += '<input type="button" class="start-quiz" value="Clear score" onclick="ClearScore()"/> ';

  } else {
    HightestscoreList.innerHTML = "No scores found.";
  }

}

function ClearScore(){
  localStorage.clear();

}

function refresh(){
location.reload();
}



  

