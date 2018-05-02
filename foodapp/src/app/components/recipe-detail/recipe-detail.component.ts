import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { DataService } from '../../service/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

	id: string;
  imageUrl: string;
  recipe: Recipe;
  formEnabled: boolean;

  constructor(public dataService: DataService, public route: ActivatedRoute) {
    this.formEnabled = true;
    this.id = this.route.snapshot.params['id'];
  }

  async editRecipe(){
    console.log(this.recipe)
    const response = await this.dataService.putRecipe(this.recipe);
    this.formEnabled = false;
  }

  back(){
  	window.history.back();
  }

  toggleForm() {
    this.formEnabled = !this.formEnabled;
  }

  async deleteRecipe(){
    const response = await this.dataService.deleteRecipe(this.recipe)
    window.history.back();
  }

  async ngOnInit() {
    const response = await this.dataService.getRecipe(this.id)
    // this.recipe = response.json()
    .then(response => this.recipe = response.json())
  }

}















