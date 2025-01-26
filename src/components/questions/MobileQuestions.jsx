import React from 'react';
import { QuestionsContainer, Question, QuestionAnswer, QuestionHeading } from './styles';
import { QUESTIONS_DATA } from '@/config/content/prizes/questions/index';

const MobileQuestions = ({ activeQuestion, toggleQuestion }) => {
  return (
    <QuestionsContainer className='!grid md:!hidden'>
      {QUESTIONS_DATA.map((question, index) => (
        <Question key={index}>
          <QuestionHeading onClick={() => toggleQuestion(index)}>
            {question.question}
          </QuestionHeading>
          <QuestionAnswer
            className={`${activeQuestion === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-200 ease-in-out`}
          >
            {question.answer}
          </QuestionAnswer>
        </Question>
      ))}
    </QuestionsContainer>
  );
};

export default MobileQuestions;
