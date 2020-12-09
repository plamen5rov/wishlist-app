import { PageNotFoundComponent } from './navigation/page-not-found/page-not-found.component';
import { ShoppingListComponent } from './wishlist/shopping-list/shopping-list.component';
import { MyGiftsComponent } from './wishlist/my-gifts/my-gifts.component';
import { AllGiftsComponent } from './wishlist/all-gifts/all-gifts.component';
import { GiftComponent } from './wishlist/gift/gift.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'wishlist', component: GiftComponent, canActivate: [AuthGuard]},
  {path: 'all-gifts', component: AllGiftsComponent, canActivate: [AuthGuard]},
  {path: 'my-gifts', component: MyGiftsComponent, canActivate: [AuthGuard]},
  {path: 'gift', component: GiftComponent, canActivate: [AuthGuard]},
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]},
  //{path: '**', pathMatch: 'full', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
