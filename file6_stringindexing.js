// string indexing and Methods

let firstName="Ahmad "

// A h m a d
// 0 1 2 3 4

console.log(firstName[3]);
console.log(firstName.length)

console.log(firstName.length)
//last index
console.log(firstName[firstName.length-1]);

//Methods
//trim
let secondName=" Ali ";
console.log(secondName)
console.log(secondName.length)
secondName=secondName.trim();
console.log(secondName)
console.log(secondName.length)

//Upper case
secondName=secondName.toUpperCase()//String immutable  On
console.log(secondName)

//Lower Case
secondName=secondName.toLowerCase()
console.log(secondName)

//Slice Method
//start index
//end index

let newstring=firstName.slice(0,4)//Ahma
console.log(newstring)
newstring=firstName.slice(1)// Print all word from start to end
console.log(firstName)

//type of operators (Tell me the data type)

//Data Types
//string "Ahmad"
//number 2,4,5.6
//boolean            //All these data Types are called premitive data types
//null
//undefined
//Symbol
//BigInt

let age=22;
let name="Ahmad"
console.log(typeof age) //Tell the data type is number
console.log(typeof name)// Tell the data type is string

//Convert Number to string
//22->"22"
age=age+"";
console.log(typeof age)
//Another Method
let age2=34;
age2=String(age2)
console.log(age2);

//Convert String to Number
//Add '+' operator before the start of string
let mystr="34"
console.log(typeof mystr);//Before Change
mystr=+"34";
console.log(typeof mystr)//After Change
//Another Method
let age3="35"
age3=Number(age3)
console.log( typeof age3)

// String Concatenation
let string1="34"
let string2="64"
let fullName=string1+" "+string2;// Output 34 64
console.log(fullName)
fullName=+string1 + +string2;// Output 98
console.log(fullName)

//template String
name="Ahmad"
age=19;
let aboutMe=`My name is ${name} and my age is ${age}`
console.log(aboutMe)

//Undefined Data Type
let thirdName;
console.log( typeof thirdName)//Give undefined same as we done with var But not with const we have to give value

//Null DataType
let fourthName=null;
console.log(fourthName);
console.log(typeof fourthName)//Give object if we check type as it has to null but there is a bug or error at javascipt at this point

//BigInt
//In javascipt number has limit so to overcome the limit we use bigInt 
let myNumber=BigInt(22);//BigInt
let sameMyNumber=123n//Same as BigINT if we use n
let otherNumber=123;
let result=myNumber+sameMyNumber//Cannot use with other data Type give error
console.log(result)//Output 145n
result=myNumber+otherNumber
console.log(result)//Give error because BigInt does not support other data types



