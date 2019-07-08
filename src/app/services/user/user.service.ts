import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    get(login: string): Promise<> {
        return this.http.get<any>(`https://api.github.com/users/${login}`).toPromise();
    }

    search(query: string): Promise<> {
        return this.http.get<any[]>(`https://api.github.com/search/users?q=${query}&per_page=20`).toPromise();
    }
}
