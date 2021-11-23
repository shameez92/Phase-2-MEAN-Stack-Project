import { Component, OnInit } from '@angular/core';
import { QuestionsModel } from '../models/questions.model';
import { OnlineTestService } from '../services/online-test.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-online-exam',
  templateUrl: './online-exam.component.html',
  styleUrls: ['./online-exam.component.css']
})
export class OnlineExamComponent implements OnInit {
  public examQuestions:Array<QuestionsModel> = [];
  public totalScore:number;
  public displayResult:boolean = false;
  public incorrectAnswers:Array<number> = [];

  constructor(
    public testService:OnlineTestService
  ) { }

  ngOnInit(): void {
      this.testService.getQuestions().subscribe
      (response => this.examQuestions = response,
       error => console.log(error));
       
  }

  public evaluateAnswers(questionsRef:NgForm):void {
    let userAnswers = questionsRef.value;
    this.totalScore = this.getTotalScore(userAnswers);
    this.displayResult = true;
  }

  public getTotalScore(userAnswers): number {
    this.totalScore = 0;
    this.incorrectAnswers = [];
    this.examQuestions[0].answer === userAnswers.answer0 ? this.totalScore++ : this.incorrectAnswers.push(0);
    this.examQuestions[1].answer === userAnswers.answer1 ? this.totalScore++ : this.incorrectAnswers.push(1);
    this.examQuestions[2].answer === userAnswers.answer2 ? this.totalScore++ : this.incorrectAnswers.push(2);
    this.examQuestions[3].answer === userAnswers.answer3 ? this.totalScore++ : this.incorrectAnswers.push(3);
    this.examQuestions[4].answer === userAnswers.answer4 ? this.totalScore++ : this.incorrectAnswers.push(4);
    this.examQuestions[5].answer === userAnswers.answer5 ? this.totalScore++ : this.incorrectAnswers.push(5);
    this.examQuestions[6].answer === userAnswers.answer6 ? this.totalScore++ : this.incorrectAnswers.push(6);
    this.examQuestions[7].answer === userAnswers.answer7 ? this.totalScore++ : this.incorrectAnswers.push(7);
    this.examQuestions[8].answer === userAnswers.answer8 ? this.totalScore++ : this.incorrectAnswers.push(8);
    this.examQuestions[9].answer === userAnswers.answer9 ? this.totalScore++ : this.incorrectAnswers.push(9);

    return this.totalScore;
  }

  public reset():void {
    this.totalScore =0;
    this.displayResult = false;
    this.incorrectAnswers = [];
  }

}
