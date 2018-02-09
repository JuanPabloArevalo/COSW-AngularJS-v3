import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import {User} from '../models/user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService extends APIService{
 
constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

    list(): Observable<User[]> {
        return this.get('user/users');
    }
    
    
    findByEmail(email): Observable<User> {
        return this.get('user/'+email);
    }

  create(name: string, lastname: string, image: string) {
    return this.post('user/users', { name, lastname, image }).map(loginResponse => {
            if (loginResponse) {
             
            }
          });
  }
  
    login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }
}
