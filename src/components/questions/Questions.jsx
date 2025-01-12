import React, { useState } from 'react';
import { H1, Paragraph } from '../shared/typography/Headings';
import { QuestionsHeadingContainer, ParagrapgContainer } from './styles';
import MobileQuestions from './MobileQuestions';
import DesktopQuestions from './DesktopQuestions';

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
      <MobileQuestions toggleQuestion={toggleQuestion} activeQuestion={activeQuestion} />
      <DesktopQuestions />
    </>
  );
};

export default Questions;
