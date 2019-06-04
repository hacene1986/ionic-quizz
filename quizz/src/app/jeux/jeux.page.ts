import { Component, OnInit } from '@angular/core';
import {QuestionsService}from '../questions.service';
import { Question } from 'src/model/question';
@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.page.html',
  styleUrls: ['./jeux.page.scss'],
})
export class JeuxPage implements OnInit {
question: Question;
score = 0;
vrai: boolean = true
message = ''
  constructor(private questionsService: QuestionsService) { }


  ngOnInit() {
    this.question = this.questionsService.getQuestion();

  }

  isTrue(){
  if(this.vrai === this.question.value){
    this.score ++
    this.message = 'Bonne réponse'
  }
 
  }
refrech(){
  this.question = this.questionsService.getQuestion();
 // console.log('oj')
}
}
