// By Ingredient - www.thecocktaildb.com/api/json/v1/1/filter.php?i=ingredient
// By Category - www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
// By Drink ID - www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11147

const drinkFlex = document.querySelector('#results')
const inputButton = document.querySelector('#ingredient-button')



const grabDrinks = async (ingredient) => {
    // console.log(ingredient)
    try {
        const nonAlc = document.querySelector('#non-alc')
        if(nonAlc.checked === false) {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
            const response = await axios.get(url)
            // console.log(response)
            // console.log(response.data.drinks[0].strDrinkThumb)
            const drinkData = response.data.drinks
            for(let i = 0; i < drinkData.length; i++) {
                const drinkDiv = document.createElement('div')
                const drinkName = document.createElement('div')
                drinkDiv.setAttribute('class', 'drink-container')
                const backImage = `url(${drinkData[i].strDrinkThumb})`
                drinkDiv.style.backgroundImage = backImage
                // console.log(backImage)
                drinkDiv.setAttribute('id',drinkData[i].idDrink)
                drinkName.setAttribute('style','display: flex; background: #20201d; color: #fff; padding: 5px; opacity: 0.85; font-size: 3.5vh;')
                drinkName.innerText = drinkData[i].strDrink
                drinkFlex.appendChild(drinkDiv)
                drinkDiv.appendChild(drinkName)
                grabDrinkData(drinkData[i].idDrink)
                // document.getElementById(`${drinkData[i].idDrink}`).onmouseout = function () {hideIngredients()};
                // document.getElementById(`${drinkData[i].idDrink}`).onmouseover = function () {displayIngredients()};
                }
            } else{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=non_alcoholic`
            const response = await axios.get(url)
            console.log(response)
            const drinkData = response.data.drinks
            for(let i = 0; i < drinkData.length; i++) {
                const drinkDiv = document.createElement('div')
                const drinkName = document.createElement('h2')
                drinkDiv.setAttribute('class', 'drink-container')
                drinkDiv.setAttribute('style',`backgorund-image: url(${drinkData[i].strDrinkThumb})`)
                drinkName.innerText = drinkData[i].strDrink
                drinkFlex.appendChild(drinkDiv)
                drinkDiv.appendChild(drinkName)
                grabDrinkData(drinkData[i].idDrink)
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
        const {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, ...other} = drinkData
        let arrayIngredient = [strMeasure1, strIngredient1, strMeasure2, strIngredient2, strMeasure3, strIngredient3, strMeasure4, strIngredient4, strMeasure5, strIngredient5, strMeasure6, strIngredient6, strMeasure7, strIngredient7, strIngredient8, strMeasure8, strIngredient9, strMeasure9, strIngredient10, strMeasure10, strIngredient11, strMeasure11, strMeasure12, strIngredient12, strIngredient13, strMeasure13, strMeasure14, strIngredient14, strMeasure15, strIngredient15]
        for (let i = arrayIngredient.length - 1; i > 0; i--) {
            (arrayIngredient[i] === null) ? arrayIngredient.splice(i,1) :  ((arrayIngredient[i] === "") ? arrayIngredient.splice(i,1) : false)
        }
        console.log(arrayIngredient)
        const ingredientString = ``
        const id = drinkData.idDrink
        const drinkFlex = document.getElementById(`${id}`)
        const drinkIngredients = document.createElement('div')
        drinkIngredients.setAttribute('class', 'ingredient-container')
        drinkIngredients.setAttribute('style','display: flex;')
        drinkFlex.append(drinkIngredients)
        drinkIngredients.innerText = arrayIngredient
    } catch (error) {
        console.error(error)
    }
}

