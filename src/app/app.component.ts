import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    protected _title = 'skilltree';

    set title(title: string) {
        this._title = title;
    }

    get title(): string {
        return this._title;
    }
}
