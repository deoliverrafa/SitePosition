const fechar = document.querySelector('.fa-solid.fa-xmark')
const modal = document.querySelector('.modal.active')
const modal_content = document.querySelector('.modal-content.active')
const btn_reservar = document.querySelector('.reservar')


fechar.onclick = function (){
    modal.classList.remove('active')
    modal_content.classList.remove('active')
}

btn_reservar.onclick= function (){
    modal.classList.remove('active')
    modal_content.classList.remove('active')
}