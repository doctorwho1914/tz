import {Component} from '@angular/core';
import {AuthService} from './components/core/auth.service';
import {UserService} from './components/core/user.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'tz';

    constructor(
        public userService: UserService,
        public authService: AuthService,
        private location : Location
    ) {

    }

    logout() {
        this.authService.doLogout()
            .then((res) => {
                this.location.back();
            }, (error) => {
                console.log('Logout error', error);
            });
    }
}
