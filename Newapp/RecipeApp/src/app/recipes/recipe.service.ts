import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";


export  class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pasta','Test description','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.826.620.suffix/1615916524567.jpeg'),
        new Recipe('2nd Pasta','Test description','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.826.620.suffix/1615916524567.jpeg')
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}