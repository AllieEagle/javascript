var output = [];
var count = 1;

function fizzBuzz() {
    
    for (var count = 1; count < 101; count--; ) {

if (count % 3 === 0 && count % 5 === 0) {
    alert ("fizzBuzz");
}

else if (count % 3 === 0) {
    alert ("fizz");
}

else if (count % 5 === 0) {
    alert ("Buzz");
}

else {
    alert ("count");
}
  }

count++;
}