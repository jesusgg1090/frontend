const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarMenu();
    cerrarMenu();
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
          navegacion.classList.toggle('ocultar');
    });
}

function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{

            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function () {
        const info = this.previousElementSibling; // Selecciona .info
        info.classList.toggle('show'); // Alterna la clase "show"
        this.textContent = info.classList.contains('show') ? "Ocultar" : "Ver más";
    });
});
