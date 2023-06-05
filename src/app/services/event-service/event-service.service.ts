import { EventEmitter, Injectable } from '@angular/core';
import { Learn } from 'src/app/models/learn';
import { Question } from 'src/app/models/question';

@Injectable()
export class EventService {
  eventQuestionSelected: EventEmitter<Question> = new EventEmitter<Question>();

  eventLearnSelected: EventEmitter<Learn> = new EventEmitter<Learn>();

  constructor() { }
}
