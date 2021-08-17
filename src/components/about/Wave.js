import { motion } from "framer-motion";
import styled from "styled-components";

const Wave = ()=>{

  const animPath = {
    hidden: {
      pathLength: 0,
      pathOffset: 1
    },
    show: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        ease: 'circOut',
        delay:4,
        duration: 2
      }
    }
  }

  return (
    <WaveSvg viewBox='0 0 1900 2600' xmlns="http://www.w3.org/2000/svg" fill='none'>
      <motion.path variants={animPath} initial='hidden' animate='show'
        d="M1920 395.77C1782.64 317.38 1631.95 301.67 1467.94 348.64C1221.93 419.09 1223 637.03 972.32 689.71C721.65 742.4 574.99 693.79 341 540C185.01 437.47 71.34 278.29 0 62.44"
        stroke="#c56639"
      />
    </WaveSvg>
  )

}

export default Wave;


const WaveSvg = styled(motion.svg)`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  display: none;

  @media screen and (min-width: 800px){
    display: block;
  }

  path {
    stroke-width: 7px;
    stroke-opacity: 0.4;
  }
`