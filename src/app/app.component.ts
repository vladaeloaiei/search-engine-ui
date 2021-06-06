import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public static searchUrl = 'http://localhost:10001/search/slice';
    public static categoryUrl = 'http://localhost:10001/detailedcategory';

    constructor(
        public router: Router,
    ) {
    }
}
