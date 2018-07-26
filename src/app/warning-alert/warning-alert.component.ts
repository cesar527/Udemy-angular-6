import {Component} from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
    <p> Alert!!!</p>
    `,
    styles: [
        `
        p {
            padding: 20px;
            background-color: aquamarine;
            color: darkred;
            font-size: xx-large;
            border: 3px solid darkslategrey;
        }
        `
    ]
})
export class WarningAlertComponent {

}
