import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlocksComponent} from './components/blocks/blocks.component';
import {TablesComponent} from './components/tables/tables.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
    declarations: [
        AppComponent,
        BlocksComponent,
        TablesComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
