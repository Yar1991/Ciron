import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { motion, AnimateSharedLayout } from "framer-motion";
import aboutImgOne from '../../img/about/about1.jpg';
import { useScroll } from "../../useScroll";

const AboutShowcase = ()=>{

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
        ease: 'circOut',
        when: 'beforeChildren'
      }
    }
  }

  const animInfo = {
    hidden: {
      y: '0%'
    },
    show: {
      y: '100%',
      transition: {
        duration: 1.8,
        ease: 'circOut',
        delay: 2
      }
    }
  }

  const animImage = {
    hidden: {
      opacity: 0,
      scale: 1.6
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'circOut',
        delay: 1
      }
    }
  }



  return (
    <AnimateSharedLayout>
      <Showcase ref={element} variants={animSection} initial='hidden' animate={controls}>
        <InfoBox>
          <InfoBoxHeading>We work to make your <InfoBoxHeadingAccent>dreams</InfoBoxHeadingAccent> come true.</InfoBoxHeading>
          <InfoBoxText>Contact us if you want to create music. We have professionals with amazing skills to help you compose your first mastepiece.</InfoBoxText>
          <InfoBoxLink as={Link} to='/contacts' title='contacts'>Contact Us</InfoBoxLink>
          <InfoBoxHide variants={animInfo} initial='hidden' animate='show'></InfoBoxHide>
        </InfoBox>
        <ImgBox>
          <ImgBoxImage src={aboutImgOne} alt="our studio" variants={animImage} initial='hidden' animate='show'/>
        </ImgBox>
      </Showcase>
    </AnimateSharedLayout>
  )

}

export default AboutShowcase;


const Showcase = styled(motion.div)`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 3rem 2rem 5rem 2rem;
  will-change: transform;
  transform-origin: center;

  @media screen and (min-width: 800px){
    flex-direction: row;
    padding: 2rem 5rem;
  }
`

const InfoBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-right: 2rem;
  flex: 1;
  overflow: hidden;
  z-index: 3;

  @media screen and (min-width: 800px){
    padding: 0 1rem;
  }
`

const InfoBoxHeading = styled(motion.h2)`
  margin-bottom: 1rem;
  font-size: 2.2rem;
  font-weight: 400;
`
const InfoBoxHeadingAccent = styled(motion.span)`
  color: var(--accent-color);
  font-weight: 600;
`

const InfoBoxText = styled(motion.p)`
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
`

const InfoBoxLink = styled(motion.a)`
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

const InfoBoxHide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  background: var(--bg-color);
`

const ImgBox = styled(motion.div)`
  flex: 1;
  overflow: hidden; 
  margin-bottom: 2rem;
  position: relative;
  z-index: 3;

  @media screen and (min-width: 800px){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ImgBoxImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (min-width: 800px){
    width: 90%;
    height: 90%;
  }
`