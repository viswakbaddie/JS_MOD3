'use strict';
const names = ['John', 'Paul', 'Jones'];
for(let i of names){
  const a = document.querySelector('#target')
  let item1 = document.createElement('li')
  item1.innerText = i
  a.appendChild(item1)

}