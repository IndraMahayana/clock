setInterval(setClock, 1000)

const hour = document.querySelector('[hour]')
const minute = document.querySelector('[minute]')
const second = document.querySelector('[second]')


function  setClock() {
    const currentDate = new Date()
    const seconds = currentDate.getSeconds() / 60
    const minutes = (seconds + currentDate.getMinutes()) / 60
    const hours = (minutes + currentDate.getHours()) / 12

    setRotation(hour, hours)
    setRotation(minute, minutes)
    setRotation(second, seconds)
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation', rotation * 360)
}

setClock()