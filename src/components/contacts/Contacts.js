import styled from "styled-components";
import { motion } from 'framer-motion';
import { FaYoutube, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';


const Contacts = ()=>{

  const animHide = {
    hidden: {
      y: 0
    },
    show: {
      y: 300,
      transition: {
        duration: 6,
        ease: 'circOut',
        delay: 0.5
      }
    }
  }

  const animBox = {
    hidden: {
      y: '150%'
    },
    show: {
      y: '0%',
      transition: {
        duration: 1,
        ease: 'circOut',
        delay: 0.5
      }
    }
  }

  return (
    <ContactsBox>
      <SocialMedia variants={animBox} initial='hidden' animate='show'>
        <SocialMediaLink href="https://www.youtube.com/" rel='noreferrer' target="_blank" title='youtube'>
          <FaYoutube/>
        </SocialMediaLink>
        <SocialMediaLink href="https://twitter.com/" rel='noreferrer' target="_blank" title='twitter'>
        <FaTwitter/>
        </SocialMediaLink>
        <SocialMediaLink href="https://www.instagram.com/" rel='noreferrer' target="_blank" title='instagram'>
        <FaInstagram/>
        </SocialMediaLink>
        <Hide variants={animHide} initial='hidden' animate='show'></Hide>
      </SocialMedia>
      <Location variants={animBox} initial='hidden' animate='show'>
        <MapMark as={FaMapMarkerAlt}/>
        <InfoBox>
          <InfoItem>New York, 1160 Settlers Lane</InfoItem>
          <InfoItem>917-830-9125</InfoItem>
          <InfoItem>ciron-studio@gmail.com</InfoItem>
        </InfoBox>
        <Hide variants={animHide} initial='hidden' animate='show'></Hide>
      </Location>
    </ContactsBox>
  )

}


export default Contacts;


const ContactsBox = styled(motion.div)`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px){
    justify-content: space-around;
    flex-direction: row;
  }
`

const SocialMedia = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  overflow: hidden;
  will-change: transform;
  transform-origin: center top;

  @media screen and (min-width: 1024px){
    margin-bottom: 0;
    justify-content: center;
    flex: 1;
  }  
`

const SocialMediaLink = styled(motion.a)`
  text-decoration: none;
  margin-right: 3rem;
  font-size: 3rem;
  transition: color 0.6s cubic-bezier(0.33, 1, 0.68, 1);

  &:hover {
    color: var(--accent-color);
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media screen and (min-width: 1024px){
    font-size: 4rem;
  } 
`

const Location = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
  overflow: hidden;
  will-change: transform;
  transform-origin: center top;

  @media screen and (min-width: 1024px){
    flex: 1;
    margin-bottom: 0;
  }
`

const MapMark = styled(motion.svg)`
  font-size: 3rem;
  margin-bottom: 2rem;
`

const InfoBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

const InfoItem = styled(motion.h4)`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 400;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Hide = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100% ;
  height: 100% ;
  background: var(--bg-color);
`