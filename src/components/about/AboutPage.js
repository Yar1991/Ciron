import styled from "styled-components/macro";
import AboutShowcase from "./AboutShowcase";
import Wave from "./Wave";
import AboutServices from "./AboutServices";
import AboutFaq from "./AboutFaq";


const AboutPage = ()=>{

  return (
    <StyledSection>
      <Wave/> 
      <AboutShowcase/>
      <AboutServices/>
      <AboutFaq/>
    </StyledSection>
  )

}

export default AboutPage;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  /* padding: 1rem; */
  position: relative;
  overflow: hidden;
`