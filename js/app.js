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
function cambioSeccion(seccion){
    Selection.scrollIntoView({
        behavior:'smooth'
    })
}
function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}
document.querySelector(".bio-imagen img").addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
});

document.querySelector(".bio-imagen img").addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
});
    document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("modal");
        const modalImg = document.getElementById("imagenModal");
        const closeBtn = document.querySelector(".cerrar");
        const images = document.querySelectorAll(".imagen-carrusel");

        // Abrir modal al hacer clic en una imagen
        images.forEach(img => {
            img.addEventListener("click", function () {
                modal.style.display = "flex";
                modalImg.src = this.src;
                history.pushState(null, null, "#modal"); // Agregar el hash para navegación
            });
        });

        // Cerrar modal al hacer clic en la "X"
        closeBtn.addEventListener("click", cerrarModal);

        // Cerrar modal al hacer clic fuera de la imagen
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                cerrarModal();
            }
        });

        // Función para cerrar el modal y limpiar la URL
        function cerrarModal() {
            modal.style.display = "none";
            history.replaceState(null, null, window.location.pathname); // Quitar el hash de la URL
        }

        // Si la página se recarga con #modal, quitarlo
        if (window.location.hash === "#modal") {
            history.replaceState(null, null, window.location.pathname);
        }
    });



    
