// By Ingredient - www.thecocktaildb.com/api/json/v1/1/filter.php?i=ingredient
// By Category - www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
// By Drink ID - www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11147


const drinkFlex = document.querySelector('.results')
const inputButton = document.querySelector('#ingredient-button')



const grabDrinks = async (ingredient) => {
    try {
        const nonAlc = document.querySelector('#non-alc')
        if(nonAlc.checked === false) {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
            const response = await axios.get(url)
            const drinkData = response.data.drinks
            for(let i = 0; i < drinkData.length; i++) {
                const drinkDiv = document.createElement('div')
                const drinkName = document.createElement('div')
                drinkDiv.setAttribute('class', 'drink-container')
                const backImage = `url(${drinkData[i].strDrinkThumb})`
                drinkDiv.style.backgroundImage = backImage
                // console.log(backImage)
                drinkDiv.setAttribute('id',drinkData[i].idDrink)
                drinkName.setAttribute('class', drinkData[i].idDrink)
                drinkName.setAttribute('style','text-align: left; background: #20201d; color: #fff; padding: 5px; opacity: 0.85;')
                drinkName.innerText = drinkData[i].strDrink
                drinkFlex.appendChild(drinkDiv)
                drinkDiv.appendChild(drinkName)
                grabDrinkData(drinkData[i].idDrink)
                }
            } else{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=non_alcoholic`
                const response = await axios.get(url)
                const drinkData = response.data.drinks
                for(let i = 0; i < drinkData.length; i++) {
                    const drinkDiv = document.createElement('div')
                    const drinkName = document.createElement('div')
                    drinkDiv.setAttribute('class', 'drink-container')
                    const backImage = `url(${drinkData[i].strDrinkThumb})`
                    drinkDiv.style.backgroundImage = backImage
                    // console.log(backImage)
                    drinkDiv.setAttribute('id',drinkData[i].idDrink)
                    drinkName.setAttribute('style','background: #20201d; color: #fff; padding: 5px; opacity: 0.85;')
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
}))


const grabDrinkData = async (drinkID) => {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`
        const response = await axios.get(url)
        // console.log(response)
        const drinkData = response.data.drinks[0]
        const {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15} = drinkData
        // let array = {1:`${strMeasure1 + strIngredient1}, `, 2:`${strMeasure2 + strIngredient2}, `, 3:`${strMeasure3 + strIngredient3}, `, 4:`${strMeasure4 + strIngredient4}, `, 5:`${strMeasure5 + strIngredient5}, `, 6:`${strMeasure6 + strIngredient6}, `, 7:`${strMeasure7 + strIngredient7}, `, 8:`${strIngredient8 + strMeasure8}, `, 9:`${strIngredient9 + strMeasure9}, `, 10:`${strIngredient10 + strMeasure10}, `, 11:`${strIngredient11 + strMeasure11}, `, 12:`${strMeasure12 + strIngredient12}, `, 13:`${strIngredient13 + strMeasure13}, `, 14:`${strMeasure14 + strIngredient14}, `, 15:`${strMeasure15 + strIngredient15}`}
        let arrayIngredient = [strMeasure1, strIngredient1, strMeasure2, strIngredient2, strMeasure3, strIngredient3, strMeasure4, strIngredient4, strMeasure5, strIngredient5, strMeasure6, strIngredient6, strMeasure7, strIngredient7, strIngredient8, strMeasure8, strIngredient9, strMeasure9, strIngredient10, strMeasure10, strIngredient11, strMeasure11, strMeasure12, strIngredient12, strIngredient13, strMeasure13, strMeasure14, strIngredient14, strMeasure15, strIngredient15]
        let stringIngredient = arrayIngredient.toString().replaceAll(',',' ').trim()
        // let clean = stringIngredient.replaceAll(',',' ').trim()
        // let clean = stringIngredient.replaceAll(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,,'&&',,,,,,,,,,,,,,'&&',,,,,,,,,,,,,'&&',,,,,,,,,,,,'&&',,,,,,,,,,,'&&',,,,,,,,,,'&&',,,,,,,,,'&&',,,,,,,,'&&',,,,,,,'&&',,,,,,'&&',,,,,'&&',,,,'&&',,,','')
        // let clean2 = clean.replaceAll(',,'&&' ,',', ')
        // arrayIngredient = clean.split('')
        // console.log(arrayIngredient)
        // for (let i = arrayIngredient.length - 1; i > -1; i--) {
        //     (arrayIngredient[i] === null) ? arrayIngredient.splice(i,1) : ((arrayIngredient[i] === "") ? arrayIngredient.splice(i,1) : false)
        // }
        const id = drinkData.idDrink
        const name = drinkData.strDrink.toString().replaceAll(' ','-')
        const drinkDiv = document.getElementById(id)
        const drinkIngredients = document.createElement('div')
        const drinkInstructions = document.createElement('div')
        drinkIngredients.setAttribute('class', `ingredient-container ${name}`)
        drinkInstructions.setAttribute('class', `ingredient-container ${name}`)
        // drinkInstructions.setAttribute('id',`${id}-instructions` )
        drinkDiv.append(drinkIngredients)
        drinkDiv.append(drinkInstructions)
        drinkIngredients.innerText = stringIngredient
        drinkInstructions.innerText = drinkData.strInstructions

        // Because I got a little annoyed... passion fruit on a drink with crown and frangelico...
        const worngPicture = document.getElementById('17122')
        worngPicture.innerText = 'Sorry this is not the picture of this drink...'
        worngPicture.style = 'display: flex; justify-content: center; align-content: center; background: black; color: white;'

// Trying to get ingredients to show...........
        // const hoverName = document.getElementById(id)
        // console.log(hoverName)
        // console.log(name)
        // hoverName.addEventListener('onmouseover', ( e => {
        //     const toDisplay = document.getElementsByClassName(name) 
        //     toDisplay.style.opacity = '0.85'
        //     console.log(name)
        // }))
        // hoverName.addEventListener('onmouseenter',displayIngredients(name))
        // hoverName.addEventListener('onmouseleave',hideIngredients(name))

    } catch (error) {
        console.error(error)
    }
}

// Trying to get ingredients to show...........
// function displayIngredients(name) {
//     const toDisplay = document.getElementsByClassName(name) 
//     toDisplay.style.opacity = '0.85'
//     console.log(name)
// }

// function hideIngredients(name) {
//     const toHide = document.getElementsByClassName(name)
//     toHide.style.opacity = '0'
// } 

