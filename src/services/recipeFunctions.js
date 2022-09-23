export function filterRecipes(recipes, search) {

    function check(str,) {
        let subString = search;
        return str.toLowerCase().includes(subString.toLowerCase())
    }

    return recipes.filter(
        (recipe) => {
            //if blah blah -> return true


            // if name includes search
            if (check(recipe.data.name)) {
                return true
            }
            // loop all ingredients
            for (let ingredient of recipe.data.ingredients) {
                if (check(ingredient)) {
                    console.log(ingredient, ' was found')
                    return true
                }
            }

            for (let i = 0; i < recipe.data.ingredients.length; i++) {
                let ingredient = recipe.data.ingredients[i];
                if (check(ingredient)) {
                    return true
                }
                // if ing inclues name
                //      return true
                // console.log(recipe.data.ingredients[i])
            }
            // loop all instructions
            for (let instruction of recipe.data.instructions) {
                if (check(instruction)) {
                    return true
                }
            }
            return false
        });

}

// recipe.data.name.toLowerCase().includes(search.toLowerCase())
// recipe.data.ingredients.map().toLowerCase().includes(search.toLowerCase())