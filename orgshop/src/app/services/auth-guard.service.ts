import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService, private router:Router) { }

  async canActivate(activatedRoute:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    let user = await this.auth.getAuthStatus();
    if (user) return true;
    this.router.navigate(['/login'], {queryParams:{returnUrl:state.url}});
    return false;
    
  }
}
