import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class DataService {

	recipe: Recipe;
	recipes: Recipe[];
	apiUrl: string;

	constructor(private http: Http) {
		this.apiUrl = 'http://localhost:3006/api/'
	}

	getRecipes(){
		return this.http.get(`${this.apiUrl}recipe/`).toPromise();
	}

	getRecipe(id) {
		return this.http.get(`${this.apiUrl}recipe/${id}`).toPromise()
	}

	addRecipe(recipe){
		return this.http.post(`${this.apiUrl}recipe/`, recipe).toPromise();
	}

	putRecipe(recipe) {
		console.log('service ' + recipe)
		return this.http.put('http://localhost:3006/api/recipe/' + recipe._id, recipe).toPromise()
	}

	deleteRecipe(recipe){
		return this.http.delete(`${this.apiUrl}recipe/${recipe._id}`).toPromise();
	}

}


























