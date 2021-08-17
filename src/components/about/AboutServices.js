import styled from "styled-components";
import { motion } from 'framer-motion';
import { MdAvTimer, MdPeople, MdWork, MdAttachMoney } from 'react-icons/md';
import aboutImgTwo from '../../img/about/about2.jpg';
import { useScroll } from "../../useScroll";



const AboutServices = ()=>{

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
    <Services ref={element} variants={animSection} initial='hidden' animate={controls}>
      <InfoBox>
        <InfoBoxHeading>High <InfoBoxHeadingAccent>quality</InfoBoxHeadingAccent> services</InfoBoxHeading>
        <Features>
          <Feature>
            <FeatureHead>
              <FeatureIcon as={MdAvTimer}/>
              <FeatureTitle>Efficient</FeatureTitle>
            </FeatureHead>
            <FeatureText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</FeatureText>
          </Feature>
          <Feature>
            <FeatureHead>
              <FeatureIcon as={MdPeople}/>
              <FeatureTitle>Team</FeatureTitle>
            </FeatureHead>
            <FeatureText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</FeatureText>
          </Feature>
          <Feature>
            <FeatureHead>
              <FeatureIcon as={MdWork}/>
              <FeatureTitle>Results</FeatureTitle>
            </FeatureHead>
            <FeatureText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</FeatureText>
          </Feature>
          <Feature>
            <FeatureHead>
              <FeatureIcon as={MdAttachMoney}/>
              <FeatureTitle>Affordable</FeatureTitle>
            </FeatureHead>
            <FeatureText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</FeatureText>
          </Feature>
        </Features>
      </InfoBox>
      <ImgBox>
        <ImgBoxImage src={aboutImgTwo} alt="services" />
      </ImgBox>
    </Services>
  )

}


export default AboutServices;


const Services = styled(motion.div)`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 2rem 2rem 5rem 2rem;
  will-change: transform;
  transform-origin: center;
  /* margin-bottom: 3rem; */

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
  flex: 1;

  @media screen and (min-width: 800px){
    padding: 0 1rem;
  }
`

const InfoBoxHeading = styled(motion.h2)`
  margin-bottom: 2rem;
  font-size: 2.2rem;
  font-weight: 400;
`
const InfoBoxHeadingAccent = styled(motion.span)`
  color: var(--accent-color);
  font-weight: 600;
`

const Features = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(100%, 1fr);
  gap: 2rem;

  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
`

const Feature = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

const FeatureHead = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
`

const FeatureTitle = styled(motion.div)`
  font-weight: 500;
  margin-left: 0.5rem;
  color: var(--bg-color);
  background: #fff;
  padding: 0.5rem;
  letter-spacing: 1px;
`

const FeatureIcon = styled(motion.svg)`
  font-size: 2.3rem;
  color: var(--accent-color);
`
const FeatureText = styled(motion.p)`
  line-height: 1.5rem;
  font-size: 1.1rem;
`

const ImgBox = styled(motion.div)`
  flex: 1;
  overflow: hidden; 
  margin-bottom: 2rem;

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