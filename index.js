"use strict";
// >> tsc  <---- to make transpilation in index.js
// >> node index.js  <------ run the code
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
function getActions(btns) {
    console.log(`Action For Button Up Is ${btns.up}`);
    console.log(`Action For Button Right Is ${btns.right}`);
    console.log(`Action For Button Down Is ${btns.down}`);
    console.log(`Action For Button Left Is ${btns.left}`);
}
getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });
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
/*_____________________12 Data Types - Enums Part 1____________________*/
/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]


const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

enum Level {
  Kids = 15,
  Easy = 9,
  Medium = 6,
  Hard = 3
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
}
*/
/*_____________________End  Data Types - Enums Part 1____________________*/
/*_____________________11  Data Types - Enums Part 2____________________*/
/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/
function getHardSeconds() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 15] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = getHardSeconds()] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}
function getActionsTwo(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
getActionsTwo({ one: "String", two: 100, three: true, five: true });
/*_____________________End  Union And Intersection Types ____________________*/
/*_____________________14  Type Annotations With Object ____________________*/
let myObeject = {
    id: 1,
    userName: "anis",
    skills: {
        one: "React",
        two: "Next JS",
    }
};
/* update the object */
myObeject.id = 2;
myObeject.hire = false;
myObeject.skills.one = "TypeScript";
/* Display data */
console.log("Type Annotations With Object____________");
console.log(myObeject.id);
console.log(myObeject.userName);
console.log(myObeject.hire);
console.log(myObeject.skills.one);
let user = {
    id: 100,
    username: "Elzero",
    country: "Egypt"
};
user.country = "Syria";
console.log(user);
function getData(data) {
    console.log(`Id Is ${data.id}`);
    console.log(`Username Is ${data.username}`);
    console.log(`Country Is ${data.country}`);
}
getData({ id: 3, username: "Osama", country: "KSA" });
/*_____________________End   Interface Declaration ____________________*/ 
