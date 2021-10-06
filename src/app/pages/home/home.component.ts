import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private auth: AuthService) { }

  user: string = 'Email';
  password: string = 'Contraseña';
  repeatPassword: string = 'Repita la contraseña';
  bntMessage: string = 'Enviar';

  register: boolean = false;
  error: string = '';

  ngOnInit(): void {
  }

  createUser(email: string, password: string, repetaPassword?: string) {
    // if(password === repetaPassword) {
      this.auth.createUser(email, password)
        .then(() => {
          console.log('usuario creado');
        })
        .catch((error) => this.error = error.message);
    // } else {
    //   this.error = "Las contraseñas no coinciden"
    // }
  }

  singIn(email: string, password: string) {
    this.auth.singIn(email, password)
      .then(() => {
        console.log('usuario logeado');
      })
      .catch((error) => this.error = error.message);
  }

  sendData(email: string, password: string, repetaPassword?: string) {
    console.log(email, password, repetaPassword)
    this.register ? this.createUser(email, password, repetaPassword) : this.singIn(email, password);
  }

}
