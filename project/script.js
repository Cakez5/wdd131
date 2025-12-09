// Function + DOM manipulation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Conditional branching
  if (name && email) {
    // Template literal
    alert(`Thanks, ${name}! We'll reply to ${email} soon.`);

    // localStorage
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
  } else {
    alert("Please fill out all fields.");
  }
});

// Object + Array example
const games = [
  { title: "Elmentallia", genre: "RPG" },
  { title: "Prototype Quest", genre: "Adventure" }
];

// Array method
games.forEach(game => console.log(`${game.title} is a ${game.genre}`));