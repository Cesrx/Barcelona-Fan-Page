let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Función para cambiar el slide
function changeSlide() {
  // Ocultar la imagen actual
  slides[currentSlide].classList.remove('active');  // Eliminamos la clase "active" del slide actual
  
  // Incrementar el índice de la imagen actual
  currentSlide = (currentSlide + 1) % totalSlides;

  // Mostrar la siguiente imagen
  slides[currentSlide].classList.add('active');  // Añadimos la clase "active" al nuevo slide
}

// Cambiar imagen cada x segundos
setInterval(changeSlide, 8000);

// Inicializar con la primera imagen visible
slides[currentSlide].classList.add('active');

// Navegar a la imagen anterior
function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
}

// Navegar a la siguiente imagen
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add('active');
}

// Agregar eventos a las flechas
document.querySelector('.arrow-left').addEventListener('click', prevSlide);
document.querySelector('.arrow-right').addEventListener('click', nextSlide);
