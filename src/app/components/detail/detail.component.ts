import {Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

    public user: User;
    public notFound: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params.login) {
                this.loadUserData(params.login);
            }
        });
    }

    loadUserData(login) {
        this.notFound = false;
        this.userService.get(login)
            .then((res: User) => {
                this.user = res;
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                this.notFound = true;
            });
    }
}
