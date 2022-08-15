import React from 'react';
import PropTypes from 'prop-types';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const viewContext = React.createContext({});

const ViewProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSize);
    return () => window.removeEventListener('resize', handleWindowSize);
  }, []);

  return (
    <viewContext.Provider value={{ width, height }}>
      { children }
    </viewContext.Provider>
  );
};

ViewProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

const useViewPort = () => {
  const { width, height } = React.useContext(viewContext);
  return { width, height };
};

const MyComponent = () => {
  const { width } = useViewPort();
  const breakpoint = 620;
  return width < breakpoint ? <MobileMenu /> : <DesktopMenu />;
};

export { ViewProvider, MyComponent };
