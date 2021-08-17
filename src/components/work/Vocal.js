import styled from "styled-components";
import { motion } from 'framer-motion';
import firstImg from '../../img/work/vocal/vocal2.jpg';
import secondImg from '../../img/work/vocal/vocal3.jpg';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useScroll } from "../../useScroll";


const Vocal = ()=> {

  const [element, controls] = useScroll();

  const animImg = {
    from: {
      opacity: 0,
      scale: 1.5
    },
    to: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'circOut',
        delay: 0.3
      }
    }
  }

  const animContentBox = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      transition: {
        ease: 'circIn',
        duration: 1
      }
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'circOut',
        duration: 1
      }
    }
  }



  return (
    <VocalSection>
      <ImgBox>
        <VocalImg src={firstImg} alt="microphone" variants={animImg} initial='from' animate='to'/>
        <LinkBack as={Link} to='/work' title='back' ><MdKeyboardBackspace/></LinkBack> 
      </ImgBox>
      <ContentBox ref={element} variants={animContentBox} initial='hidden' animate={controls}>
        <Options>
          <Option>
            <OptionTitle>One</OptionTitle>
            <OptionLine></OptionLine>
            <OptionText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus iste facere dicta tenetur nesciunt consequuntur tempora recusandae molestiae fugiat nulla.</OptionText>
          </Option>
          <Option>
            <OptionTitle>Two</OptionTitle>
            <OptionLine></OptionLine>
            <OptionText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus iste facere dicta tenetur nesciunt consequuntur tempora recusandae molestiae fugiat nulla.</OptionText>
          </Option>
          <Option>
            <OptionTitle>Three</OptionTitle>
            <OptionLine></OptionLine>
            <OptionText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus iste facere dicta tenetur nesciunt consequuntur tempora recusandae molestiae fugiat nulla.</OptionText>
          </Option>
        </Options>

        <TryBox>
          <TryTitle>To get more information, click</TryTitle>
          <TryLink href="#" onClick={(e)=> e.preventDefault()}>Learn More</TryLink>
        </TryBox>
      </ContentBox>
      <ImgBox>
        <VocalImg src={secondImg} alt="singer"/>
      </ImgBox>
    </VocalSection>
  )

}

export default Vocal;


const VocalSection = styled(motion.section)`
  width: 100%;
  min-height: 90vh;
`

export const ImgBox = styled(motion.div)`
  width: 100% ;
  height: 90vh;
  overflow: hidden;
  position: relative;
`

const VocalImg = styled(motion.img)`
  width: 100% ;
  height: 100% ;
  object-fit: cover;
  transform-origin: center top;
`

const LinkBack = styled(motion.a)`
  position: absolute;
  top: 2rem;
  left: 1rem;
  display: inline-block;
  text-decoration: none;
  color: fff;
  font-size: 3.5rem;
  opacity: 0;
  transform: translateX(200%);
  transition: color 0.4s ease;
  animation: anim-link 0.8s forwards cubic-bezier(0.33, 1, 0.68, 1);
  animation-delay: 0.4s;
  &:hover {
    color: var(--accent-color);
  }

  @keyframes anim-link {
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @media screen and (min-width: 1024px){
    font-size: 5rem;
    top: 3rem;
    left: 5rem;
  }
`

export const ContentBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem;
  margin: 2rem 0;
  will-change: transform;
  transform-origin: center top;

  @media screen and (min-width: 1024px){
    padding: 5rem 5rem;
    margin: 5rem 0;
  }
`

export const Options = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (min-width: 1024px){
    flex-direction: row;
    margin-bottom: 5rem;
  }
`

export const Option = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 1024px){
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`

export const OptionTitle = styled(motion.h3)`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`

export const OptionLine = styled(motion.div)`
  width: 25% ;
  height: 0.2rem;
  margin: auto;
  margin-bottom: 1rem;
  background: var(--accent-color);
`

export const OptionText = styled(motion.p)`
  text-align: center;
  line-height: 1.6rem;
  font-size: 1.1rem;
`

export const TryBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px){
    width: 80%;
    margin: auto;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
  }
`

export const TryTitle = styled(motion.h3)`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1.5rem;
  
  @media screen and (min-width: 1024px){
    font-size: 2rem;
    margin-right: 1rem;
  margin-bottom: 0;
    text-align: none;
  }
`

export const TryLink = styled(motion.a)`
  padding: 0.5rem 1rem;
  background: var(--accent-color);
  color: #fff;
  border: 2px solid transparent;
  font-size: inherit;
  font-weight: 400;
  transition: background 0.4s ease, color 0.4s ease;
  &:hover {
    color: var(--accent-color);
    background: none;
    border: 2px solid var(--accent-color);
  }
`