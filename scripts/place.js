document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(t, s) {
  return 35.74 + 0.6215*t - 35.75*Math.pow(s,0.16) + 0.4275*t*Math.pow(s,0.16);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

if (temp <= 50 && wind > 3) {
  document.getElementById("windChill").textContent =
    `Wind Chill: ${calculateWindChill(temp, wind).toFixed(1)} °F`;
} else {
  document.getElementById("windChill").textContent = "Wind Chill: N/A";
}