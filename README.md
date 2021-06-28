# 

# Project Overview

## Project Name

https://sjh401.github.io/What_Should_You_Drink/

## Project Description

Website will return a list of cocktail ideas with ingredients list and measurements. I will include a age verification and selection for just non alc drinks.

## API and Data Sample

Cocktail API 

By Ingredient - www.thecocktaildb.com/api/json/v1/1/filter.php?i=ingredient

By Category - www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

By Drink ID - www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11147

![Screen Shot 2021-06-22 at 8 50 44 AM](https://user-images.githubusercontent.com/85095722/122951682-14ca3d80-d343-11eb-9587-8a1d0fd751f5.png)

![Screen Shot 2021-06-22 at 8 51 36 AM](https://user-images.githubusercontent.com/85095722/122951699-185dc480-d343-11eb-9b26-b130e78c30ec.png)



## Wireframes
![What_Should_You_Drink_Wireframe (1)](https://user-images.githubusercontent.com/85095722/122952773-dc772f00-d343-11eb-9efe-9379e68a6350.jpg)


#### MVP 

- Filter drinks by ingredient and return a list of 9
- Display drink image and name
- Onclick to show instructions and ingredients for drink
- Add no more results styling to flexboxes for results less than 9
- Remove previous results

#### PostMVP  

- Use local storage to save user favorites to replace list
- Add compare feature to look at multiple drinks
- Style Search botton with drinks glass
- Change backgorund image for filtered category
- Create age verification/non-alc filter

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 22| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|June 23| Pseudocode / actual code | Complete
|June 24| Initial Clickable Model  | Complete
|June 25| MVP | Complete
|June 28| Presentations | Complete

## Priority Matrix

![What_Should_You_Drink_Priority_Matrix (1)](https://user-images.githubusercontent.com/85095722/122944981-dc743080-d33d-11eb-8831-01a53763d1df.jpg)


## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Boilerplate HTML | H | 0.5hrs | 0.5hrs | 0.5hrs |
| Gathering API Data | H | 2hrs| 1.5hrs | 2hrs |
| Form Submission | H | 2.5hrs | 2hrs | 4hrs |
| Filtering Alc vs Non | H | 3hrs | 3hrs | 7hrs |
| Displaying Results to DOM| H | 3hrs | 4hrs | 11hrs |
| Styling Flexbox Results | H | 3hrs | 3hrs | 14hrs |
| Results Styling | H | 3hrs| 2hrs | 16hrs |
| Onclick Result Responsiveness | H | 3hrs | 3.5hrs | 19.5hrs |
| Background Layout & Arrangement | H | 3hrs | 2.5hrs | 22hrs |
| Functionality & Responsiveness Review | H | 3hrs | 4hrs | 26hrs |
| CSS Fonts & Button Styling | M | 2.5hrs |	3hrs | 29hrs |
| Favorite Saver & Styling | M | 2hrs |	X | X |
| Presentation Final Check | H | 2hrs | 3hrs | 32hrs |
| Total | H | 32.5hrs|  | 32hrs |

## Code Snippet

Getting rid of null values. Not sure if it's best way or if there's a trick to doing it, but I thought it turned out alright.

- const drinkData = response.data.drinks[0]
- const {strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15} = drinkData
- let arrayIngredient = [strMeasure1, strIngredient1, strMeasure2, strIngredient2, strMeasure3, strIngredient3, strMeasure4, strIngredient4, strMeasure5, strIngredient5, strMeasure6, strIngredient6, strMeasure7, strIngredient7, strIngredient8, strMeasure8, strIngredient9, strMeasure9, strIngredient10, strMeasure10, strIngredient11, strMeasure11, strMeasure12, strIngredient12, strIngredient13, strMeasure13, strMeasure14, strIngredient14, strMeasure15, strIngredient15]
- let stringIngredient = arrayIngredient.toString().replaceAll(',',' ').trim()

## Change Log
Just left the drink results number at default, originally thought I'd be getting hundreds results per 'big' search, so no need for 'no results formatting' image. Added return to top link at bottom or page and unit conversions.
