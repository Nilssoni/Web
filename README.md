###Criteria

#### HTML (25%)

You can find the HTML from `index.html`

- **Basic HTML structure is present.**
  - (whole file)

- **HTML structure with clear content differentiation (headings, paragraphs, lists).**
  - (headings: 23, 27, 35, 50, 75; paragraphs: 25-26; lists: 42-45, 72-73)

- **Use of forms, links, and media.**
  - Links: (Navigation links: 11-14, 84-85, Download CV link: 63, GitHub & LinkedIn links: 93-96)
  - Form: (Contact form: 75-92)
  - Media: (Video: 66-69)

- **Tables are effectively used.**
  - Table: (Project table: 35-48)

- **Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.**
  - (Semantic elements used throughout the file: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` found on lines 16, 21, 27, 35, 66, 75, 90, 98)

#### CSS (25%)

You can find the CSS from `styles.css`

- **Basic CSS styling (colors, fonts).**
  - (found throughout the file: Colors: 6, 12, 21, 28, 33, 40, 49, 58, 66, 76, 84, 88, Fonts: 1)

- **Use of classes and IDs to style specific elements.**
  - (classes and IDs are used throughout the file: `.topnav`, `.btn-download`, `#header`, `#weather`, `#name`, `#email`, `#message`, and more)

- **Implementation of responsive design elements.**
  - (Responsive styles: 22-27, 42-58, 133-137, 242-258)

- **Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid).**
  - (Flexbox: 12-21, 28-61; Grid: 133-137, 176-185)

- **Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.**
  - (Aesthetics and user experience: colors and consistent layout, distinct sections: lines 6, 88, 123-140, layout principles: grid and flexbox in lines 133-137, 176-185)

#### **JavaScript Basics (25%)**

1. **Simple Interactions (like alerts on button click) (1/5)**:
   - **Met**: The `confirmLeaving` function shows a confirmation alert.
     ```javascript
     function confirmLeaving(){
         const confirmation = confirm("You are about to leave this site. Do you want to continue?");
         return confirmation;
     }
     ```
     **Lines: 1-5**

2. **Multiple Event Listeners and Basic DOM Manipulations (2/5)**:
   - **Met**: The `DOMContentLoaded` listener and `navigation` function handle basic DOM manipulations.
     ```javascript
     document.addEventListener("DOMContentLoaded", () => { /* Fetch project data */ });
     var x = document.getElementById("myTopnav");
     ```
     **Lines: 44-47 (Event Listener)**,  
     **Lines: 8-14 (DOM Manipulation in `navigation`)**

3. **Use of Arrays, Objects, and Functions (3/5)**:
   - **Met**: Use of array methods, objects from `projects.json`, and several functions.
     ```javascript
     projects.forEach(project => {
        // Loop through each project object
     });
     ```
     **Lines: 52-72 (Array/Object/Function Usage)**

4. **Advanced Logic, Looping Through Data, and Dynamic DOM Updates (4/5)**:
   - **Met**: Asynchronous API call, looping through JSON data, and dynamically updating the DOM.
     ```javascript
     async function getWeather() {
        const response = await fetch(`url`);
        // Dynamic DOM update
     }
     ```
     **Lines: 17-39 (Weather Fetch and DOM Updates)**  
     **Lines: 52-72 (Dynamic Table Updates from JSON)**

5. **Consistent Use of Object-Oriented JavaScript Principles (5/5)**:
   - **Not Fully Met**: No object-oriented principles (like classes) used.

---

#### **Asynchronous Operations (25%)**

1. **Use of Timers (1/5)**:
   - **Not Met**: No timers (like `setTimeout` or `setInterval`) used yet.

2. **Successful Implementation of an AJAX Call or Fetch (2/5)**:
   - **Met**: Fetch API is implemented for weather data and project data.
     ```javascript
     async function getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
     }
     fetch('projects.json').then(response => response.json());
     ```
     **Lines: 17-39 (Weather Fetch)**  
     **Lines: 45-47 (Project Data Fetch)**

3. **Data from the Asynchronous Call is Displayed on the Webpage (3/5)**:
   - **Met**: Weather and project data are displayed on the webpage dynamically.
     ```javascript
     document.getElementById('weather').innerHTML = `Weather in ${data.name}`;
     tableBody.appendChild(row); // Projects displayed dynamically
     ```
     **Lines: 29-39 (Weather Display)**  
     **Lines: 63-72 (Project Table Display)**

4. **Error Handling is Implemented (for Failed API Calls, etc.) (4/5)**:
   - **Met**: Error handling implemented in `getWeather`.
     ```javascript
     try {
        const response = await fetch(`url`);
     } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error: ${error.message}</p>`;
     }
     ```
     **Lines: 20-39**

5. **Effective Use of Asynchronous Data to Enhance User Experience (5/5)**:
   - **Partially Met**: Data is displayed but no additional features like sorting/filtering.
     ```javascript
     // Data fetched and displayed
     projects.forEach(project => { /* Display project data */ });
     ```
     **Lines: 52-72**