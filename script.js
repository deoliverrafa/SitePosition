const fechar = document.querySelectorAll('.fa-solid.fa-xmark')
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
const modal_register = document.querySelector('.modal-register')
const input_register = document.querySelector('.modal-register .input-register .name-input')
const input_register_passwrd = document.querySelector('.modal-register .register .box-register .passwrd-input')
const go_out = document.querySelector('.logo')
const user_icon_register = document.querySelector('.modal-register .register .fa-solid.fa-user')
const padlock_icon_register = document.querySelector('.modal-register .register .fa-solid.fa-lock')
const btn_registrar_modal = document.querySelector('.registrar-btn-modal')
const home_hover = document.querySelector('.display-hover #home')
const sobre_hover = document.querySelector('.display-hover #sobre')
const quartos_hover = document.querySelector('.display-hover #quartos')
const section_offers = document.querySelector('.section-offers')
const email_input = document.querySelector('.modal-register .register .box-register .input-email .email-input')
const email_evelop = document.querySelector('.modal-register .register .box-register .input-email .fa-solid.fa-envelope')
const input_phone = document.querySelector('.modal-register .register .box-register .input-phone input')
const phone_icon = document.querySelector('.modal-register .register .box-register .input-phone .fa-solid.fa-phone')


go_out.onclick = function(){
    modal_content.classList.remove('active')
}

input_register_passwrd.onclick = function(){
    padlock_icon_register.classList.add('active')
}

input_register_passwrd.onfocus = function(){
    padlock_icon_register.classList.add('active')
}

btn_registrar_modal.onclick = function(){
    modal_register.classList.remove('active')
    alert('Registro Realizado com Sucesso!!!')
}

input_register.onclick = function(){
    user_icon_register.classList.add('active')
}

input_register.onfocus = function(){
    user_icon_register.classList.add('active')
}

name_input.onclick = function(){
    user_icon.classList.add('active')
}

login_btn.onclick = function(){
    modal_login.classList.add('active')
}

login_btn_hover.onclick = function(){
    modal_login.classList.add('active')
    display_hover.classList.remove('active')
}

login_btn_modal.onclick = function(){
    modal_login.classList.remove('active')
    alert("Login Efetuado")
}

registre.onclick = function(){
    modal_login.classList.remove('active')
    modal_register.classList.add('active')
}

passwrd_input.onfocus = function(){
    passwrd_icon.classList.add('active')
}

fechar[0].onclick = function (){
    modal_content.classList.remove('active')
}

fechar[1].onclick = function (){
    modal_login.classList.remove('active')
}

fechar[2].onclick = function (){
    modal_register.classList.remove('active')
}

btn_reservar.onclick= function (){
    modal_content.classList.remove('active')
}

btn_hover.onclick= function(){
    display_hover.classList.toggle('active')
}

home_hover.onclick= function (){
    display_hover.classList.remove('active')
}

sobre_hover.onclick= function (){
    display_hover.classList.remove('active')
}

quartos_hover.onclick= function (){
    display_hover.classList.remove('active')
}

email_input.onfocus = function (){
    email_evelop.classList.add('active')
}

input_phone.onfocus = function (){
    phone_icon.classList.add('active')
}






















