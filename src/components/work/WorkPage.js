import styled from "styled-components";
import { motion } from 'framer-motion';
import WorkSlide from "./WorkSlide";
 


const WorkPage = ()=>{

  return (
    <WorkSection>
      <WorkSlide/> 
    </WorkSection>
)

}


export default WorkPage;


const WorkSection = styled(motion.section)`
  min-height: 90vh;
  padding-top: 4rem;
  overflow: hidden;
`