import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import  firebase from 'firebase/compat/app';
import { type } from 'os';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn:boolean;

  constructor(private afAuth: AngularFireAuth, private route:ActivatedRoute,
       private router:Router, private userService:UserService) { 
    this.isUserLoggedIn=false;
  }

  login(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')|| '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(user=>{
        if (user.user) 
        {
          this.userService.addUser(user.user);
          localStorage.setItem('login','true');
          let returnUrl = localStorage.getItem('returnUrl')|| '';
          this.router.navigateByUrl(returnUrl)
        }
    });
  }

  logout(){
    this.afAuth.signOut().then(()=>{localStorage.removeItem('login')});
  }

  getAuthState():Observable<firebase.User| null>{
    return this.afAuth.authState;
  }

  getAuthStatus():boolean{
    let val= localStorage.getItem('login');
    if (val) return true;
    return false;
  }
}
