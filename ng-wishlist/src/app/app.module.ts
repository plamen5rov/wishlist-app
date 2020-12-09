import { RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutComponent } from './pages/about/about.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AllGiftsComponent } from './wishlist/all-gifts/all-gifts.component';
import { MyGiftsComponent } from './wishlist/my-gifts/my-gifts.component';
import { GiftComponent } from './wishlist/gift/gift.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ShoppingListComponent } from './wishlist/shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './navigation/page-not-found/page-not-found.component';
import { WishlistComponent } from './wishlist/wishlist/wishlist.component';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    AboutComponent,
    AllGiftsComponent,
    MyGiftsComponent,
    GiftComponent,
    HeaderComponent,
    SidenavListComponent,
    ShoppingListComponent,
    PageNotFoundComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
