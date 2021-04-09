import {Component, OnDestroy, OnInit} from '@angular/core';

import {SearchService} from '../_services/search.service';
import {SearchResult} from '../_models/search-result';
import {FormControl, FormGroup} from '@angular/forms';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit, OnDestroy {
    public searchResult: SearchResult;

    searchForm = new FormGroup({
        query: new FormControl('')
    });

    constructor(private searchService: SearchService) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    public search() {
        this.searchResult = this.dummy();
        this.preprocessParagraphs();
        // this.searchService.submitQuery(this.searchForm.value.query)
        //     .pipe(first())
        //     .subscribe(searchResults => this.searchResults = searchResults);
    }

    private dummy(): SearchResult {
        return {
            words: ['paragraph'],
            pages: [{
                url: 'http://dummy1.com',
                title: 'dummy1 title',
                paragraphs: [
                    'Un paragraph',
                    'Alt paragraph'
                ]
            }, {
                url: 'http://dummy2.com',
                title: 'dummy2 title',
                paragraphs: [
                    'Doi Un paragraph',
                    'Doi Alt paragraph'
                ]
            }]
        };
    }

    private preprocessParagraphs() {
        for (const word of this.searchResult.words) {
            for (const page of this.searchResult.pages) {
                for (let i = 0; i < page.paragraphs.length; ++i) {
                    page.paragraphs[i] = page.paragraphs[i].replace(word, '<b>' + word + '</b>');
                }
            }
        }
    }
}
