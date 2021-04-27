import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'categories', component: CategoriesComponent},

    // otherwise redirect to home
    {path: '**', redirectTo: 'search'}
];

export const AppRoutingModule = RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'});
