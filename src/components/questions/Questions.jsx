import React, { useEffect, useState } from 'react';
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
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

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
      <QuestionsContainer className='!hidden md:!grid'>
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
      <QuestionsContainer className='!grid md:!hidden'>
        {questions.map((question, index) => (
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
    </>
  );
};

export default Questions;
