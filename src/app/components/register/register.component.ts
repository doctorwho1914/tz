import {Component} from '@angular/core';
import {Router, Params} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

    registerForm: FormGroup;
    errorMessage = '';
    successMessage = '';

    constructor(
        private router: Router,
        public authService: AuthService,
        private fb: FormBuilder
    ) {
        this.createForm();
    }

    createForm() {
        this.registerForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    tryRegister(value) {
        this.authService.doRegister(value)
            .then(res => {
                console.log(res);
                this.errorMessage = '';
                this.successMessage = 'Your account has been created';
                this.router.navigate(['/']);
            })
            .catch(err => {
                console.log(err);
                this.errorMessage = err.message;
                this.successMessage = '';
            });
    }

    tryGitHubLogin() {
        this.authService.doGitHubLogin()
            .then(res => {
                    this.router.navigate(['/']);
                }, err => console.log(err)
            );
    }
}
