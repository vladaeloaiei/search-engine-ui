import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public static searchUrl = 'http://localhost:10001/search';

    constructor(
        private router: Router,
    ) {
    }
}
