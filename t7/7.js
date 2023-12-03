const a = document.querySelector('#trigger')
function change(){
  const b = document.querySelector('#target')
  b.src = 'img/picB.jpg'
  console.log(b.alt)
}
function back(){
  const c = document.querySelector('#target')
  c.src = 'img/picA.jpg'
}
a.addEventListener('mouseover', change)
a.addEventListener('mouseout', back)