import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {DomSanitizer} from '@angular/platform-browser';
import {SearchResult} from '../_models/search-result';

@Injectable({providedIn: 'root'})
export class SearchService {
    constructor(private http: HttpClient,
                private sanitizer: DomSanitizer) {
    }

    submitQuery(query: string, slice: number) {
        return this.http.get<SearchResult>(AppComponent.searchUrl,
            {
                params: {
                    query,
                    slice: slice.toString()
                }
            }
        );
    }
}
