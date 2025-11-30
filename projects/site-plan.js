// Format last modified date
const options = { year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = new Date(document.lastModified).toLocaleDateString(undefined, options);

// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// Update last modified
document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate;