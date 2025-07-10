document.addEventListener('DOMContentLoaded', function () {
    const icon = document.querySelector('.burger__icon')
    const menu = document.querySelector('.burger__menu')
    const burger = document.querySelector('.burger')
    icon.addEventListener('click', () => {
        burger.classList.toggle('burger__visible')
    })

})