import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Another test recipe', 'this is a naother test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    ];

    getRecipes() {
        return this.recipes.slice(); //slice return new array which is exact copy
    }
}