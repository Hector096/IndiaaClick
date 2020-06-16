import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubcatagoryComponent } from './subcatagory/subcatagory.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const routes: Routes = [

{path:'', component:HomeComponent},
{path:'subcategory/:id', component:SubcatagoryComponent},  
{ path: '**', component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  PageRoutingModule = [ HomeComponent, SubcatagoryComponent,PagenotfoundComponent]