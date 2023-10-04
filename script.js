fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => display(data.content, data.author))
    .catch(err => console.log(err))

function display(quote, author) {
    let quot = document.querySelector(".quote")
    let auth = document.querySelector(".author")
    quot.innerText = `"${quote}"`
    auth.innerText = `-${author}`
}