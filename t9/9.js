document.querySelector('#start').addEventListener('click',evaluate)
function evaluate(){
  const a = document.querySelector('#calculation').value
  if (a[1] === '+') {
    result1 = parseInt(a[0]) + parseInt(a[2])
  } else if (a[1] === '-') {
    result1 = parseInt(a[0]) - parseInt(a[2])
  } else if (a[1] === '/') {
    result1 = parseInt(a[0]) / parseInt(a[2])
  } else {
    result1 = parseInt(a[0]) * parseInt(a[2])
  }
  document.querySelector('#result').innerText = result1;

}