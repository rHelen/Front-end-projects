/*
Linguagem tipo Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')
let senha = document.querySelector('#senha')
let confirmarSenha = document.querySelector('#confirmarSenha')
let numero = document.querySelector('#numero')

nome.style.width= '100%'
email.style.width= '100%'
senha.style.width= '100%'
confirmarSenha.style.width= '100%'
numero.style.width= '100%'

function validaNome(){
    if (nome.value.length < 3) {
        alert('nome invalido')
    }
}

