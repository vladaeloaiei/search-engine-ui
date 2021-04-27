import {Component, OnDestroy, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {DetailedCategory} from '../_models/detailed-category';
import {CategoryService} from '../_services/category.service';

@Component({templateUrl: 'categories.component.html'})
export class CategoriesComponent implements OnInit, OnDestroy {
    public categories: DetailedCategory[];

    constructor(private categoryService: CategoryService) {
        this.categories = [];
    }

    ngOnInit() {
        this.categoryService.load()
            .pipe(first())
            .subscribe(categories => {
                this.categories = categories;
            });
    }

    ngOnDestroy() {
    }
}
