"use strict";
/*_____________________1 Statically vs Dynamically Typed Languages ____________________*/
/*
Statically Typed Language Like [Rust, C, C++]
- Variables Types Are Static, Once You Declare It You Cannot Change
- Type Of A Variable Is Known At Compile Time "Do Type Checking At Compile-Time"
--- Have Better Performance At Run-Time Due To Not Needing To Check Types Dynamically
- Error Detected Earlier

Dynamically Typed Language Like [PHP, Python, JavaScript]
- Variables Types Are Dynamic, You Can Always Change It
- "Type Checking At Execution-Time"
- Error Can Be Detected After Execution
*/
/*_____________________End Statically vs Dynamically Typed Languages ____________________*/
/*_____________________2 Type Annotations And Any Type ____________________*/
/*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.

  - Why We Use It ?
  - Is It Mandatory ?
  - What Happen If We Didnt Use It ?
*/
/*_____________________End Type Annotations And Any Type ____________________*/
/*_____________________3 Type Annotations With Arrays ____________________*/
/*
let all: string | number | boolean = "Osama";

all = "A";
all = 100;
all = true;

let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}
*/
/*_____________________End Type Annotations With Arrays ____________________*/
/*_____________________4 Type Annotations With Multidimensional Arrays ____________________*/
let arrayOne = ["A", 2, ["C", "D"], true, false, [false, true]];
/*_____________________End Type Annotations With Multidimensional Arrays ____________________*/
/*_____________________5  Type Annotations With Function ____________________*/
/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.


let showMsg = true;

function showDetails(name: string, age: number, salary: number): string  {
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, Age Is ${age}, Salary Is ${"s"},`;
  }
  return `No Data To Show`;
}

console.log(showDetails("Osama", 40, 5000));
*/
/*_____________________End  Type Annotations With Function ____________________*/
/*_____________________6  Function Optional and Default Parameters ____________________*/
/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You didn't Use It
  - "?" Optional Parameter
  - op param must oredered before required param in a func


function showData(name?: string, age?: number, country?: string) {
    return `${name} - ${age} - ${country}`;
  }
  
  console.log(showData("Osama", 40, "Egypt"));
  
*/
/*_____________________End  Function Optional and Default Parameters ____________________*/
/*_____________________7  Function Rest Parameter____________________*/
/* const summation = (...nums: number[]): number => {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i]
    }
    nums.map((num)=> result += num)

    return result
}
console.log(summation(10,20,30,40,+true));

1.>> tsc //compile the file
2.>> node /index.js */
/*_____________________End  Function Rest Parameter____________________*/
/*_____________________8  Data Types - Type Alias____________________*/
/*
  Data Types
  - Type Alias


type st = string;
let theName: st = "Elzero";
theName = "Osama";

type standnum = string | number;
let all: standnum = 10;
all = 100;
all = "Osama";

*/
/*_____________________End   Data Types - Type Alias____________________*/
/*_____________________9  Data Types - Type Alias Advanced____________________*/
/*
  Data Types
  - Advanced Type Alias


type Buttons = {
    up: string,
    right: string,
    down: string,
    left: string
  }
  
  type Last = Buttons & {
    x: boolean
  }
  
  function getActions(btns: Last) {
    console.log(`Action For Button Up Is ${btns.up}`);
    console.log(`Action For Button Right Is ${btns.right}`);
    console.log(`Action For Button Down Is ${btns.down}`);
    console.log(`Action For Button Left Is ${btns.left}`);
  }
  
  getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });
*/
/*_____________________End   Data Types - Type Alias Advanced____________________*/
/*_____________________10  Data Types - Literal Types____________________*/
/*
  Data Types
  - Literal Types


type nums = 0 | 1 | -1;

function compare(num1: number, num2: number) : nums {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1

let myNumber: nums = 1;

*/
/*_____________________End   Data Types - Literal Types____________________*/
/*_____________________11  Data Types - Tuple____________________*/
/*
  Data Types
  - Tuple
  --- Is Another Sort Of Array Type
  --- We knows Exactly How Many Elements It Contains
  --- We Knows Which Types It Contains At Specific Positions
*/
let article;
article = [12, "Title Two", false];
// article.push(100);
console.log(article);
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
/*_____________________End   Data Types - Tuple____________________*/ 