// Get the values for the start and end numbers
// var start = document.getElementById("start").value;
// var end = document.getElementById("end").value;
// var check = document.getElementById("check");

let start = 02;
let end = 24;
let numbers = [];
for (i = start; i <= end; i++) {
  numbers.push(i);
}
if (start >= end) {
  console.log("Start can not be greater");
} else {
  numbers.map((number, index) => {
    if (number % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  });
}
