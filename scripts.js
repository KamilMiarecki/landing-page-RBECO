
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
  "images_for_inspiration/1.jpg",
  "images_for_inspiration/2.jpg",
  "images_for_inspiration/3.jpg",
  "images_for_inspiration/4.jpg",
  "images_for_inspiration/5.jpg",
  "images_for_inspiration/6.jpg",
  "images_for_inspiration/7.jpg",
  "images_for_inspiration/8.jpg",
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




// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Tworzymy instancję mapy
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Ustawiamy projekcję mapy
chart.projection = new am4maps.projections.Miller();

// Włączamy przesuwanie i zoomowanie
chart.panBehavior = "move"; 
chart.zoomControl = new am4maps.ZoomControl();

// Definiujemy listę odwiedzonych krajów i przypisane im kolory
var visitedCountries = [{ "id": "FR", "name": "France", "color": am4core.color("#ff0000") },  // Czerwony
  { "id": "IT", "name": "Italy", "color": am4core.color("#0000ff") },   // Niebieski
  { "id": "ES", "name": "Spain", "color": am4core.color("#ffff00") },   // Żółty
  { "id": "PL", "name": "Poland", "color": am4core.color("#ffa500") },  // Pomarańczowy
  { "id": "DE", "name": "Germany", "color": am4core.color("#00ff00") }, // Zielony
  { "id": "NL", "name": "Netherlands", "color": am4core.color("#800080") }, // Fioletowy
  { "id": "GR", "name": "Greece", "color": am4core.color("#00ffff") },   // Cyjan
  { "id": "US", "name": "United States", "color": am4core.color("#ff00ff") }, // Różowy
  { "id": "AT", "name": "Austria", "color": am4core.color("#8b0000") }, // Ciemnoczerwony
  { "id": "BE", "name": "Belgium", "color": am4core.color("#4682b4") }, // Stalowoniebieski
  { "id": "BG", "name": "Bulgaria", "color": am4core.color("#00ff7f") }, // Jasnozielony
  { "id": "HR", "name": "Croatia", "color": am4core.color("#b8860b") }, // Ciemnozłoty
  { "id": "CY", "name": "Cyprus", "color": am4core.color("#da70d6") }, // Orchidea
  { "id": "DK", "name": "Denmark", "color": am4core.color("#6495ed") }, // Kornflower Blue
  { "id": "EE", "name": "Estonia", "color": am4core.color("#ff6347") }, // jasny czerwony
  { "id": "FI", "name": "Finland", "color": am4core.color("#40e0d0") }, // Turkusowy
  { "id": "HU", "name": "Hungary", "color": am4core.color("#b22222") }, // Firebrick
  { "id": "IE", "name": "Ireland", "color": am4core.color("#228b22") }, // Leśna zieleń
  { "id": "LT", "name": "Lithuania", "color": am4core.color("#ff4500") }, // Oranżowy
  { "id": "LU", "name": "Luxembourg", "color": am4core.color("#d2691e") }, // Czekoladowy
  { "id": "LV", "name": "Latvia", "color": am4core.color("#9932cc") }, // Ciemny fiolet
  { "id": "NO", "name": "Norway", "color": am4core.color("#00bfff") }, // Głębokie niebo
  { "id": "PT", "name": "Portugal", "color": am4core.color("#ffd700") }, // Złoty
  { "id": "SE", "name": "Sweden", "color": am4core.color("#7cfc00") }, // Zielony
  { "id": "SK", "name": "Slovakia", "color": am4core.color("#dc143c") }, // Karmazynowy
  { "id": "CH", "name": "Switzerland", "color": am4core.color("#ff1493") }, // Jasnoróżowy
  { "id": "UA", "name": "Ukraine", "color": am4core.color("#adff2f") }, // Zielonożółty
  { "id": "GB", "name": "United Kingdom", "color": am4core.color("#191970") } // Midnight Blue
  
];

// Tworzymy warstwę dla mapy świata
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
polygonSeries.geodata = am4geodata_worldLow;

// Ustawiamy domyślny kolor krajów na szary
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.fill = am4core.color("#aaaaaa"); // Szary kolor

// Dodajemy tooltip z nazwą kraju
polygonTemplate.tooltipText = "{name}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Stany hover i active dla podświetlania krajów
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#aaaaaa"); // Kolor podświetlenia na hover

var activeState = polygonTemplate.states.create("active");
activeState.properties.fill = am4core.color("#aaaaaa"); // Kolor po kliknięciu

// Tablica, aby przechować odwiedzone kraje dla późniejszego zoomu
var visitedPolygons = [];

// Tworzymy serię dla każdego odwiedzonego kraju z przypisanym kolorem
visitedCountries.forEach(function(country) {
  var countrySeries = chart.series.push(new am4maps.MapPolygonSeries());

  // Ustawiamy mapę dla każdego kraju
  countrySeries.geodata = am4geodata_worldLow;
  countrySeries.include = [country.id]; // Kod kraju
  
  // Ustawiamy tooltip, kolor i efekt hover
  var countryPolygon = countrySeries.mapPolygons.template;
  countryPolygon.fill = country.color;
  countryPolygon.tooltipText = "[bold]{name}[/]"; // Nazwa kraju w tooltip
  countryPolygon.strokeWidth = 2;
  
  // Stan hover dla podświetlenia odwiedzonych krajów na ciemniejszy kolor
  var hoverState = countryPolygon.states.create("hover");
  hoverState.properties.fill = am4core.color(am4core.colors.brighten(country.color.rgb, -0.3)); // Ciemniejszy kolor na hover

  // Animacja dla odwiedzonego kraju
  countryPolygon.events.on("inited", function(event) {
    event.target.animate({ property: "fill", to: country.color, duration: 1000, easing: am4core.ease.linear });
  });

  // Zapisujemy odwiedzone kraje do listy visitedPolygons, aby móc na nie później zoomować
  countrySeries.events.on("inited", function() {
    visitedPolygons.push(countrySeries);
    if (visitedPolygons.length === visitedCountries.length) {
      zoomToVisitedCountries();
    }
  });
});

// Funkcja do zoomowania na odwiedzone kraje
function zoomToVisitedCountries() {
  var bounds = chart.getGeodataBounds(visitedPolygons.map(series => series.mapPolygons.getIndex(0)));

  if (bounds) {
    chart.zoomToRectangle(bounds.north, bounds.east, bounds.south, bounds.west, 1, true);
  }
}
