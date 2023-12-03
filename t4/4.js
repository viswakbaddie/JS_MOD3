'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
for(let i of students){
  const a = document.querySelector("#target")
  const item =  document.createElement('option')
  item.setAttribute('value', i.id)
  item.innerText = i.name
  a.appendChild(item)



}
