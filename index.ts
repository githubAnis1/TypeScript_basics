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

let arrayOne :(string|number|string[]|boolean|boolean[])[] = ["A",2,["C","D"],true,false,[false,true]]

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
  */


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

let article: readonly [number, string, boolean] 

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

function getHardSeconds() : number {
    return 3;
  }
  
  enum Kids {
    Five = 25,
    Seven = 20,
    Ten = 15
  }
  
  enum Level {
    Kid = Kids.Ten,
    Easy = 9,
    Medium = Easy - 3,
    Hard = getHardSeconds()
  }
  
  let lvl: string = "Easy";
  
  if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
  }
/*_____________________End   Data Types - Enums Part 2____________________*/

/*_____________________12  Data Types - Type Assertions____________________*/
/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

/* let myImg = document.getElementById("my-img") as HTMLImageElement;
let myImg = <HTMLImageElement> document.getElementById("my-img");
console.log(myImg.src);

let data: any = 1000;
console.log((data as string).repeat(3)); */

/*_____________________End  Data Types - Type Assertions____________________*/

/*_____________________13  Union And Intersection Types ____________________*/
/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

type A = {
    one: string,
    two: number,
    three: boolean
  }
  
  type B = A & {
    four: number
  }
  
  type C = {
    five: boolean
  }
  
  type mix = A & C;
  
  function getActionsTwo(btns: mix) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
  }
  
  getActionsTwo({ one: "String", two: 100, three: true, five: true });

/*_____________________End  Union And Intersection Types ____________________*/

/*_____________________14  Type Annotations With Object ____________________*/

let myObeject : {
    id: number,
    readonly userName: string,
    hire?: boolean,
    skills: {
        one:string;
        two:string;
    }
} = {
    id: 1,
    userName: "anis",
    skills: {
        one: "React",
        two: "Next JS",
    }
} 
/* update the object */
myObeject.id = 2;
myObeject.hire = false;
myObeject.skills.one = "TypeScript";

/* Display data */

console.log("Type Annotations With Object____________");
console.log(myObeject.id )
console.log(myObeject.userName )
console.log(myObeject.hire )
console.log(myObeject.skills.one )

/*_____________________End  Type Annotations With Object ____________________*/


/*_____________________15   Interface Declaration ____________________*/

/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator


interface User {
    id?: number,
    readonly username: string,
    country: string
  }
  
  let user: User = {
    id: 100,
    username: "Elzero",
    country: "Egypt"
  }
  
  user.country = "Syria";
  
  console.log(user);
  
  function getData(data: User) {
    console.log(`Id Is ${data.id}`);
    console.log(`Username Is ${data.username}`);
    console.log(`Country Is ${data.country}`);
  }
  
  getData({id:3 , username: "Osama", country: "KSA" });
  */

/*_____________________End   Interface Declaration ____________________*/


/*_____________________15 Interface Method And Parameters____________________*/

/*
  Interface
  - Interface Method And Parameters


interface User {
    id: number;
    username: string;
    country: string;
    sayHello() : string;
    sayWelcome: () => string;
    getDouble(num: number) : number;
  }
  
  let user: User = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    sayHello() {
      return `Hello ${this.username}`;
    },
    sayWelcome: () => {
      return `Welcome ${user.username}`;
    },
    getDouble(n) {
      return n * 2;
    }
  }
  
  console.log(user.id);
  console.log(user.sayHello());
  console.log(user.sayWelcome());
  console.log(user.getDouble(100));
  */
/*_____________________End Interface Method And Parameters____________________*/

/*_____________________16 Interface Reopen And Use Cases____________________*/
/*
  Interface
  - ReOpen The Interface And Use Cases


// Homepage
interface Settings {
    readonly theme: boolean;
    font: string;
  }
  
  // Articles Page
  interface Settings {
    sidebar: boolean;
  }
  
  // Contact Page
  interface Settings {
    external: boolean;
  }
  
  let userSettings: Settings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
  }
*/

/*_____________________End Interface Reopen And Use Cases____________________*/


/*_____________________17 Interface Extend ____________________*/
/*
  Interface
  - Extending Interfaces


interface User {
    id: number;
    username: string;
    country: string;
  }
  
  interface Moderator {
    role: string | number;
  }
  
  interface Admin extends User,Moderator {
    protect?: boolean;
  }
  
  let user: Admin = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    role: "Mod",
    protect: true
  }

  
  console.log(user.id);
  */
  /*_____________________End Interface Extend ____________________*/

  /*_____________________18 Class Type Annotations ____________________*/
  /*
  Type Annotations With Class


class User {
  u: string;
  s: number;
  msg: () => string;
  constructor(username: string, salary: number) {
    this.u = username;
    this.s = salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
  }
  sayMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User("Elzero", 6000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());
*/

  /*_____________________End Class Type Annotations ____________________*/

  /*_____________________19  Class Access Modifiers And Parameters Properties ____________________*/

  /*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

class User {
  msg: () => string;
  constructor(private username: string, protected salary: number,public readonly address: string) {
    this.msg = function () {
      return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this.username} Your Salary Is ${this.salary}`;
  }
}

let userOne = new User("Elzero", 6000, "Cairo");

// console.log(userOne.username);
// console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());

  /*_____________________End  Class Access Modifiers And Parameters Properties ____________________*/
