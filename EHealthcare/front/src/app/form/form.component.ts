import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  constructor () {}
  age : number=0;
  sex : string;
  education : number=1;
  income : number=0;
  marrige : number;
  work : string;
  residence : string;
  highBP : number=0;
  highChol : number=0;
  cholTest : number=0;
  bmi : number=0;
  glucose : number=0;
  smoker : string;
  stroke : number=0;
  heartDisease : number=0;
  pysichalActiv : number=0;
  fruit : number=0;
  vegetable : number=0;
  drink : number=0;
  healthcare : number=0;
  noMoney : number=0;
  genHealth : number=0;
  mentalHealth : number=0;
  pysichalHealth : number=0;
  stairs : number=0;

}
