const buttonSubmit = document.getElementById('submit-button')
const authorName = document.getElementById('author-name')
const citation = document.getElementById('text')


buttonSubmit.addEventListener('click',submit)

function submit(authorName,citation){
    console.log (authorName,citation)}