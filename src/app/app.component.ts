import { Component} from'@angular/core';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  closeResult: string;
    constructor(
       public authService: AuthService,
       public router: Router,
       private modalService: NgbModal
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
    
      open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
  
}
