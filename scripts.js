const icon1 = document.querySelectorAll(".fa-chevron-down")
const icon2 = document.querySelectorAll(".fa-circle-xmark")
const box = document.querySelectorAll(".box")
const text = document.querySelectorAll(".text p")
for(let i = 0; i < icon1.length; i++) {
    icon1[i].addEventListener('click', () => {
        icon2[i].classList.toggle('toggle')
        icon1[i].classList.toggle('toggle')
        box[i].classList.toggle('active')
        text[i].classList.toggle('show')
    })
}
for(let i = 0; i < icon1.length; i++) {
    icon2[i].addEventListener('click', () => {
        icon2[i].classList.toggle('toggle')
        icon1[i].classList.toggle('toggle')
        box[i].classList.toggle('active')
        text[i].classList.toggle('show')
    })
}