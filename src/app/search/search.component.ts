import {Component, OnDestroy, OnInit} from '@angular/core';

import {SearchService} from '../_services/search.service';
import {SearchResult} from '../_models/search-result';
import {FormControl, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({templateUrl: 'search.component.html'})
export class SearchComponent implements OnInit, OnDestroy {
    public searchResult: SearchResult;
    public queryString: string;
    public pageNumber: number;
    public defaultText: string;

    searchForm = new FormGroup({
        query: new FormControl('')
    });

    constructor(private searchService: SearchService) {
        this.searchResult = {result: {words: [], pages: []}, slice: -1, slices: 0};
        this.pageNumber = this.searchResult.slice;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    public search() {
        this.queryString = this.searchForm.value.query;

        this.sendSearch(0);
    }

    public sendSearch(slice: number) {
        this.searchService.submitQuery(this.queryString, slice)
            .pipe(first())
            .subscribe(searchResult => {
                this.searchResult = searchResult;
                this.preprocessParagraphs();
            });
    }

    private preprocessParagraphs() {
        this.pageNumber = this.searchResult.slice;

        if (this.searchResult.result.pages.length <= 0) {
            this.defaultText = 'No results found.';
        } else {
            this.defaultText = '';
        }

        for (const word of this.searchResult.result.words) {
            for (const page of this.searchResult.result.pages) {
                for (let i = 0; i < page.paragraphs.length; ++i) {
                    page.paragraphs[i] = page.paragraphs[i].replace(new RegExp(word, 'gi'), '<b>$&</b>');
                }
            }
        }
    }

    onChangePage(pageNumber: number) {
        if (pageNumber >= 0 && pageNumber < this.searchResult.slices) {
            this.pageNumber = pageNumber;
        }

        this.sendSearch(this.pageNumber);
    }

    counter(i: number) {
        if (i > 0) {
            return new Array(i);
        } else {
            return new Array(0);
        }
    }
}
