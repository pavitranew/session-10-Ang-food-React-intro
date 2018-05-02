import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { DataService } from '../../service/data.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

	pageTitle: string;
	recipe: Recipe;
	recipes: object[];
	add = true;
	id: string;

	addOne(){
		this.add = !this.add;
	}

	async addRecipe(form: NgForm){
		const response =  await this.dataService.addRecipe(form.value)
	}

	constructor(public dataService: DataService) {
		this.pageTitle = 'Recipes';
	}

	async ngOnInit() {
		const response =  await this.dataService.getRecipes()
		this.recipes = response.json();
	}

}































