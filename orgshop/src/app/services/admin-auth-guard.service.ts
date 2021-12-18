import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private auth: AuthService, private userService:UserService) { }

  // canActivate(){
  //   return this.auth.getAuthState().subscribe(fire_user => 
  //         {
            
  //           let v = fire_user.uid 
  //           this.userService.getUser()
  //         }
  //         )
  // }
}
