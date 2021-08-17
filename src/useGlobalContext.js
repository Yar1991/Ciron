import { useContext, createContext, useState } from "react";

const GlobalContext = createContext();

export const ContextProvider = ({ children })=>{

  const [isOpenMobileMenu, setIsMobileMenu] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);
  const [mobileScreen, setMobileScreen] = useState(false);

  return (
    <GlobalContext.Provider value={ {
      mobileMenu: {
        isOpenMobileMenu,
        setIsMobileMenu
      },
      slide: {
        slideIndex,
        setSlideIndex
      },
      mobile: {
        mobileScreen,
        setMobileScreen
      }
    } }>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = ()=>{
  return useContext(GlobalContext);
}