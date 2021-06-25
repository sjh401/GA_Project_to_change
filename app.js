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
    // const pageTitle = document.querySelector('#pageTitle')
    return ingredient
}))

// const generic = document.querySelector('.drink-container')
// generic.addEventListener('mouseover', () => {
//     drinkIngredients.classList.toggle('show')
//     drinkInstructions.classList.toggle('show')
// })
// if (ingredient === 'vodka' || ingredient === 'Vodka' ) {
//     pageTitle.backgroundImage = "url('https://i.imgur.com/vETgiD8.jpg?1')"
// } else if (ifgredient === 'gin' || ingredient === 'Gin' ) {
//     pageTitle.backgroundImage = "url('https://i.imgur.com/bkLTXN2.jpg?1')"
// } else if (ingredient === 'rum' || ingredient === 'Rum' ) {
//     pageTitle.backgroundImage = "url('https://i.imgur.com/jSbXZ0k.jpg?1')"
// } else if (ingredient === 'tequila' || ingredient === 'Tequila' ) {
//     pageTitle.backgroundImage = "url('https://i.imgur.com/PiyFOPV.jpg?1')"
// } else if (ingredient === 'bourbon' || ingredient === 'Bourbon' ) {
//     pageTitle.backgroundImage = "url('https://i.imgur.com/MUQwimK.jpg')"
// } else if (ingredient === 'whisky' || ingredient === 'Whisky' ) {
//     pageTitle.backgroundImage = "url('https://i.imgur.com/clvnT0B.jpg?1')"
// } else if (ingredient === 'scotch' || ingredient === 'Scotch' ) {
//     pageTitle.backgroundImage = "url('https://i.imgur.com/clvnT0B.jpg?1')"
// }

const grabDrinkData = async (drinkID) => {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`
        const response = await axios.get(url)
        // console.log(response)
        const drinkData = response.data.drinks[0]
        const {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15} = drinkData
        let arrayIngredient = [strMeasure1, strIngredient1, strMeasure2, strIngredient2, strMeasure3, strIngredient3, strMeasure4, strIngredient4, strMeasure5, strIngredient5, strMeasure6, strIngredient6, strMeasure7, strIngredient7, strIngredient8, strMeasure8, strIngredient9, strMeasure9, strIngredient10, strMeasure10, strIngredient11, strMeasure11, strMeasure12, strIngredient12, strIngredient13, strMeasure13, strMeasure14, strIngredient14, strMeasure15, strIngredient15]
        let stringIngredient = arrayIngredient.toString().replaceAll(',',' ').trim()
        const id = drinkData.idDrink
        // const name = drinkData.strDrink.toString().replaceAll(' ','-')
        const drinkDiv = document.getElementById(id)
        const drinkIngredients = document.createElement('div')
        const drinkInstructions = document.createElement('div')
        const drinkIngInst = document.createElement('div')
        drinkIngInst.setAttribute('class', `container`)
        drinkDiv.append(drinkIngInst)
        drinkIngredients.setAttribute('class', `ingredient-container`)
        drinkInstructions.setAttribute('class', `ingredient-container`)
        // drinkIngredients.setAttribute('class', `ingredient-container ${name}`)
        // drinkInstructions.setAttribute('class', `ingredient-container ${name}`)
        // drinkInstructions.setAttribute('id',`${id}-instructions` )
        drinkIngInst.append(drinkIngredients)
        drinkIngInst.append(drinkInstructions)
        drinkIngredients.innerText = stringIngredient
        const instructions = drinkData.strInstructions.toString().replaceAll(`<br>`,' ')
        drinkInstructions.innerText = instructions

        // Because I got a little annoyed... passion fruit on a drink with crown and frangelico...
        const worngPicture = document.getElementById('17122')
        if(worngPicture !== null) {
        worngPicture.innerText = 'Sorry this is not the picture of this drink...'
        worngPicture.style = 'display: flex; justify-content: center; align-content: center; background: black; color: white;'
        }

    } catch (error) {
        console.error(error)
    }
}