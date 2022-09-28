export function filterRecipes(recipes, search, cuisine, maximumTime) {

    const MAX_LIMIT = 120;

    function check(str) {
        let subString = search;
        if (subString == "") {
            return false
        } else {
            return str.toLowerCase().includes(subString.toLowerCase())
        }
    }

    return recipes.filter(
        (recipe) => {
            // check max time
            // if the time is greater than to maximumTime its out
            if (maximumTime <= MAX_LIMIT) {
                if (recipe.data.time > maximumTime) {
                    return false
                }
            }
            // if the cuisine doesnt match its out
            // return false
            if (cuisine !== "") {
                if (recipe.data.cuisine !== cuisine) {
                    return false
                }
            }
            if (search !== "") {
                if (check(recipe.data.name)) {
                    return true
                }
                //if cuisine includes search
                if (check(recipe.data.cuisine)) {
                    return true
                }
                // loop all ingredients
                for (let ingredient of recipe.data.ingredients) {
                    if (check(ingredient)) {
                        return true
                    }
                }

                return false
            }
            return true;
        });
}