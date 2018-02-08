import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { APIService } from '../common/api.service'; 
import { Observable } from 'rxjs/Observable';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TodoService extends APIService{
    private resourceUrl = 'api/todo';
        
    constructor(    
        public config: AppConfiguration,
        public authService: AuthService,
        public http: Http) { 
            super(config, authService, http);
        }

    list(): Observable<Todo[]> {
        return this.get(this.resourceUrl);
    }
    
    create(description,priority,completed){
        return this.post(this.resourceUrl, { description, priority,completed }).map(loginResponse => {
            if (loginResponse) {
             
            }
          });
    }
}
