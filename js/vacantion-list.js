

document.addEventListener('DOMContentLoaded', function () {
    const out = document.querySelector('.out')
    function addVac() {
        fetch('https://jobs.dou.ua/companies/honeytech/vacancies/export/')
            .then(data => data.json())
            .then(data => listAs(data));
    }
    addVac()
    function listAs(data) {
        console.log(data);

        data.map(item => {
            out.append(createItem(item))
        })

    }
    function createItem(data) {
        const div = document.createElement('div')
        div.classList.add('list__item')
        div.addEventListener('click', () => {
            main.classList.toggle('list__main--active')
            img.classList.toggle('list__img--active')
        })

        const header = document.createElement('div')
        header.classList.add('list__header')

        const button = document.createElement('button')
        button.classList.add('list__button')
        button.innerHTML = 'Send CV 🚀'
        button.addEventListener('click', () => {
            const modal = document.querySelector('.modal-form')
            modal.classList.add('modalForm-visible')
        })

        const main = document.createElement('div')
        main.classList.add('list__main')


        const mainWrap = document.createElement('div')
        mainWrap.classList.add('list__main-wrap')


        const mainDescription = document.createElement('div')

        mainDescription.innerHTML = data.description

        const buttonGroup = document.createElement('div')
        buttonGroup.classList.add('list__buttons')


        const headerRow = document.createElement('div')
        headerRow.classList.add('list__header-row')

        const link = document.createElement('a')
        link.classList.add('list__link')
        link.href = data.link
        link.target = '_blank'


        const title = document.createElement('h4')
        title.classList.add('list__title')
        title.innerHTML = data.title

        const subTitle = document.createElement('p')
        subTitle.classList.add('list__sub-title')
        subTitle.innerHTML = data.location

        const shorttitle = document.createElement('p')
        shorttitle.classList.add('list__short-title')
        shorttitle.innerHTML = data.category

        const img = document.createElement('img')
        img.classList.add('list__img')
        img.src = ' ./framerusercontent.com//images/download.svg'
        img.alt = 'icon'
        img.width = '40'
        img.height = '40'

        headerRow.append(shorttitle, title, subTitle)

        buttonGroup.append(button)
        mainWrap.append(buttonGroup, mainDescription)
        main.append(mainWrap)
        header.append(headerRow, img)

        div.append(header, main)
        return div

    }

});

