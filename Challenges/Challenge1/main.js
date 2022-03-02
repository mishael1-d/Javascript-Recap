// Get the values for the start and end numbers

var check = document.getElementById("check");
let numbers = [];

check.addEventListener("click", function submit() {
  var start = document.getElementById("start").value
  var end = document.getElementById("end").value;
  for (i = start; i <= end; i++) {
    numbers.push(i);
  }
  if (start >= end) {
    console.log("Start can not be greater");
  } else {
    numbers.map((number, index) => {
      if (number % 2 === 0) {
        console.log(number);
      } else {
        console.log("odd");
      }
    });
    start = ''
    end = ''
  }
});

console.log(start);
