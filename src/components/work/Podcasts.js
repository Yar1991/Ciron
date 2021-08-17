import styled from "styled-components";
import { motion } from 'framer-motion';
import firstImg from '../../img/work/podcasts/podcasts2.webp';
import secondImg from '../../img/work/podcasts/podcasts3.webp';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useScroll } from "../../useScroll";
import { ImgBox, ContentBox, Options, Option, OptionTitle, OptionLine, OptionText, TryBox, TryTitle, TryLink } from './Vocal';


const Podcasts = ()=> {

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
    <PodcastsSection>
      <ImgBox>
        <PodcastsImg src={firstImg} alt="microphone" variants={animImg} initial='from' animate='to'/>
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
        <PodcastsImg src={secondImg} alt="singer"/>
      </ImgBox>
    </PodcastsSection>
  )

}

export default Podcasts;


const PodcastsSection = styled(motion.section)`
  width: 100%;
  min-height: 90vh;
`

const PodcastsImg = styled(motion.img)`
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

