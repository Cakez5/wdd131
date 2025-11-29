// ---------------- Footer Date and Last Modified ----------------
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ---------------- Hamburger Menu Toggle ----------------
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
  hamburger.textContent = menu.classList.contains("open") ? "✖" : "☰";
});

// ---------------- Temple Data ----------------
const temples = [
  {
    templeName: "Kansas City Missouri Temple",
    location: "Kansas City, Missouri",
    dedicated: "2012-05-06",
    area: 32000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kansas-city-missouri-temple/kansas-city-missouri-temple-62518-thumb.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8453-thumb.jpg"
  },
  {
    templeName: "Syracuse Utah Temple",
    location: "Syracuse, Utah",
    dedicated: "2023-08-13",
    area: 89000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/syracuse-utah-temple/syracuse-utah-temple-64691-thumb.jpg"
  },
  {
    templeName: "Ogden Utah Temple",
    location: "Ogden, Utah",
    dedicated: "1972-01-18",
    area: 115000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-63046-thumb.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-65884-thumb.jpg"
  },
  {
    templeName: "Vernal Utah Temple",
    location: "Vernal, Utah",
    dedicated: "1997-11-02",
    area: 38000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/vernal-utah-temple/vernal-utah-temple-30601-thumb.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-8878-thumb.jpg"
  },
  {
    templeName: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois",
    dedicated: "2002-06-27",
    area: 54000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-6351-thumb.jpg"
  },
  {
    templeName: "Red Cliffs Utah Temple",
    location: "St. George, Utah",
    dedicated: "2024-03-24",
    area: 96277,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/red-cliffs-utah-temple/red-cliffs-utah-temple-66151-thumb.jpg"
  }
];

// ---------------- Card Creation + Display ----------------
function createTempleCard(temple) {
  const card = document.createElement("section");
  card.classList.add("temple-card");

  card.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
  `;
  return card;
}

function displayTemples(filteredTemples) {
  const container = document.querySelector("#temples-container");
  container.innerHTML = ""; // clear previous
  filteredTemples.forEach(t => container.appendChild(createTempleCard(t)));
}

// Initial load
displayTemples(temples);

// ---------------- Filtering Logic ----------------
document.querySelector("#home").addEventListener("click", () => displayTemples(temples));

document.querySelector("#old").addEventListener("click", () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900))
);

document.querySelector("#new").addEventListener("click", () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000))
);

document.querySelector("#large").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area > 90000))
);

document.querySelector("#small").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area < 10000))
);