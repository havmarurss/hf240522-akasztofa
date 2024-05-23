import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

// nincs kész
function letterValidator() {
  return null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  letterInput = new FormControl('', letterValidator);
  wordToGuess: string = 'acceleration';
  lettersInWord: string[];
  lettersGuessed: string[];
  wordGuessed: string = '_'.repeat(this.wordToGuess.length);
  letterMap = new Map<string, boolean>();

  submitLetter() {
    if (!this.letterInput.valid) {
      return;
    }
    let foundMatch: boolean = false;
    for (let i = 0; i < this.lettersInWord.length; i++) {
      if (this.lettersInWord[i] === this.letterInput.value) {
        this.lettersGuessed[i] = this.lettersInWord[i];
        foundMatch = true;
      }
    }
    this.wordGuessed = this.lettersGuessed.join('');
    this.letterMap.set(this.letterInput.value, foundMatch);
  }

  ngOnInit(): void {
    this.lettersInWord = this.wordToGuess.split('');
    this.lettersGuessed = this.wordGuessed.split('');
  }
}
