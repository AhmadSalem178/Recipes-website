

function fetchMealDetails() {
  let mealName = document.getElementById("mealName").value;
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.meals) {
        displayRecipes(data.meals[0]);
      } else {
        displayNoRecipesFound();
      }
    })

    .catch((error) => {
      console.error("Error fetching meal details:", error);
    });

}

function displayRecipes(meal) {
  let recipesDiv = document.getElementById("recipesdiv");
  recipesDiv.innerHTML = "";

  let ol = document.createElement("ol");

  let li = document.createElement("li");
  li.classList.add("recipe-item");

  let img = document.createElement("img");
  img.src = meal.strMealThumb;
  img.alt = meal.strMeal;
  li.appendChild(img);

  let nameDiv = document.createElement("div");
  nameDiv.classList.add("recipe-name");
  nameDiv.textContent = meal.strMeal;
  li.appendChild(nameDiv);

  let instructionsDiv = document.createElement("div");
  instructionsDiv.classList.add("recipe-instructions");

  let instructions = meal.strInstructions.split("\r\n");
  let ul = document.createElement("ul");
  instructions.forEach((instruction) => {
    let li = document.createElement("li");
    li.textContent = instruction;
    ul.appendChild(li);
  });
  instructionsDiv.appendChild(ul);

  li.appendChild(instructionsDiv);

  ol.appendChild(li);

  recipesDiv.appendChild(ol);
}

function displayNoRecipesFound() {
  let recipesDiv = document.getElementById("recipesdiv");
  recipesDiv.innerHTML = "<p>No recipes found.</p>";
}

function displayError() {
  let recipesDiv = document.getElementById("recipesdiv");
  recipesDiv.innerHTML = "<p>Sorry, something went wrong. Please try again later.</p>";
}

// Add an event listener to the search button
document.getElementById("searchButton").addEventListener("click", () => {
  // Get the value of the mealName input field
  let mealName = document.getElementById("mealName").value;

  // Check if the input field is empty
  if (mealName.trim() === "") {
    // If the input field is empty, show an error message
    alert("Please enter a meal name.");
    return;
  }

  // Call the fetchMealDetails function with the meal name
  fetchMealDetails(mealName);
});





















