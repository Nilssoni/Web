function confirmLeaving(){
    const confirmation = confirm("You are about to leave this site. Do you want to continue?");
    return confirmation;
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navigation() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

const apiKey = 'a56d1dbc2e8756dbc50067fa127e4809';  // Replace with your OpenWeatherMap API key
const city = 'Oulu';  // Replace with the desired city

// Function to fetch and display the weather data
async function getWeather() {
  try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
          throw new Error('City not found or invalid API key');
      }
      const data = await response.json();
      document.getElementById('weather').innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
  } catch (error) {
      document.getElementById('weather').innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

// Call the function when the page loads
window.onload = getWeather;

// Projects.json handler
document.addEventListener("DOMContentLoaded", () => {
  //Fetch project data from JSON file
  fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
      const tableBody = document.getElementById("projectTableBody");

      // Loop through the JSON data and create table rows dynamically
      projects.forEach(project => {
        const row = document.createElement("tr");

        // Create name cell
        const nameCell = document.createElement("td");
        nameCell.textContent = project.name;
        row.appendChild(nameCell);

        // Create image cell
        const imageCell = document.createElement("td");
        const imageElement= document.createElement("img");
        imageElement.src = project.image;
        imageElement.alt = project.name + " image";
        imageElement.style.width = "50px" // Set a fixed size
        imageCell.appendChild(imageElement);
        row.appendChild(imageCell)

        // Create link cell
        const linkCell = document.createElement("td");
        const linkElement = document.createElement("a");
        linkElement.href = project.link;
        linkElement.textContent = "Github Link";
        linkElement.target = "_blank"; // Open link in new tab
        linkCell.appendChild(linkElement);
        row.appendChild(linkCell);

        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error loading project data:', error));
});
