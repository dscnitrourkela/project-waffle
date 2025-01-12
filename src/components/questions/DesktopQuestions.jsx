import React from 'react';
import { QuestionsContainer, Question, QuestionAnswer, QuestionHeading } from './styles';
import { QUESTIONS_DATA } from '@/config/content/questions/index';

const DesktopQuestions = () => {
  return (
    <QuestionsContainer className='!hidden md:!grid'>
      <div className='space-y-6'>
        {QUESTIONS_DATA.map((question) => {
          if (question.id % 2 !== 0) {
            return (
              <Question key={question.id}>
                <QuestionHeading>{question.question}</QuestionHeading>
                <QuestionAnswer>{question.answer}</QuestionAnswer>
              </Question>
            );
          }
        })}
      </div>
      <div className='space-y-6'>
        {QUESTIONS_DATA.map((question) => {
          if (question.id % 2 === 0) {
            return (
              <Question key={question.id}>
                <QuestionHeading>{question.question}</QuestionHeading>
                <QuestionAnswer>{question.answer}</QuestionAnswer>
              </Question>
            );
          }
        })}
      </div>
    </QuestionsContainer>
  );
};

export default DesktopQuestions;
