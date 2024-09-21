import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email!: string;
  public senha!: string;

  public login(): void {
    if (this.email == null || this.senha == null) {
      alert('Preencha todos os campos')
    } else {
      alert('Login efetuado com sucesso')
    }
  }
}
