document.querySelector('.inp').value = 'dsdsdsd'

document.querySelector('.btn').addEventListener('click', function() {
    const inputValue = document.querySelector('.inp').value
    if (!inputValue) {
        return
    }
    document.querySelector('.span').innerText = inputValue
    document.querySelector('.inp').value = ''
})

console.log(document.getElementById('123'))