import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlocksComponent} from './components/blocks/blocks.component';
import {TablesComponent} from './components/tables/tables.component';
import {DetailComponent} from './components/detail/detail.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {UserResolver} from './services/user/user.resolver';
import {AuthGuard} from './components/core/auth.guard';


const routes: Routes = [
    {path: '', redirectTo: 'blocks', pathMatch: 'full',  resolve: { data: UserResolver}},
    {path: 'blocks', component: BlocksComponent,  resolve: { data: UserResolver}},
    {path: 'tables', component: TablesComponent,  resolve: { data: UserResolver}},
    {path: 'detail/:login', component: DetailComponent,  resolve: { data: UserResolver}},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
