document.querySelector('button').addEventListener('click', async () => {
    const response = await fetch(`/api/`)
    const data = await response.json()
    console.log(data)
    console.log('hello')
})