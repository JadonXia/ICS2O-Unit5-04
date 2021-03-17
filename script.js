//  The series of scripts below will link the button actions to JavaScript.
document.getElementById('change-image').addEventListener('click', changeimg)
document.getElementById('change-text').addEventListener('click', changetxt)
document.getElementById('hide-text').addEventListener('click', hidetxt)
document.getElementById('show-text').addEventListener('click', showtxt)
document.getElementById('change-background').addEventListener('click', changebg)

function changeimg () {
  document.getElementById('img1').src = './images/frown.jpg'
}

function changetxt () {
  document.getElementById('txt1').innerHTML = 'Ta-dah!'
}

function hidetxt () {
  document.getElementById('txt1').style.display = 'none'
}

function showtxt () {
  document.getElementById('txt1').style.display = 'block'
}

function changebg () {
  document.body.style.backgroundColor = 'fuchsia'
}
