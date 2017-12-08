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
    this.formEnabled = false;
  }

  edit(){
    this.formEnabled = !this.formEnabled;
  }

  back(){
  	window.history.back();
  }

  async deleteRecipe(){
    // console.log(this.recipe)
    const response = await this.dataService.deleteRecipe(this.recipe)
  }

  async editRecipe(){
    console.log(this.recipe.title)
    const response = await this.dataService.putRecipe(this.recipe)
    this.formEnabled = false;
  }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    const response = await this.dataService.getRecipe(this.id)
    // this.recipe = response.json()
    .then(response => this.recipe = response.json())
  }

}















