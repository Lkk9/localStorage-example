const
 btnAdd = document.getElementById('btn1'),
 btnSub = document.getElementById('btn2'),
 val = document.getElementById('val1')

if(isNaN(localStorage.getItem('value'))) localStorage.setItem('value', 0)

setInterval(() => {
  val.innerHTML = localStorage.getItem('value')
})

btnAdd.addEventListener('click', () => {
  localStorage.setItem('value', +localStorage.getItem('value') + 1)
})
btnSub.addEventListener('click', () => {
  localStorage.setItem('value', (() => {
    const nextVal = +localStorage.getItem('value') - 1
    return nextVal >= 0 ? nextVal : 0
  })())
})
