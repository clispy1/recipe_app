const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "ac653935";
const APP_key = "b2650177203fd2a92799c0e6d267f8e0";

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	searchQuery = e.target.querySelector("input").value;

	fetchAPI();
});

async function fetchAPI() {
	const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=30`;
	const response = await fetch(baseURL);
	const data = await response.json();
	generateHTML(data.hits);
	console.log(data);
}

function generateHTML(results) {
	let generatedHTML = "";
	// const theLabel = recipe.result.healthLabels;
	results.map((result) => {
		generatedHTML += `
        <div class="item">
          <img src="${result.recipe.image}" alt="Image">
          <div class="flex-container">
            <h2 class="title">${result.recipe.label}</h2>
              <a class="view-button" href="${result.recipe.url}" target="_blank">View Recipe</a></div>
            <p class="item-desc">Calories: ${result.recipe.calories.toFixed(2)}</p>
            </div>`;
						searchResultDiv.innerHTML = generatedHTML;
					});
}
				// <p class="item-desc">Ingredients: ${result.recipe.ingredientLines}</p>
