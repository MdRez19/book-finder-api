document.querySelector('button').addEventListener('click',  async () => {
    const input = document.querySelector('input').value;
    const response = await fetch(`/api/${input}`)
    const data = await response.json()
    const h2 = document.querySelector('h2')
    h2.innerText = `Author: ${data.author}`
})

