import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {
  public email!: string;
  public senha!: string;

  public login(): void {
    alert('Login')
  }
}
