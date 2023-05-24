const fechar = document.querySelector('.fa-solid.fa-xmark')
const modal = document.querySelector('.modal.active')
const modal_content = document.querySelector('.modal-content.active')
const btn_reservar = document.querySelector('.reservar')
const btn_hover = document.querySelector('.fa-solid.fa-bars')
const display_hover = document.querySelector('.display-hover')
const user_icon = document.querySelector('.fa-solid.fa-user')
const passwrd_icon = document.querySelector('.fa-solid.fa-lock')
const name_input = document.querySelector('.name-input')
const passwrd_input = document.querySelector('.passwrd-input')
const modal_login = document.querySelector('.modal-login')
const login_btn = document.querySelector('#login-btn')
const login_btn_modal = document.querySelector('.login-btn-modal')
const login_btn_hover = document.querySelector('.display-hover #login-btn')
const registre = document.querySelector('.registre')

name_input.onclick = function(){
    user_icon.classList.add('active')
}

login_btn.onclick = function(){
    modal_login.classList.add('active')
}

login_btn_hover.onclick = function(){
    modal_login.classList.add('active')
}

login_btn_modal.onclick = function(){
    modal_login.classList.remove('active')
    alert("Login Efetuado")
}

registre.onclick = function(){
    modal_login.classList.remove('active')
}

passwrd_input.onfocus = function(){
    passwrd_icon.classList.add('active')
}


fechar.onclick = function (){
    modal.classList.remove('active')
    modal_content.classList.remove('active')
}

btn_reservar.onclick= function (){
    modal.classList.remove('active')
    modal_content.classList.remove('active')
}

btn_hover.onclick= function(){
    display_hover.classList.toggle('active')
}

