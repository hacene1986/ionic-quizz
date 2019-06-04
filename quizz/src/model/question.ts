export class Question {
    text: string;
    value: boolean;
    textComplement: string;
    difficult: string;
    categorie: string;

    constructor(text: string, value: boolean, textComplement: string, difficult: string, categorie: string){
        this.text = text;
        this.value = value;
        this.textComplement = textComplement;
        this.difficult = difficult;
        this.categorie = categorie;
    }
}