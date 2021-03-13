function saludar(){
    window.alert('Hola Mundo!');
}

var botoncito = document.querySelector('#boton');

botoncito.addEventListener('click', () =>{
    saludar();
});