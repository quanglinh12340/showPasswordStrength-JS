const pass = document.getElementById('password')
const msg = document.getElementById('message')
const str = document.getElementById('strenght')

pass.addEventListener('input', (e) => {
    const inputValue = e.target.value

    if (inputValue.length > 0) {
        msg.style.display = 'block'
    } else {
        msg.style.display = 'none'
    }
    if (inputValue.length < 4) {
        str.innerText = 'weak'
        pass.style.borderColor = '#ff5925'
        msg.style.color = '#ff5925'
    } else if (inputValue.length >= 4 && inputValue.length < 8) {
        str.innerText = 'medium'
        pass.style.borderColor = 'yellow'
        msg.style.color = 'yellow'
    } else if (inputValue.length >= 8) {
        str.innerText = 'strong'
        pass.style.borderColor = '#26d730'
        msg.style.color = '#26d730'
    }
})