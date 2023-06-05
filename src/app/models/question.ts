export interface Question {
    id_question: number;
    title: string;
    tag: string;
    level_id: string;
    subject_id: string;
    isForm: boolean;
    question: string;
    alternatives?: Alternative[];
}

export interface Alternative {
  id_alternative: number;
  question_id: number;
  option: string;
  text: string;
}
