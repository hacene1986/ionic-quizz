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
reponse = '';
img = ''
vie: number = 2
  constructor(private questionsService: QuestionsService) { }


  ngOnInit() {
    this.question = this.questionsService.getQuestion();
    this.score;
    this.life()
  }

  isTrue(){

  if(this.vrai === this.question.value){
    this.score ++
    this.message = 'Bonne réponse'
    this.reponse = this.question.textComplement
  }else{
    this.score 
    this.reponse = this.question.textComplement
    this.img = ''
  }
 // this.question = this.questionsService.getQuestion();
  }

refrech(){
  this.question = this.questionsService.getQuestion();
  this.reponse = '';
 // this.message = '';
 
}

life(){
  if(this.vie > 0){
    for(let i = 0; i<this.vie; i++){
      this.img = 'https://img.lovepik.com/photo/40003/3178.jpg_wh860.jpg';
     console.log(this.img)
    }
    
  }
  
}

}
