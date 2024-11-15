
AOS.init();


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


// Image array
const images = [
  "images_for_inspiration/zestaw-prezentowy-swieca-sojowa-mini-perfumy-zolty.jpg",
  "images_for_inspiration/pudelko-prezentowe-niebieskie.jpg",
  "images_for_inspiration/kosz-prezentowy-fioletowe-kwiaty.jpg",
  "images_for_inspiration/zestaw-prezentowy-mydlo-lawendowe-serum-zielone.jpg",
  "images_for_inspiration/zestaw-prezentowy-ceramiczna-miska-lyzeczka-miodu-czerwone.jpg",
  "images_for_inspiration/luksusowy-zestaw-mini-kosmetyki-fioletowy.jpg",
  "images_for_inspiration/zestaw-prezentowy-krem-do-rak-ozdoba-choinkowa-niebieskie.jpg",
  "images_for_inspiration/naturalna-pielegnacja-naturalny.jpg",
];

let currentIndex = 0; // Current image index

// Open image in modal
const openImage = index => {
  currentIndex = index;
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "block";
  modalImg.src = images[currentIndex];
}

// Close modal
const closeImage = () => {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Change image
const changeImage = direction => {
  currentIndex = (currentIndex + direction + images.length) % images.length; // Looping index
  document.getElementById("modal-img").src = images[currentIndex];
}

// Auto resize textarea
const autoResize = textarea => {
  textarea.style.height = 'auto'; // Reset height
  textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
}

// Initialize auto resize for textareas
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('textarea').forEach(autoResize);
});

// Scroll to contact section smoothly
const scrollToContact = () => {
  document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
}

// Toggle navigation menu
const toggleMenu = () => {
  document.querySelector('.nav__links').classList.toggle('active');
}

// Close menu on link click
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav__links').classList.remove('active');
  });
});

// Initialize map chart with amCharts
am4core.useTheme(am4themes_animated);
const chart = am4core.create("chartdiv", am4maps.MapChart);
chart.projection = new am4maps.projections.Miller();
chart.panBehavior = "move"; 
chart.zoomControl = new am4maps.ZoomControl();

const visitedCountries = [
  { "id": "FR", "name": "France", "color": am4core.color("#ff0000") },  // Czerwony
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

// Create map layer
const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
polygonSeries.geodata = am4geodata_worldLow;

const polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.fill = am4core.color("#aaaaaa");
polygonTemplate.tooltipText = "{name}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Hover state
const hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#aaaaaa");

visitedCountries.forEach(country => {
  const countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
  countrySeries.geodata = am4geodata_worldLow;
  countrySeries.include = [country.id];

  const countryPolygon = countrySeries.mapPolygons.template;
  countryPolygon.fill = country.color;
  countryPolygon.tooltipText = `[bold]{name}[/]`;
  countryPolygon.strokeWidth = 2;

  const hoverState = countryPolygon.states.create("hover");
  hoverState.properties.fill = am4core.color(am4core.colors.brighten(country.color.rgb, -0.3));

  countryPolygon.events.on("inited", event => {
    event.target.animate({ property: "fill", to: country.color, duration: 1000, easing: am4core.ease.linear });
  });
});



