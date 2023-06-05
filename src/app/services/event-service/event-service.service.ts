import { EventEmitter, Injectable } from '@angular/core';
import { Learn } from 'src/app/models/learn';
import { Question } from 'src/app/models/question';
import { Subject } from 'src/app/models/subject';

@Injectable()
export class EventService {
  eventQuestionSelected: EventEmitter<Question> = new EventEmitter<Question>();

  eventLearnSelected: EventEmitter<Learn> = new EventEmitter<Learn>();

  eventSubjectSelected: EventEmitter<Subject> = new EventEmitter<Subject>();

  constructor() { }
}
