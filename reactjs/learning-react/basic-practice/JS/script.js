// elemets are creted using js 

// var h1  = document.createElement('h1')
// // console.log(h1)

// h1.innerHTML = 'Hello this is Js'

// console.log(h1)

// document.body.appendChild(h1)

import a from './app.js'
import {name} from './app.js'
import skills from './skills.js'
import {nameString , age} from './skills.js'
console.log(a) //Uncaught ReferenceError: a is not defined -> beacsue a form another cllas


 
console.log(name);

console.log(skills);
console.log(age ,  nameString);