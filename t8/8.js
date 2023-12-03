`use strict`
const a = document.querySelector('#start')
function click1() {
  let result1
  const b = document.querySelector('#operation')
  const c = document.querySelector('#num1')
  const d = document.querySelector('#num2')
  if (b.value === 'add') {
    result1 = parseInt(c.value) + parseInt(d.value)
  } else if (b.value === 'sub') {
    result1 = parseInt(c.value) - parseInt(d.value)
  } else if (b.value === 'div') {
    result1 = parseInt(c.value) / parseInt(d.value)
  } else {
    result1 = parseInt(c.value) * parseInt(d.value)
  }
  document.querySelector('#result').innerText = result1;
  console.log(result1)
}



a.addEventListener('click', click1)