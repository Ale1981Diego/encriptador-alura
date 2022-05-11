/* Referimos los elementos html */
const textarea = document.querySelector('#texto'); // ingreso de texto principal
const encriptar = document.querySelector('#encriptar'); // boton encriptar
const desencriptar = document.querySelector('#desencriptar'); // boton desencriptar
const copiar = document.querySelector('#copiar'); // boton copiar
const textoEncriptado = document.querySelector('#parrafo-pantalla'); // pantalla de texto modificado
const parrafoUno = document.querySelector('#aside-parrafo'); // parrafo "Ningún mensaje fue encontrado."
const parrafoDos = document.querySelector('#aside-parrafo-dos'); // segundo parrafo "ingresa el texto que desees encriptar o desencriptar."
const imagenAside = document.querySelector('#aside-imagen');

/* Expresiones regulares */
const $a = new RegExp ('ai', 'g');
const $e = new RegExp ('enter', 'g');
const $i = new RegExp ('imes', 'g');
const $o = new RegExp ('ober', 'g');
const $u = new RegExp ('ufat', 'g');


let newText = '';
let textoCopiado = '';

/* Funciones */

encriptar.addEventListener('click', ()=> {
    codificar(textarea.value);
    parrafoUno.classList.add('display-none');
    parrafoDos.classList.add('display-none');
    imagenAside.classList.add('display-none');
    copiar.parentNode.classList.remove('display-none');
    textoEncriptado.classList.remove('display-none');
    textoEncriptado.value = newText;
    textarea.value = '';
    newText = '';
});

desencriptar.addEventListener('click', ()=> {
    valor = textarea.value.toLowerCase();

    newText = valor.replace(/ai/g, 'a');
    newText = newText.replace(/enter/g,'e');
    newText = newText.replace(/imes/g,'i');
    newText = newText.replace(/ober/g,'o');
    newText = newText.replace(/ufat/g,'u');

    parrafoUno.classList.add('display-none');
    parrafoDos.classList.add('display-none');
    imagenAside.classList.add('display-none');
    copiar.parentNode.classList.remove('display-none');
    textoEncriptado.classList.remove('display-none');
    textoEncriptado.value = newText;
    textarea.value = '';
    newText = '';
});

copiar.addEventListener('click', ()=>{
    textarea.value = textoEncriptado.value;
    parrafoUno.classList.remove('display-none');
    parrafoDos.classList.remove('display-none');
    imagenAside.classList.remove('display-none');
    copiar.parentNode.classList.add('display-none');
    textoEncriptado.classList.add('display-none');
    textoEncriptado.value = '';
    newText = '';
});

const codificar = (valor) => {
    for (let c of valor){
        if (c == 'a')
        {
            c = 'ai';
            newText += c;
        } else if (c == 'e')
        {
            c = 'enter';
            newText += c;
        } else if (c == 'i')
        {
            c = 'imes';
            newText += c;
        } else if (c == 'o')
        {
            c = 'ober';
            newText += c;
        } else if (c == 'u')
        {
            c = 'ufat';
            newText += c;
        } else {
            newText += c;
        }
    }
}