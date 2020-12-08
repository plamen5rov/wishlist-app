import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() user: string;
  isAuth = false;
  authSubscription: Subscription
  constructor(private authService: AuthService) {  }
  
  ngOnInit() {
    this.authSubscription = this.authService
    .authChange
    .subscribe(authStatus => {
      this.isAuth = authStatus;
      this.user = this.authService.user;
      
    });
  }
    
  
}
