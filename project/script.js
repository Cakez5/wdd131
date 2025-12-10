document.addEventListener("DOMContentLoaded", () => {
  // Handle contact form submission
  const form = document.getElementById("contactForm");
  if (!form) return; // safety guard

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop normal form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Conditional branching
    if (name && email && message) {
      // Template literal
      alert(`Thanks, ${name}! We'll reply to ${email} soon.`);

      // Save to localStorage
      localStorage.setItem("contactName", name);
      localStorage.setItem("contactEmail", email);
      localStorage.setItem("contactMessage", message);

      // Redirect to confirmation page
      window.location.href = "review.html";
    } else {
      alert("Please fill out all fields.");
    }
  });

  // Object + Array example (rubric requirement)
  const games = [
    { title: "Elmentallia", genre: "RPG" },
    { title: "Prototype Quest", genre: "Adventure" }
  ];

  // Array method
  games.forEach(game => console.log(`${game.title} is a ${game.genre}`));
});