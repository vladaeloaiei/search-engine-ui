import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {DomSanitizer} from '@angular/platform-browser';
import {DetailedCategory} from '../_models/detailed-category';

@Injectable({providedIn: 'root'})
export class CategoryService {
    constructor(private http: HttpClient,
                private sanitizer: DomSanitizer) {
    }

    load() {
        return this.http.get<DetailedCategory[]>(AppComponent.categoryUrl);
    }
}
