import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {CategoriesComponent} from './categories/categories.component';
import {SearchComponent} from './search/search.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        SearchComponent,
        CategoriesComponent,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
    entryComponents: []
})
export class AppModule {
}
