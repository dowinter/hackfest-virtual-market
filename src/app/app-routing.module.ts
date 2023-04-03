import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FloorComponent} from "./market/floor/floor.component";

const routes: Routes = [
  { path: '', component: FloorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
