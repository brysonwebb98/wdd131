import recipes from './recipes.mjs';

function getRandomNumber(num){
    return Math.floor(Math.random() * num)
}

function getRandomRecipe(){
    const randomIndex = getRandomNumber(recipes.length);
    return recipes[randomIndex];
}

function generateRecipeHTML(recipe) {
    return `
        <div>
            <h2>${recipe.name}</h2>
            <p>Author: ${recipe.author}</p>
            <p>Cook Time: ${recipe.cookTime}</p>
            <p>Prep Time: ${recipe.prepTime}</p>
            <p>Date Published: ${recipe.datePublished}</p>
            <p>Based On: ${recipe.isBasedOn || 'N/A'}</p>
            <p>Recipe Yield: ${recipe.recipeYield}</p>
            <p>Rating: ${recipe.rating} stars</p>
            <p>Description: ${recipe.description}</p>
            
            <p>Tags: ${recipe.tags.join(', ')}</p>

            <h3>Ingredients</h3>
            <ul>
                ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>

            <h3>Instructions</h3>
            <ol>
                ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>

            <img src="${recipe.image}" alt="${recipe.name}">
            
            <p>URL: <a href="${recipe.url}" target="_blank">${recipe.url || 'No URL Provided'}</a></p>
        </div>
    `;
}

function generateTagsMarkup(tags) {
    return `
    <p>Tags: ${tags.join(', ')}</p>`
}

function generateRatingStars(rating) {
    const ratingElements = document.querySelectorAll('.rating');

    ratingElements.forEach(ratingElement => { 
        let stars = '';
        
        const fullStars = Math.floor(rating);
        const halfStar = (rating % 1 !== 0);
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); 

        for (let i = 0; i < fullStars; i++) {
            stars += '<span aria-hidden="true" class="icon-star">⭐</span>';  
        }

        if (halfStar) {
            stars += '<span aria-hidden="true" class="icon-star-half">⭐</span>'; 
        }

        for (let i = 0; i < emptyStars; i++) {
            stars += '<span aria-hidden="true" class="icon-star-empty">☆</span>'; 
        }

        ratingElement.innerHTML = stars;
    });
}

function init() {
    const randomRecipe = getRandomRecipe();

    const tagsHTML = generateTagsMarkup(randomRecipe.tags);
    
    generateRatingStars(randomRecipe.rating);

    const foodImage = document.querySelector('.chosen-food-image');
    const foodType = document.querySelector('.food-type');
    const foodName = document.querySelector('.food-name');
    const foodDescription = document.querySelector('.food-description');

    foodImage.src = randomRecipe.image;
    foodImage.alt = randomRecipe.name; 
    foodType.textContent = randomRecipe.tags.join(', '); 
    foodName.textContent = randomRecipe.name;
    foodDescription.textContent = randomRecipe.description;

    console.log(randomRecipe.tags);

    const tagsContainer = document.querySelector('.tags-container'); 
    if (tagsContainer) {
        tagsContainer.innerHTML = tagsHTML; 
    }
}

document.addEventListener('DOMContentLoaded', init);

const searchBar = document.getElementById('search')

searchBar.addEventListener('input', filterRecipes);

function filterRecipes() {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(searchTerm) ||
                recipe.description.toLowerCase().includes(searchTerm)
    });
    displayRecipes(filteredRecipes);
}

function displayRecipes(recipesToDisplay) {
    const recipeContainer = document.getElementById('recipeList'); 
  
    recipeContainer.innerHTML = '';

    recipesToDisplay.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <img src="${recipe.image}" alt="${recipe.name}">
        `;

        recipeContainer.appendChild(recipeElement);
    });
}

displayRecipes(recipes);