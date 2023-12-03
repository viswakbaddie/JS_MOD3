let a = document.querySelector('#target')
const item1 = document.createElement('li')
const item2 = document.createElement('li')
const item3 = document.createElement('li')
item1.innerText = 'first element'
item2.innerText = 'second element'
item3.innerText = 'third element'
a.appendChild(item1)
a.appendChild(item2)
a.appendChild(item3)