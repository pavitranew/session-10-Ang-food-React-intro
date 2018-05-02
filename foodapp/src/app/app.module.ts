import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './service/data.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { DeliveryComponent } from './components/delivery/delivery.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full"},
  { path: 'recipes', component: RecipesComponent},
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'delivery', component: DeliveryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    NavComponent,
    HomeComponent,
    ReviewsComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

















