


  function fetchMealsByArea() {
    let areaName = document.getElementById("searchAreaInput").value;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          displayMealsByArea(data.meals);
        } else {
          displayNoMealsFound();
        }
      })
      .catch((error) => {
        console.error("Error fetching meals by area:", error);
      });
  }
  
  function displayMealsByArea(meals) {
    let recipesDiv = document.getElementById("recipesdiv");
    recipesDiv.innerHTML = "";
  
    let ol = document.createElement("ol");
  
    meals.forEach((meal) => {
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
  
      ol.appendChild(li);
    });
  
    recipesDiv.appendChild(ol);
  }
  
  function displayNoMealsFound() {
    let recipesDiv = document.getElementById("recipesdiv");
    recipesDiv.innerHTML = "<p>No meals found.</p>";
  }

 