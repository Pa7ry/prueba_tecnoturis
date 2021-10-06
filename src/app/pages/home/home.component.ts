import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  user: string = "Nombre de usuario";
  password: string = "Contraseña";
  repeatPassword: string = "Repita la contraseña";

  ngOnInit(): void {
  }

}
