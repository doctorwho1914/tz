import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlocksComponent} from './components/blocks/blocks.component';
import {TablesComponent} from './components/tables/tables.component';
import {DetailComponent} from './components/detail/detail.component';


const routes: Routes = [
    {path: '', redirectTo: 'blocks', pathMatch: 'full'},
    {path: 'blocks', component: BlocksComponent},
    {path: 'tables', component: TablesComponent},
    {path: 'detail/:login', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
