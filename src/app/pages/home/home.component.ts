import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private auth: AuthService, private router: Router) { }

  user: string = 'Email';
  password: string = 'Contraseña';
  repeatPassword: string = 'Repita la contraseña';
  bntMessage: string = 'Enviar';

  register: boolean = false;
  error: string = '';

  ngOnInit(): void {
  }

  createUser(email: string, password: string) {
      this.auth.createUser(email, password)
        .then(() => this.router.navigate(['hotels']))
        .catch((error) => this.error = error.message);
  }

  singIn(email: string, password: string) {
    this.auth.singIn(email, password)
      .then(() => this.router.navigate(['hotels']))
      .catch((error) => this.error = error.message);
  }

  sendData(email: string, password: string) {
    this.register ? this.createUser(email, password) : this.singIn(email, password);
  }

}
