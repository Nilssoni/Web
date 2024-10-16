function confirmLeaving(){
    const confirmation = confirm("You are about to leave this site. Do you want to continue?");
    return confirmation;
}
function confirmDownload(){
    const confirmation = confirm("You are about to Download a file. File is a test pdf file, contains Lorem Ipsum");
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
