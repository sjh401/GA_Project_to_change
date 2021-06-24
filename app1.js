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
                // const drinkImage = document.createElement('img')
                const drinkName = document.createElement('div')
                drinkDiv.setAttribute('class', 'drink-container')
                const backImage = `url(${drinkData[i].strDrinkThumb})`
                drinkDiv.style.backgroundImage = backImage
                // console.log(backImage)
                // drinkImage.setAttribute('src', drinkData[i].strDrinkThumb)
                // drinkImage.setAttribute('alt', drinkData[i].strDrink)
                // drinkImage.setAttribute('style','display: block; height: auto; width: 25vh;')
                drinkDiv.setAttribute('id',drinkData[i].idDrink)
                drinkName.setAttribute('style','display: flex; background: #20201d; color: #fff; padding: 5px; opacity: 0.85; font-size: 3.5vh;')
                drinkName.innerText = drinkData[i].strDrink
                drinkFlex.appendChild(drinkDiv)
                drinkDiv.appendChild(drinkName)
                // drinkDiv.appendChild(drinkImage)
                grabDrinkData(drinkData[i].idDrink)
                // document.getElementById(`${drinkData[i].idDrink}`).onmouseout = function () {hideIngredients()};
                // document.getElementById(`${drinkData[i].idDrink}`).onmouseover = function () {displayIngredients()};
                }
            } else{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=non_alcoholic`
            const response = await axios.get(url)
            // console.log(response)
            const drinkData = response.data.drinks
            for(let i = 0; i < drinkData.length; i++) {
                const drinkDiv = document.createElement('div')
                // const drinkImage = document.createElement('img')
                const drinkName = document.createElement('h2')
                drinkDiv.setAttribute('class', 'drink-container')
                drinkDiv.setAttribute('style',`backgorund-image: url(${drinkData[i].strDrinkThumb})`)
                // drinkImage.setAttribute('src', drinkData[i].strDrinkThumb)
                // drinkImage.setAttribute('alt', drinkData[i].strDrink)
                // drinkImage.setAttribute('style','display: block; height: auto; width: 25vh;')
                // drinkName.setAttribute('id',drinkData[i].idDrink)
                drinkName.innerText = drinkData[i].strDrink
                drinkFlex.appendChild(drinkDiv)
                drinkDiv.appendChild(drinkName)
                // drinkDiv.appendChild(drinkImage)
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
        // const drinkData = response.data.drinks[0]
        // const id = drinkData.idDrink
        // const drinkFlex = document.getElementById(`${id}`)
        // // const drinkFlex = document.
        // let strIngredient1 = `${drinkData.strMeasure1} of ${drinkData.strIngredient1}`
        // const drinkIngredients = document.createElement('div')
        // drinkIngredients.setAttribute('class', 'ingredient-container')
        // drinkIngredients.setAttribute('style','display: flex;')
        // drinkFlex.append(drinkIngredients)
        // let strIngredient = (strIngredient1 !== null) ? drinkIngredients.append(strIngredient1): null
        // let i = 1
        // while(i < 3) {
        //     let ingredient = drinkData.strIngredient1
        //     drinkIngredients.innerText = ingredient
        //     drinkName.append(drinkIngredients)
            
        //     i++
        // }
    } catch (error) {
        console.error(error)
    }
}