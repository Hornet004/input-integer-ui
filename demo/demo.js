const input_interger = require('input-integer_01')

const opts1 = {min: 1, max: 150}
const opts2 = {min: 1872, max: 2022}

const input1 = input_interger(opts1)
const input2 = input_interger(opts2)

const title = `My demo form`
const subTitle = `Please feel out the form` 

const page = document.createElement('div')
page.innerHTML =`
<h1> ${title}</h1>
<h2> ${subTitle}</h1>
<h3> Enter year Age</h3>
<x></x>
<h3> Enter year of birth</h3>
<y></y>

`
page.querySelector('x').replaceWith(input1)
page.querySelector('y').replaceWith(input2)




document.body.append(page)
