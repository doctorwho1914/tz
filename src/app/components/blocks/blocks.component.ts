import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-blocks',
    templateUrl: './blocks.component.html',
    styleUrls: ['./blocks.component.sass']
})
export class BlocksComponent implements OnInit {


    public userForm: FormGroup = new FormGroup({
        name: new FormControl('')
    });
    public users: any[];

    constructor(
        private userService: UserService
    ) {
    }

    ngOnInit() {
    }

    search(data) {
        this.userService.search(data.name)
          .then((res: any) => {
              this.users = res.items;
              console.log(res);
          });
    }

}
