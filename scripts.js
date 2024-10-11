
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
   
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Tablica obrazów
var images = [
  "images_for_inspiration/1.png",
  "images_for_inspiration/2.png",
  "images_for_inspiration/3.png",
  "images_for_inspiration/4.png",
  "images_for_inspiration/5.png",
  "images_for_inspiration/6.png",
  "images_for_inspiration/7.png",
  "images_for_inspiration/8.png",
];

var currentIndex = 0; // Bieżący indeks obrazu

// Funkcja otwierająca obraz i ustawiająca indeks
function openImage(index) {
  currentIndex = index;
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modal-img");
  
  modal.style.display = "block";
  modalImg.src = images[currentIndex];
}

// Funkcja zamykająca modal
function closeImage() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Funkcja zmieniająca obraz na kolejny lub poprzedni
function changeImage(direction) {
  currentIndex += direction;

  // Sprawdzenie, czy indeks nie wyszedł poza zakres
  if (currentIndex >= images.length) {
      currentIndex = 0; // Jeśli ostatni obraz, wróć na pierwszy
  } else if (currentIndex < 0) {
      currentIndex = images.length - 1; // Jeśli pierwszy obraz, wróć na ostatni
  }

  var modalImg = document.getElementById("modal-img");
  modalImg.src = images[currentIndex];
}



function autoResize(textarea) {
    textarea.style.height = 'auto'; // Resetuje wysokość, aby zmierzyć nową wysokość
    textarea.style.height = textarea.scrollHeight + 'px'; // Ustawia wysokość na scrollHeight
}
// Inicjalizacja funkcji, aby dostosować wysokość na załadowanie strony
document.addEventListener('DOMContentLoaded', function() {
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
      autoResize(textarea);
  });
});


function scrollToContact() {
  const contactSection = document.getElementById('kontakt');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}
function toggleMenu() {
  const navLinks = document.querySelector('.nav__links');
  navLinks.classList.toggle('active'); // Dodaj lub usuń klasę 'active'
}

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav__links');
      navLinks.classList.remove('active'); // Zamknij menu po kliknięciu
  });
});







