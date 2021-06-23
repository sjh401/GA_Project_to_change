// By Ingredient - www.thecocktaildb.com/api/json/v1/1/filter.php?i=ingredient
// By Category - www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
// By Drink ID - www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11147

// // Alc or non alc request
// const grabOH = async (alcoholic) => {
//     try {
//         const url = `www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholic}`
//     }
// }


const drinkFlex = document.querySelector('#results')
const inputButton = document.querySelector('#ingredient-button')



const grabDrinks = async (ingredient) => {
    console.log(ingredient)
    try {
        const nonAlc = document.querySelector('#non-alc')
        if(nonAlc.checked === false) {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
            const response = await axios.get(url)
            console.log(response)
            // console.log(response.data.drinks[0].strDrinkThumb)
            const drinkData = response.data.drinks
            for(let i = 0; i < drinkData.length; i++) {
                const drinkDiv = document.createElement('div')
                const drinkImage = document.createElement('img')
                const drinkName = document.createElement('h2')
                drinkDiv.setAttribute('class', 'drink-container')
                drinkImage.setAttribute('src', drinkData[i].strDrinkThumb)
                drinkImage.setAttribute('alt', drinkData[i].strDrink)
                drinkImage.setAttribute('style','display: block; height: auto; width: 25vh;')
                drinkName.setAttribute('id',drinkData[i].idDrink)
                drinkName.innerText = drinkData[i].strDrink
                drinkFlex.appendChild(drinkDiv)
                drinkDiv.appendChild(drinkName)
                drinkDiv.appendChild(drinkImage)
                grabDrinkData(drinkData[i].idDrink)
                // document.getElementById(`${drinkData[i].idDrink}`).onmouseout = function () {hideIngredients()};
                // document.getElementById(`${drinkData[i].idDrink}`).onmouseover = function () {displayIngredients()};
                }
            } else{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&a=non_alcoholic`
            const response = await axios.get(url)
            console.log(response)
            // console.log(response.data.drinks[0].strDrinkThumb)
            const drinkData = response.data.drinks
            for(let i = 0; i < drinkData.length; i++) {
                const drinkDiv = document.createElement('div')
                const drinkImage = document.createElement('img')
                const drinkName = document.createElement('h2')
                drinkDiv.setAttribute('class', 'drink-container')
                drinkImage.setAttribute('src', drinkData[i].strDrinkThumb)
                drinkImage.setAttribute('alt', drinkData[i].strDrink)
                drinkImage.setAttribute('style','display: block; height: auto; width: 25vh;')
                drinkName.setAttribute('id',drinkData[i].idDrink)
                drinkName.innerText = drinkData[i].strDrink
                drinkFlex.appendChild(drinkDiv)
                drinkDiv.appendChild(drinkName)
                drinkDiv.appendChild(drinkImage)
                grabDrinkData(drinkData[i].idDrink)
                // document.getElementById(`${drinkData[i].idDrink}`).onmouseout = function () {hideIngredients()};
                // document.getElementById(`${drinkData[i].idDrink}`).onmouseover = function () {displayIngredients()};
            }
            }
    } catch (error) {
        console.error(error)
    }
}


function removeResults(node) {
    while(node.firstChild) {
        node.removeChild(node.firstChild)
    }
}
const button = document.querySelector('#ingredient-button')
button.addEventListener('click', (e => {
    e.preventDefault() 
    removeResults(drinkFlex)
    const ingredient = document.querySelector('#ingredient-box').value
    grabDrinks(ingredient)
    document.querySelector('#ingredient-box').value = ''
    return ingredient
}))
const grabDrinkData = async (drinkID) => {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`
        const response = await axios.get(url)
        // console.log(response)
        const drinkData = response.data.drinks[0]
        const id = drinkData.idDrink
        const drinkName = document.getElementById(`${id}`)
        // console.log(drinkData.strDrink)
        const drinkIngredients = document.createElement('div')
        drinkIngredients.setAttribute('class', 'ingredient-container')
        drinkIngredients.setAttribute('style','display: none;')
        drinkIngredients.innerText = drinkData.strDrink
        drinkName.appendChild(drinkIngredients)
        
    } catch (error) {
        console.error(error)
    }
}


// function showIngredients(id) {
//     const drinkName = document.getElementById(`${id}`)
//     drinkName.setAttribute('style','display: block;')
// }