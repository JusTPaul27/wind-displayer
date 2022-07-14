import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './component/insert/insert.component';
import { ListComponent } from './component/list/list.component';

const routes: Routes = [
  {path: 'insert', component: InsertComponent},
  {path: 'list', component: ListComponent},
  {path: '', redirectTo: '/insert', pathMatch: 'full'},
  {path: '**', redirectTo: '/insert'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
