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
            console.log(response)
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
        console.log(response)
        const drinkData = response.data.drinks[0]
        const id = drinkData.idDrink
        const drinkFlex = document.getElementById(`${id}`)
        // const drinkFlex = document.
        let strIngredient1 = `${drinkData.strMeasure1} of ${drinkData.strIngredient1}`
        let strIngredient2 = `, ${drinkData.strMeasure2} of ${drinkData.strIngredient2}`
        let strIngredient3 = `, ${drinkData.strMeasure3} of ${drinkData.strIngredient3}`
        let strIngredient4 = `, ${drinkData.strMeasure4} of ${drinkData.strIngredient4}`
        let strIngredient5 = `, ${drinkData.strMeasure5} of ${drinkData.strIngredient5}`
        let strIngredient6 = `, ${drinkData.strMeasure6} of ${drinkData.strIngredient6}`
        let strIngredient7 = `, ${drinkData.strMeasure7} of ${drinkData.strIngredient7}`
        let strIngredient8 = `, ${drinkData.strMeasure8} of ${drinkData.strIngredient8}`
        let strIngredient9 = `, ${drinkData.strMeasure9} of ${drinkData.strIngredient9}`
        let strIngredient10 = `, ${drinkData.strMeasure10} of ${drinkData.strIngredient10}`
        let strIngredient11 = `, ${drinkData.strMeasure11} of ${drinkData.strIngredient11}`
        let strIngredient12 = `, ${drinkData.strMeasure12} of ${drinkData.strIngredient12}`
        let strIngredient13 = `, ${drinkData.strMeasure13} of ${drinkData.strIngredient13}`
        let strIngredient14 = `, ${drinkData.strMeasure14} of ${drinkData.strIngredient14}`
        let strIngredient15 = `, ${drinkData.strMeasure15} of ${drinkData.strIngredient15}`
        const drinkIngredients = document.createElement('div')
        drinkIngredients.setAttribute('class', 'ingredient-container')
        drinkIngredients.setAttribute('style','display: flex;')
        drinkFlex.append(drinkIngredients)
        let str1Ingredient = (drinkData.strIngredient1 !== null) ? drinkIngredients.append(strIngredient1): ''
        let str2Ingredient = (drinkData.strIngredient2 !== null) ? drinkIngredients.append(strIngredient2): ''
        let str3Ingredient = (drinkData.strIngredient3 !== null) ? drinkIngredients.append(strIngredient3): ''
        let str4Ingredient = (drinkData.strIngredient4 !== null) ? drinkIngredients.append(strIngredient4): ''
        let str5Ingredient = (drinkData.strIngredient5 !== null) ? drinkIngredients.append(strIngredient5): ''
        let str6Ingredient = (drinkData.strIngredient6 !== null) ? drinkIngredients.append(strIngredient6): ''
        let str7Ingredient = (drinkData.strIngredient7 !== null) ? drinkIngredients.append(strIngredient7): ''
        let str8Ingredient = (drinkData.strIngredient8 !== null) ? drinkIngredients.append(strIngredient8): ''
        let str9Ingredient = (drinkData.strIngredient9 !== null) ? drinkIngredients.append(strIngredient9): ''
        let str10Ingredient = (drinkData.strIngredient10 !== null) ? drinkIngredients.append(strIngredient10): ''
        let str11Ingredient = (drinkData.strIngredient11 !== null) ? drinkIngredients.append(strIngredient11): ''
        let str12Ingredient = (drinkData.strIngredient12 !== null) ? drinkIngredients.append(strIngredient12): ''
        let str13Ingredient = (drinkData.strIngredient13 !== null) ? drinkIngredients.append(strIngredient13): ''
        let str14Ingredient = (drinkData.strIngredient14 !== null) ? drinkIngredients.append(strIngredient14): ''
        let str15Ingredient = (drinkData.strIngredient15 !== null) ? drinkIngredients.append(strIngredient15): ''
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

