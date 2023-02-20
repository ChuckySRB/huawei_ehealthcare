import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private router:Router){
    this.router.navigate(["http://localhost:4200/patient"]);
  }
}
