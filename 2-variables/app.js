// Variables: let || const || var (legacy)


// 1. let
let isDark = false; // can be changed
isDark = true; // changed from false to true
console.log(isDark);

// 2. const

const firstName = 'John'; // cannot be changed or reassigned
// firstName = 'John'; // will get an error
console.log(firstName);

// 3. var

var lastName = 'John'; // can be reassigned and changed
lastName = 'Doe';
console.log(lastName);


// Valid and Invalid Variable Names

// const 2ndName = 'John'; // invalid because it starts with a number
// const first%Name= 'John'; // invalid because it contains special characters
// const first-name = 'John'; //invalid because it contains a hyphen
const first_name = 'John'; // is Valid
const _firstName = 'John'; // is Valid
const $firstName = 'John'; // is Valid


// variables are case sensitive
const name = 'John';
// is different from
const Name = 'John';
// and different from
const nAme = 'John';