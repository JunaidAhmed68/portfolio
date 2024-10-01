//-------------------------------------------------- time -------------------------------------------------
var hours = document.getElementById("hr");
var mins = document.getElementById("min");
var secs = document.getElementById("sec");
var pmAm = document.getElementById("PAm");
var days = document.getElementById("day");
var dN = document.getElementById("dayN");
var mN = document.getElementById("monN");
var yN = document.getElementById("yearN");

var zero1 = document.getElementById("zero1");
var zero2 = document.getElementById("zero2");
var zero3 = document.getElementById("zero3");

var b_bg = document.getElementById("body");

setInterval(() => {
  var time = new Date();
  // ----------------------------- time -----------------------------
  if (time.getHours() > 12) {
    hours.innerText = time.getHours() - 12;
  } else {
    hours.innerText = time.getHours();
  }
  // ----------------------------- backgroun imgs -----------------------------
  if (time.getHours() >= 20 || time.getHours() < 7) {
    b_bg.id = "body1";
  } else if (time.getHours() >= 7 && time.getHours() < 9) {
    b_bg.id = "body2";
  } else if (time.getHours() >= 9 && time.getHours() < 12) {
    b_bg.id = "body3";
  } else if (time.getHours() >= 12 && time.getHours() < 15) {
    b_bg.id = "body4";
  } else if (time.getHours() >= 15 && time.getHours() < 20) {
    b_bg.id = "body5";
  }
  // ----------------------------- for zero -----------------------------

  if (time.getHours() < 10 || (time.getHours() > 12 && time.getHours() < 22)) {
    zero1.innerText = "0";
  } else {
    zero1.innerText = " ";
  }
  if (time.getMinutes() < 10) {
    zero2.innerText = "0";
  } else {
    zero2.innerText = " ";
  }
  if (time.getSeconds() < 10) {
    zero3.innerText = "0";
  } else {
    zero3.innerText = " ";
  }

  // -----------------------------getMinutes and getSeconds  -----------------------------

  mins.innerText = time.getMinutes();
  secs.innerText = time.getSeconds();

  // ----------------------------- PM  and AM  -----------------------------

  if (time.getHours() >= 12) {
    pmAm.innerText = "PM";
  } else {
    pmAm.innerText = "AM";
  }
  // ----------------------------- dates -----------------------------
  var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days.innerText = weekdays[time.getDay()];
  var monthFull = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  dN.innerText = time.getDate();
  mN.innerText = monthFull[time.getMonth()];
  yN.innerText = time.getFullYear();
}, 1000);
