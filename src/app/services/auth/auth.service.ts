import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = getAuth();

  constructor() { }

  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  singIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }
}
