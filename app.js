const drinkFlex = document.querySelector('#results');
const submitButton = document.querySelector('#ingredient-button');

const grabDrinks = async (ingredient) => {
    const input = document.getElementById('ingredient-box');
    try {
        const nonAlc = document.querySelector('#non-alc');
        let error = document.getElementById('ingredient_error_message');
        if(error){
            error.remove();
            input.removeAttribute('aria-describedby');
        }
        if(nonAlc.checked === true) { // Retrieves all non-alcoholic drinks with out sorting by ingredient
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=non_alcoholic`;
            const response = await axios.get(url);
            drinkLoop(response);
        } else{ // Retrieves data based on user input in ingredient-box
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
            const response = await axios.get(url);
            drinkLoop(response);
        }
        revealRecipe();
    } catch (error) {        
        if(!document.getElementById('ingredient_error_message')){
            addErrorMessage(input);
        }
        input.focus();
        console.error(error);
    }
}
function addErrorMessage(input){
    const errorMessage = document.createElement('span');
    errorMessage.textContent = 'Please enter an ingredient';
    errorMessage.setAttribute('id', 'ingredient_error_message');
    input.setAttribute('aria-describedby', 'ingredient_error_message');
    input.after(errorMessage);
}
// Populates drink array and creates div containers for each drink
function drinkLoop (response) {
    const drinkData = response.data.drinks;
    // console.log(drinkData);
    const drinkList = document.createElement('ul');
    drinkList.setAttribute('style', 'display:flex; flex-flow:row wrap;');
    drinkFlex.appendChild(drinkList);
    for(let i = 0; i < drinkData.length; i++) {
        let drinkTitle = drinkData[i].strDrink.replaceAll(' ', '_');
        // Drink-container with background of drink image
        const drinkListItem = document.createElement('li');
        //Drink name based off idDrink
        const drinkName = document.createElement('div');
        const revealRecipe = document.createElement('button');
        revealRecipe.setAttribute('aria-expanded', false);
        revealRecipe.setAttribute('aria-describedby', drinkTitle.concat('_title'));
        revealRecipe.setAttribute('class', 'reveal_recipe');
        revealRecipe.textContent = 'Reveal Recipe';
        drinkListItem.setAttribute('class', 'drink-container');
        const backImage = `url(${drinkData[i].strDrinkThumb})`
        drinkListItem.style.backgroundImage = backImage;
        drinkName.setAttribute('id', drinkTitle.concat('_title'));
        drinkName.setAttribute('style','background: #20201d; color: #fff; padding: 5px; opacity: 0.85;')
        drinkListItem.setAttribute('id',drinkData[i].idDrink)
        drinkName.innerText = drinkData[i].strDrink;
        drinkListItem.appendChild(drinkName);
        drinkListItem.appendChild(revealRecipe);
        drinkList.appendChild(drinkListItem);
        grabDrinkData(drinkData[i].idDrink);
    }
}

function revealRecipe () {
    const revealButtons = document.getElementsByClassName('reveal_recipe');
    // if(revealButtons){
        for(let i = 0; i < revealButtons.length; i += 1){
            revealButtons[i].addEventListener('click', () => {
                    let recipe = revealButtons[i].nextSibling;
                    let expanded = revealButtons[i].getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
                    recipe.classList.toggle('hovered');
                    revealButtons[i].setAttribute('aria-expanded', expanded);
    
                });
        }
    // }
}


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Removes results from previous searches
    removeResults(drinkFlex);
    const ingredient = document.querySelector('#ingredient-box').value;
    // Retrieves drink id and image for background
    grabDrinks(ingredient);
    backgroundChange(ingredient);
    // Resets ingredient search input
    document.querySelector('#ingredient-box').value = '';
});


// Removes results from previous searches
function removeResults(node) {
    node.innerHTML = '';
    // while(node.firstChild) {
    //     node.removeChild(node.lastChild);
    // }
}

// Changes header background based on unput with default being original in CSS
function backgroundChange(ingredient) {
    const pageTitle = document.querySelector('#page-title');
    if (ingredient === 'vodka' || ingredient === 'Vodka' ) {
        pageTitle.style.backgroundImage = "url(https://i.imgur.com/vETgiD8.jpg?2)";
    } else if (ingredient === 'gin' || ingredient === 'Gin' ) {
        pageTitle.style.backgroundImage = "url(https://i.imgur.com/bkLTXN2.jpg?1)";
    } else if (ingredient === 'rum' || ingredient === 'Rum' ) {
        pageTitle.style.backgroundImage = "url(https://i.imgur.com/M36fHxS.jpg?1)";
    } else if (ingredient === 'tequila' || ingredient === 'Tequila' ) {
        pageTitle.style.backgroundImage = "url(https://i.imgur.com/ncyLNU8.jpg?2)";
    } else if (ingredient === 'bourbon' || ingredient === 'Bourbon' ) {
        pageTitle.style.backgroundImage = "url(https://i.imgur.com/QqEM4tX.jpg?1)";
    } else if (ingredient === 'whisky' || ingredient === 'Whisky' ) {
        pageTitle.style.backgroundImage = "url(https://i.imgur.com/clvnT0B.jpg?1)";
    } else if (ingredient === 'scotch' || ingredient === 'Scotch' ) {
        pageTitle.style.backgroundImage = "url(https://i.imgur.com/clvnT0B.jpg?1)";
    } else {
        pageTitle.style.backgroundImage = "url(https://i.imgur.com/CjvQPNL.jpg?2)";
    }
}

// Gathering instructions and ingredients after drink has been sorted by ingredient and populated in webpage by idDrink
const grabDrinkData = async (drinkID) => {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`;
        const response = await axios.get(url);
        const drinkData = response.data.drinks[0];
        // console.log(response);
        // Clearing out null values and setting array to a string
        const {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15} = drinkData;
        let arrayIngredient = [strMeasure1, strIngredient1, strMeasure2, strIngredient2, strMeasure3, strIngredient3, strMeasure4, strIngredient4, strMeasure5, strIngredient5, strMeasure6, strIngredient6, strMeasure7, strIngredient7, strIngredient8, strMeasure8, strIngredient9, strMeasure9, strIngredient10, strMeasure10, strIngredient11, strMeasure11, strMeasure12, strIngredient12, strIngredient13, strMeasure13, strMeasure14, strIngredient14, strMeasure15, strIngredient15];
        let stringIngredient = arrayIngredient.toString().replaceAll(',',' ').trim();
        const id = drinkData.idDrink;
        // Getting the div already containing drinkName to append instructions and ingredients
        const drinkDiv = document.getElementById(id);
        const drinkIngInst = document.createElement('div');
        const drinkIngredients = document.createElement('div');
        const drinkInstructions = document.createElement('div');
        // Setting both ingredients and instructions to this container to allow hover pseudo-class
        drinkIngInst.setAttribute('class', `container`);
        drinkDiv.append(drinkIngInst);
        drinkIngredients.setAttribute('class', `ingredient-container`);
        drinkInstructions.setAttribute('class', `ingredient-container`);
        drinkIngInst.append(drinkIngredients);
        drinkIngInst.append(drinkInstructions);
        drinkIngredients.innerText = stringIngredient
        const instructions = drinkData.strInstructions.toString()
        drinkInstructions.innerText = instructions

        // // Won't display this drink... passion fruit on a drink with crown and frangelico, either the picture is wrong or someone is in for a confusing experience...
        // const worngPicture = document.getElementById('17122')
        // if(worngPicture !== null) {
        // worngPicture.innerText = 'Sorry this is not the picture of this drink...'
        // worngPicture.style = 'display: flex; justify-content: center; align-content: center; background: black; color: white;'
        // }
    } catch (error) {
        console.error(error);

    }
}