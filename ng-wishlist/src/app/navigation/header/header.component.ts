import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
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

  onToggleSidenav(){
    this.sidenavToggle.emit();

  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
