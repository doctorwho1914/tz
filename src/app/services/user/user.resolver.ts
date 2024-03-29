import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../../components/core/user.service';
import { FirebaseUserModel } from '../../components/core/user.model';

@Injectable()
export class UserResolver implements Resolve<FirebaseUserModel> {

  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) : Promise<FirebaseUserModel> {

    let user = new FirebaseUserModel();

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(res => {
          console.log(res);
          if(res.providerData[0].providerId == 'password'){
          user.image = 'https://via.placeholder.com/400x300';
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        } else {
          user.image = res.photoURL;
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
      }, err => {
        this.router.navigate(['/login']);
        return reject(err);
      })
    })
  }
}
