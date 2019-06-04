import { Injectable } from '@angular/core';
import {Question} from '../model/question';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Question[];
  constructor() {

    this.questions = [
      new Question('La Belgique a gagné la dérniére coupe du monde ?', false, 'La France', 'facile', 'sport'),
      new Question('Le JavaScript est un langage de programmation ?', true, 'Oui le JavaScript nous permet de faire de la programmation', 'difficile', 'Informatique'),
      new Question('Le 14 juillet est une fète nationale ?', true, 'oui c\'est vrais', 'facile', 'histoire')
    ];
   }

   getQuestion(){
    var rand = this.questions[Math.floor(Math.random() * this.questions.length)]
   // console.log(rand)
   return rand
   }

   
}
