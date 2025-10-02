// split = finds the value defined in the split() of the string and returns the element in an array

const note = 'John James Johnny'

const note2 = note.split(' ')
console.log(note.length)
console.log(note)
console.log(note2)

// const you = note.splice(1,1)

// slice = copies from an element and then return


const message = 'Hello World';

const message2 = message.slice(1)

console.log(message2);

const message3 = message.slice(2, 5);

console.log(message3);
console.log(message);


// includes() finds if the element has what is defined in the includes() parameters

const message4 = 'Nice Job';

const findB = message4.includes('b')

console.log(findB)