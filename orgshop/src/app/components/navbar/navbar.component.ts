import { Component, OnInit } from '@angular/core';
import { AngularFireAuth  } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$: Observable<any>
  constructor(private auth: AuthService) {
    this.user$ = auth.getAuthState();
   }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
  }

}
