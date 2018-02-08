import { Component} from'@angular/core';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
    constructor(
       public authService: AuthService,
       public router: Router
    ) {
        if (!this.authService.isLoggedIn()) {
             this.router.navigate(['/']);
        }
    }
  
    isLoggedIn() {
      return this.authService.isLoggedIn();
    }

    signOut() {
      this.authService.signOut();
    }
  
}
