import styled from "styled-components/macro";
import {motion, AnimateSharedLayout} from 'framer-motion';
import { useScroll } from "../../useScroll";
import { useRef } from 'react';


const AboutFaq = ()=>{

  const wrapperRef = useRef(null);
  const answerRef = useRef(null);

  const toggleAnswer = (e)=>{
    let answer = e.target.parentElement.children[1].children[0];
    let wrapper = e.target.parentElement.children[1];
    let answerHeight = answer.getBoundingClientRect().height;
    let wrapperHeight = wrapper.getBoundingClientRect().height;
    if(wrapperHeight === 0){
      wrapper.style.height = `${answerHeight}px`
    } 
    else {
      wrapper.style.height = '0px';
    }
  }

  const [ element, controls ] = useScroll();

  const animSection = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      transiton: {
        duration: 2,
        ease: 'circInOut'
      }
    }, 
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'circOut'
      }
    }
  }


  return (
    <AnimateSharedLayout>
      <Faq ref={element} variants={animSection} initial='hidden' animate={controls}>
        <FaqHeading>Questions <FaqHeadingAccent>FAQ</FaqHeadingAccent></FaqHeading>
          <Questions>
            <Question layout>
              <QuestionTitle onClick={toggleAnswer}>Payment Options</QuestionTitle>
              <Wrapper ref={wrapperRef}>
                <Answer ref={answerRef}>
                  <AnswerText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde culpa explicabo nihil corporis optio nisi tenetur labore hic iure accusamus pariatur ut odio, praesentium placeat velit. Facere a aut vel.</AnswerText>
                </Answer>
              </Wrapper>
              <QuestionLine></QuestionLine>
            </Question>
            <Question layout>  
              <QuestionTitle onClick={toggleAnswer}>How We Work</QuestionTitle>
              <Wrapper ref={wrapperRef}>
                <Answer ref={answerRef}> 
                  <AnswerText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde culpa explicabo nihil corporis optio nisi tenetur labore hic iure accusamus pariatur ut odio, praesentium placeat velit. Facere a aut vel.</AnswerText>
                </Answer>
              </Wrapper>
              <QuestionLine></QuestionLine>
            </Question>
            <Question layout>
              <QuestionTitle  onClick={toggleAnswer}>Where To Start</QuestionTitle>
              <Wrapper ref={wrapperRef}>
                <Answer ref={answerRef}>
                  <AnswerText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde culpa explicabo nihil corporis optio nisi tenetur labore hic iure accusamus pariatur ut odio, praesentium placeat velit. Facere a aut vel.</AnswerText>
                </Answer>
              </Wrapper>
              <QuestionLine></QuestionLine>
            </Question>
            <Question layout>
              <QuestionTitle  onClick={toggleAnswer}>Why Us</QuestionTitle>
              <Wrapper ref={wrapperRef}>
                <Answer ref={answerRef}>
                  <AnswerText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde culpa explicabo nihil corporis optio nisi tenetur labore hic iure accusamus pariatur ut odio, praesentium placeat velit. Facere a aut vel.</AnswerText>
                </Answer>
              </Wrapper>
              <QuestionLine></QuestionLine>
            </Question>
          </Questions>
      </Faq>
    </AnimateSharedLayout>
  )

}


export default AboutFaq;

const Faq = styled(motion.div)`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem 2rem 2rem;
  margin: auto;
  margin-bottom: 3rem;
  will-change: transform;
  transform-origin: center;

  @media screen and (min-width: 1024px){
    width: 80%;
  }
`



const FaqHeading = styled(motion.h2)`
  margin-bottom: 2.5rem;
  font-size: 2.2rem;
  font-weight: 400;
`
const FaqHeadingAccent = styled(motion.span)`
  color: var(--accent-color);
  font-weight: 600;
`

const Questions = styled(motion.div)`
  display: flex;
  flex-direction: column; 
`

const Question = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const QuestionTitle = styled(motion.h3)`
  font-weight: 500;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`

const Answer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  pointer-events: none;
`

const Wrapper = styled(motion.div)`
  height: 0px;
  overflow: hidden;
  transition: height 0.4s ease;
  pointer-events: none;
`

const AnswerText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.5rem;
  pointer-events: none;
  margin-bottom: 2rem;
`

const QuestionLine = styled(motion.div)`
  width: 100%;
  height: 0.1rem;
  background: #fff;
`