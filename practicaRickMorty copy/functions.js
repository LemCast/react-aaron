console.log("Cocteles");

async function obtenerCocktails() {
    const response1 = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );

    const data1 = await response1.json();

    const response2 = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito"
    );

    const data2 = await response2.json();

    const response3 = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini"
    );

    const data3 = await response3.json();

    return [
        data1.drinks[0],
        data2.drinks[0],
        data3.drinks[0]
    ];
}

console.log(obtenerCocktails());

function pintarCocktails(cocktails) {
    console.log("Pintando cocktails:", cocktails);

    let tarjetasHTML = "";

    cocktails.forEach(cocktail => {
        tarjetasHTML += `
        <div class="card">
            <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
            <h3>${cocktail.strDrink}</h3>
            <p>${cocktail.strCategory}</p>
            <p>${cocktail.strAlcoholic}</p>
            <p>${cocktail.strGlass}</p>
        </div>
        `;
    });

    document.getElementById("main-container").innerHTML = tarjetasHTML;
}

obtenerCocktails().then(pintarCocktails);