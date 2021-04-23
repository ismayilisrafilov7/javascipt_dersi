
var isStudent = false;

var x = 5;
var y = 2;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// for (var i = 0; i < 10; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }

var students = [
    {
        id: "1",
        name: "Seymur",
        age: 45
    },
    {
        id: "2",
        name: "Cemil",
        age: 35
    },
    {
        id: "3",
        name: "Senay",
        age: 25
    },
    {
        id: "4",
        name: "Emil",
        age: 25
    }
]

// for (var i = 0; i < 10; i++) {
//     if(i == 6) {
//         continue;
//     }
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }

// Operators
// +
// -
// *
// /
// %
// **

// Math.pow(5, 2);
// 5**2;

var isPersonFound = false;


var result = 0;

do {
    input = prompt("Eded daxil edin: ");
    // result += parseInt("15.7", 10);
    // result += parseFloat(input);
    result += +input;
    if(input == 0) {
        break;
    }
} while(true)

alert(result);

var test = "test";