// ---------------------------> getting elements from HTML <----------------------------------------------------------

var mainDiv = document.getElementById("table");
var Name = document.getElementById("Name");
var rollNo = document.getElementById("rollNo");
var Percentage = document.getElementById("percentage");
var Grade = document.getElementById("grade");
var ObtaiM = document.getElementById("obtaiM");
var TotalM = document.getElementById("totalM");
var Scholarship = document.getElementById("scholarship");
var Row1 = document.getElementById("row1");
var Row2 = document.getElementById("row2");
var Row3 = document.getElementById("row3");
var Row4 = document.getElementById("row4");
var Row5 = document.getElementById("row5");

// ----------------------------------------> functions <----------------------------------------------------------

function getPercntage(obt, totalM) {
  return (obt / totalM) * 100;
}
function getGrade(percentage) {
  if (percentage >= 90) {
    return "A";
  } else if (percentage >= 80 && percentage < 90) {
    return "B";
  } else if (percentage >= 70 && percentage < 80) {
    return "C";
  } else if (percentage >= 60 && percentage < 70) {
    return "D";
  } else {
    return "Fail";
  }
}
function getScholarship(grade) {
  if (grade == "A") {
    Scholarship.setAttribute("class", "goodColor");
    return "Congratulations! you got fully funded scholarship program";
  } else if (grade == "B") {
    Scholarship.setAttribute("class", "goodColor");
    return "Congratulations! you got 60% funded scholarship program";
  } else if (grade == "c") {
    Scholarship.setAttribute("class", "goodColor");
    return "Congratulations! you got 20% funded scholarship program";
  } else {
    Scholarship.setAttribute("class", "badColor");
    return "Sorry! you are not eligible for scholarship program";
  }
}

// --------------------------->variables ,arrays and inputs <----------------------------------------------------------

var rows = [Row1, Row2, Row3, Row4, Row5];
var stName = prompt("Enter your name: ");
var stRoll_number = prompt("Enter your roll number: ");
var totalMarks = prompt("Enter total marks of your all subjects: ");
totalMarks = Number(totalMarks);
var perSubTotalM = totalMarks / 5;
var subjectNames = ["Phsics", "Chemistry", "Urdu", "Enlish", "Math"];
var subjectMarks = [];
var obtMarks = 0;
var status;

// --------------------------->loops <----------------------------------------------------------

for (var i = 0; i < subjectNames.length; i++) {
  var subjectM = prompt("Enter your " + subjectNames[i] + " subject marks: ");
  subjectM = Number(subjectM);
  subjectMarks.unshift(subjectM);
  obtMarks += subjectM;
}

for (var i = 0; i < subjectNames.length; i++) {
  var col1 = document.createElement("td");
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");
  var col4 = document.createElement("td");

  var percentage = getPercntage(subjectMarks[i], perSubTotalM);
  if (percentage >= 50) {
    ststus = "Pass";
    col4.setAttribute("class", "green");
  } else {
    ststus = "Fail";
    col4.setAttribute("class", "red");
  }

  col1.innerText = subjectNames[i];
  col2.innerText = subjectMarks[i];
  col3.innerText = perSubTotalM;
  col4.innerText = ststus;

  rows[i].appendChild(col1);
  rows[i].appendChild(col2);
  rows[i].appendChild(col3);
  rows[i].appendChild(col4);

  col1.setAttribute("class", "creamColor");
  col2.setAttribute("class", "blue");
  col3.setAttribute("class", "blue");
}

// --------------------------->values ,inner texts and style <----------------------------------------------------------

var percentage = getPercntage(obtMarks, totalMarks);
var grade = getGrade(percentage);
var scholarship = getScholarship(grade);

Name.innerText = stName;
rollNo.innerText = stRoll_number;
Percentage.innerText = percentage + "%";
Grade.innerText = grade;
ObtaiM.innerText = obtMarks;
totalM.innerText = totalMarks;
Scholarship.innerText = scholarship;

if (grade != "Fail") {
  Grade.setAttribute("class", "green");
} else {
  Grade.setAttribute("class", "red");
}
