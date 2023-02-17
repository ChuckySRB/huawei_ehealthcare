import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelArtsDiabetes } from './model/modelartsdiabetes';
import { ModelArtsStroke } from './model/modelartsstroke';

@Injectable({
  providedIn: 'root'
})
export class ModelartsService {

  constructor(private http: HttpClient) { }

  urlDiabetes = 'http://'
  urlStroke = 'http://'

  submitDiabetes(diabetes: ModelArtsDiabetes){
    return this.http.post(`${this.urlDiabetes}`, diabetes)
  }

  submitStroke(stroke: ModelArtsStroke ){
    return this.http.post(`${this.urlStroke}`, stroke)
  }






}
