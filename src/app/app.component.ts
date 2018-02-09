import { Component} from'@angular/core';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormBuilder} from '@angular/forms';
import {UserService}from './services/user.service';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private findUserForm: FormGroup;
  public infoModal : string;
  public user : User;
  public isUserByEmail : boolean;
  
  title = 'app';
  closeResult: string;
    constructor(
       public authService: AuthService,
       public router: Router,
       private modalService: NgbModal,
       public userService: UserService,
       public formBuilder: FormBuilder
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
    
  ngOnInit() {
    this.findUserForm = this.formBuilder.group({
      search: ''
    });
  }
  
   onSubmit(content) {
    this.userService.findByEmail(
      this.findUserForm.get('search').value
    ).subscribe(serverResponse=>{
        this.isUserByEmail = true;
        this.user = serverResponse;
        this.modalService.open(content, { windowClass: 'dark-modal' });
    }, error=>{
        this.isUserByEmail = false;
        this.infoModal = 'No user found with the email address';
        this.modalService.open(content, { windowClass: 'dark-modal' });
    });
  }
  
  findUserByEmail(){
    return this.isUserByEmail;
  }
  
  
}
