import React from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
const viewContext =  React.createContext({});

const ViewProvider = ({children}) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  
  React.useEffect(() => {
    window.addEventListener("resize",handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  return(
    <viewContext.Provider value={{ width, height }}>
    { children }
    </viewContext.Provider>
  );
};

const useViewPort = () => {
  const { width, height } = React.useContext(viewContext);
  return { width, height };
};

// const MobileComponent = () => <p>"Hmmm... Why is your screen so small?"</p>;

const MyComponent = () => {
  const { width } = useViewPort();
  const breakpoint = 620;
  return width < breakpoint? <MobileMenu/> : <DesktopMenu/>;
};

export  { ViewProvider, MyComponent };