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
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
        const response = await axios.get(url)
        console.log(response)
        // console.log(response.data.drinks[0].strDrinkThumb)
        const drinkData = response.data.drinks
        
        for(let i = 0; i < drinkData.length; i++) {
        const drinkDiv = document.createElement('div')
        drinkDiv.setAttribute('class', 'drink-container')
        const drinkImage = document.createElement('img')
        const drinkName = document.createElement('h2')
        drinkImage.setAttribute('src',drinkData[i].strDrinkThumb)
        drinkImage.setAttribute('alt',drinkData[i].strDrink)
        drinkImage.setAttribute('style','height: auto; width: 25vh;')
        drinkName.innerText = drinkData[i].strDrink
        drinkFlex.appendChild(drinkDiv)
        drinkDiv.appendChild(drinkName)
        drinkDiv.appendChild(drinkImage)
        }
        return response
    } catch (error) {
        console.log(error)
    }
}
// grabDrinks('vodka')

const form = document.querySelector('#ingredient-form')
form.addEventListener('submit', (e => {
    e.preventDefault() 
    const ingredient = document.querySelector('#ingredient-box').value
    grabDrinks(ingredient)
    document.querySelector('#ingredient-box').value = ''
    return ingredient
}))