const input_interger = require('..')

const input1 = input_interger()
const input2 = input_interger()

const title = `My demo form`
const subTitle = `Please feel out the form` 

const page = document.createElement('div')
page.innerHTML =`
<h1> ${title}</h1>
<h2> ${subTitle}</h1>
<x></x>
<h3> Enter year of birth</h3>
<y></y>

`
page.querySelector('x').replaceWith(input1)
page.querySelector('y').replaceWith(input2)




document.body.append(page)
