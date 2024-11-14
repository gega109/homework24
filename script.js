let textOfDays = document.getElementById("day_time");
let textOfhours = document.getElementById("hours_time");
let textOfminutes = document.getElementById("minutes_time");
let textOfseconds = document.getElementById("second_time");
let day = prompt("write daytime");
let hour = prompt("write hours");
let minute = prompt("write minutes");
let second = prompt("write second");
textOfDays.textContent = day;
textOfhours.textContent = hour;
textOfminutes.textContent = minute;
textOfseconds.textContent = second;

// if (day !== null && !day.includes("")) {
//   textOfDays.textContent = day;
// } else {
//   alert("ტექსტი არ შეიძლება შეიცავდეს 'სთრინგს'-ს!");
//   textOfDays.textContent != day;
// }

// if (hour !== null && !hour.includes("")) {
//   textOfhours.textContent = hour;
// } else {
//   alert("ტექსტი არ შეიძლება შეიცავდეს 'სთრინგს'-ს!");
//   textOfhours.textContent = hour;
// }

// if (minute !== null && !minute.includes("")) {
//   textOfminutes.textContent = minute;
// } else {
//   alert("ტექსტი არ შეიძლება შეიცავდეს 'სთრინგს'-ს!");
//   textOfminutes.textContent = minute;
// }

// if (second !== null && !second.includes("")) {
//   textOfseconds.textContent = second;
// } else {
//   alert("ტექსტი არ შეიძლება შეიცავდეს 'სთრინგს'-ს!");
//   textOfseconds.textContent = second;
// }

let interval = setInterval(() => {
  if (second > 0 && second < 60) {
    document.getElementById("second_time").innerHTML = second;
  }
  if (second >= 0 && second < 10) {
    document.getElementById("second_time").innerHTML = "0" + second;
  }
  if (minute > 0 && minute < 60 && second < 0) {
    document.getElementById("minutes_time").innerHTML = minute;
    document.getElementById("second_time").innerHTML = second = 59;
    document.getElementById("minutes_time").innerHTML = minute - 1;
  }
  second--;
}, 1000);
