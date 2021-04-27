import {Component, OnDestroy, OnInit} from '@angular/core';

import {SearchService} from '../_services/search.service';
import {SearchResult} from '../_models/search-result';
import {FormControl, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({templateUrl: 'search.component.html'})
export class SearchComponent implements OnInit, OnDestroy {
    public searchResult: SearchResult;

    searchForm = new FormGroup({
        query: new FormControl('')
    });

    constructor(private searchService: SearchService) {
        this.searchResult = {words: [], pages: []};
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    public search() {
        this.searchService.submitQuery(this.searchForm.value.query)
            .pipe(first())
            .subscribe(searchResult => {
                this.searchResult = searchResult;
                this.preprocessParagraphs();
            });
    }

    private preprocessParagraphs() {
        for (const word of this.searchResult.words) {
            for (const page of this.searchResult.pages) {
                for (let i = 0; i < page.paragraphs.length; ++i) {
                    page.paragraphs[i] = page.paragraphs[i].replace(new RegExp(word, 'gi'), '<b>$&</b>');
                }
            }
        }
    }
}
