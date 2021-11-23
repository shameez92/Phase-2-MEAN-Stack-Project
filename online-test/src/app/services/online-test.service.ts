import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsModel } from '../models/questions.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnlineTestService {

  constructor(public http:HttpClient) { }

  public getQuestions(): Observable<QuestionsModel[]> {
    return this.http.get<QuestionsModel[]>("../assets/questions.json");
  }
}
