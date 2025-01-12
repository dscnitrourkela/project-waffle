import React from 'react';
import { H1, Paragraph } from '../shared/typography/Headings';
import {
  QuestionsHeadingContainer,
  ParagrapgContainer,
  QuestionsContainer,
  Question,
  QuestionAnswer,
  QuestionHeading,
} from './styles';
import questions from '@/config/content/questions/index';

const Questions = () => {
  return (
    <>
      <QuestionsHeadingContainer>
        <H1>Questions?</H1>
      </QuestionsHeadingContainer>
      <ParagrapgContainer>
        <Paragraph className='!text-center !font-extralight'>
          New to hackathon? Don&apos;t worry we got you covered with all the basic information you
          need.
        </Paragraph>
      </ParagrapgContainer>
      <QuestionsContainer>
        <div className='space-y-6'>
          {questions.map((question) => {
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
          {questions.map((question) => {
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
    </>
  );
};

export default Questions;
