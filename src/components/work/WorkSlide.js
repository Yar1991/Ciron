import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { slides } from "./slides";
import { useGlobalContext } from "../../useGlobalContext";
import { MdArrowForward } from 'react-icons/md';
import { useEffect } from "react";


const WorkSlide = ()=>{

  const { slideIndex, setSlideIndex } = useGlobalContext().slide;
  const { mobileScreen, setMobileScreen } = useGlobalContext().mobile;

  useEffect(() => {
    let windowWidth = window.innerWidth;
    if(windowWidth < 800){
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  }, [setMobileScreen]);

  const animHide = {
    hidden: {
      x: '0%'
    },
    show: {
      x: '-100%',
      transition: {
        duration: 1.5,
        ease: 'circOut',
        delay: 0.5
      }
    }
  }

  const animLine = {
    hidden: {
      width: '0%'
    },
    show: {
      width: '100%',
      transition: {
        duration: 1,
        delay: 1,
        ease: 'circOut'
      }
    }
  }

  const animImage = {
    from: {
      opacity: 0,
      scale: 1.5
    },
    to: {
      opacity: 1,
      scale: 1,
      transition:{
        duration: 1,
        delay: 1,
        ease: 'circOut'
      }
    }
  }


  const dragSlide = (e)=>{
    let slideX = e.target.getBoundingClientRect().x;
    // console.log(e.target.getBoundingClientRect().x);
    if(slideX < 0){
      if(slideIndex >= slides.length){
        return;
      }
      setSlideIndex((prev)=> prev + 1);
    } 
    if(slideX > 80){
      if(slideIndex <= 1){
        return;
      }
      setSlideIndex((prev)=> prev - 1);
    } 
  }

  const clickSlide = (e)=>{
    let target = e.target.textContent.slice(0,1);
    setSlideIndex(Number(target));
  }

  return ( 
    <Slide key={slides[slideIndex - 1].id} drag={mobileScreen && 'x'} onDragEnd={mobileScreen && dragSlide} dragConstraints={{ left: 0, right: 0 }}>
      <Link to={slides[slideIndex - 1].path} style={{ display: 'flex', alignItems: 'center' }}>
        <SlideHeading>{slides[slideIndex - 1].title}</SlideHeading>
        <ArrowRight as={MdArrowForward}/>
      </Link>
      <SlideLine variants={animLine} initial='hidden' animate='show'></SlideLine>
      <ImgBox whileTap={ mobileScreen && { scale: 0.9}}>
        <ImgBoxImage src={slides[slideIndex - 1].img} alt={slides[slideIndex - 1].title} variants={animImage} initial='from' animate='to'/>
      </ImgBox>
      <SlideNums> <SlideNum index={slideIndex} onClick={clickSlide}>1.</SlideNum> <SlideNum index={slideIndex} onClick={clickSlide}>2.</SlideNum> <SlideNum index={slideIndex} onClick={clickSlide}>3.</SlideNum> <SlideNum index={slideIndex} onClick={clickSlide}>4.</SlideNum></SlideNums>
      <SlideHide variants={animHide} initial='hidden' animate='show'></SlideHide>
    </Slide>
    )
}

export default WorkSlide;


const Slide = styled(motion.div)`
  max-height: 90vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding:  0rem 1rem;
  position: relative;
  overflow: hidden;
  will-change: transform;

  @media screen and (min-width: 800px){
    width: 90vw;
    height: 50vh;
  }
  @media screen and (min-width: 1024px){
    width: 80vw;
    height: 90vh;
    padding: 1rem 5rem;
  }
`

const SlideHeading = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  &:hover + * {
    color: var(--accent-color);
    transform: translateX(0.5rem);
  }
`

const ArrowRight = styled(motion.svg)`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.1rem;
  margin-left: 0.5rem;
  transition: transform 0.4s ease, color 0.4s ease;
`

const SlideLine = styled(motion.div)`
  width: 0%;
  height: 0.2rem;
  background: var(--accent-color);
  margin-bottom: 1.5rem;
`

const ImgBox = styled(motion.div)`
  overflow: hidden; 
  height: 20rem;
  width: 100%;
  user-select: none;

  @media screen and (min-width: 768px){
    height: 25rem;
  }
  @media screen and (min-width: 1024px){
    height: 25rem;
  }
`

const ImgBoxImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`

const SlideNums = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-top: 1.5rem;
`

const SlideNum = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  font-family: inherit;
  color: #fff;
  will-change: transform;
  transition: transform 0.6s ease, opacity 0.6s ease;
  &:nth-of-type(${({index})=> index}){
    color: var(--accent-color);
  }

  &:hover {
    transform: translateY(0.3rem);
    opacity: 0.8;
  }
`

const SlideHide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  background: var(--bg-color);
`