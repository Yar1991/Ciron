import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components/macro';
import { useGlobalContext } from "../../useGlobalContext";
import { MdMenu } from "react-icons/md";
import {motion, AnimateSharedLayout} from 'framer-motion';
import { useRef, useEffect } from "react";

const Nav = ()=>{

  const { isOpenMobileMenu, setIsMobileMenu } = useGlobalContext().mobileMenu;
  const location = useLocation().pathname;
  const linkLineAbout = useRef(null);
  const linkLineWork = useRef(null);
  const linkLineContacts = useRef(null);

  useEffect(()=>{
    if(location && window.innerWidth > 1023){
      if(location === '/'){
        linkLineAbout.current.style.width = '100%';
      } else {
        linkLineAbout.current.style.width = '0%';
      }
      if(location === '/work'){
        linkLineWork.current.style.width = '100%';
      } else {
        linkLineWork.current.style.width = '0%';
      }
      if(location === '/contacts'){
        linkLineContacts.current.style.width = '100%';
      } else {
        linkLineContacts.current.style.width = '0%';
      }
    }
  }, [location])

  const animNav = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 2,
        ease: 'circIn'
      }
    },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'circOut',
        delay: 0.3
      }
    }
  }

  return (
    <AnimateSharedLayout>
      <StyledNav layout variants={animNav} initial='hidden' animate='show'>
        <StyledMobileNav layout>
          <StyledLogo><Link to='/' title='home'>ciron</Link></StyledLogo>
          <StyledMenuBtn menuOpen={isOpenMobileMenu} onClick={()=> setIsMobileMenu(!isOpenMobileMenu)}><MdMenu/></StyledMenuBtn>
        </StyledMobileNav>
        <StyledList layout menuOpen={isOpenMobileMenu}>
          <StyledLi><StyledLink as={Link} to='/' title='about' onClick={()=> setIsMobileMenu(false)}>About Us</StyledLink><LinkLine ref={linkLineAbout}></LinkLine></StyledLi>
          <StyledLi><StyledLink as={Link} to='/work' title='work' onClick={()=> setIsMobileMenu(false)}>Our Work</StyledLink><LinkLine ref={linkLineWork}></LinkLine></StyledLi>
          <StyledLi><StyledLink as={Link} to='/contacts' title='contacts' onClick={()=> setIsMobileMenu(false)}>Contact Us</StyledLink><LinkLine ref={linkLineContacts}></LinkLine></StyledLi>
        </StyledList>
      </StyledNav>
    </AnimateSharedLayout>
)

}


export default Nav;


const StyledNav = styled(motion.nav)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #292929;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    padding: 1rem 6rem;
    justify-content: space-between;
  }
`

const StyledMobileNav = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 800px) {
    width: auto;
  }
`

const StyledLogo = styled(motion.h1)`
  font-family: var(--logo-font);
  font-weight: 400;
  font-size: 2rem;
  user-select: none;
`

const StyledMenuBtn = styled(motion.button)`
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;
  transform: ${({menuOpen})=> menuOpen ? `rotate(-90deg)` : `rotate(0deg)`};

  @media screen and (min-width: 800px){ 
    display: none;
  }
`


const StyledList = styled(motion.ul)`
  display: ${({menuOpen})=> menuOpen ? 'flex' : 'none'};
  flex-direction: column;
  padding: 1rem 0rem;

  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    padding: 0rem;
  }
`

const StyledLi = styled(motion.li)`
  padding: 0.5rem 0rem;
  margin-bottom: 2rem;
  animation: anim-link 0.5s forwards cubic-bezier(0, 0.55, 0.45, 1);
  opacity: 0;
  transform: translateX(-100%);
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 0rem;
  }
  &:nth-of-type(2){
    animation-delay: 0.2s;
  }
  &:nth-of-type(3){
    animation-delay: 0.4s;
  }

  @media screen and (min-width: 800px) {
    padding: 0 3rem 0 0;
    margin-bottom: 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: none;
    opacity: 1;
    transform: translateX(0%);
  }

  @keyframes anim-link {
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`

const StyledLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 300;
  transition: color 0.4s ease;
  letter-spacing: 0.5px;

  &:hover {
    color: #bebebe;
  }

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`


const LinkLine = styled(motion.div)`
  width: 0% ;
  height: 0.1rem;
  background: var(--accent-color);
  margin-top: 0.5rem;
  transition: width 0.6s ease;
`