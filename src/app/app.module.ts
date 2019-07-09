import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlocksComponent} from './components/blocks/blocks.component';
import {TablesComponent} from './components/tables/tables.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RegisterComponent } from './components/register/register.component';
import {AuthService} from './components/core/auth.service';
import {UserService} from './components/core/user.service';
import {AuthGuard} from './components/core/auth.guard';
import {UserResolver} from './services/user/user.resolver';
import {LoginComponent} from './components/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        BlocksComponent,
        TablesComponent,
        DetailComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
    ],
    providers: [AuthService, UserService, AuthGuard, UserResolver],
    bootstrap: [AppComponent]
})
export class AppModule {
}
