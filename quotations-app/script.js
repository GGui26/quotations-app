const form = document.getElementById('form')
const authorName = document.getElementById('author-name')
const citation = document.getElementById('text')

function submitCitation(authorName,citation){
    addquote(authorName,citation)}

buttonSubmit.addEventListener('click',submitCitation)


function addquote(quote,author){}
const liste = document.getElementById('quote-list')
const newdiv =document.createElement('div')
newdiv.className = "quote"
liste.appendChild(newdiv)

const authorname =document.createElement('p')
author.classList.add ("author")
newdiv.appendChild(author)

const text =document.createElement('p')
text.classList.add ("text")
newdiv.appendChild(text)
newdiv.document.getElementById("text").textContent = quote
author.document.getElementById("text").textContent = author



