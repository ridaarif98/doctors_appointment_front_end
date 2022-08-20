import React, {useSate, useEffect} from "react";

const Carousel = (props) => {
  const {children, show} = props;
  const [currentIndex, setCurrentIndex] = useSate(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useSate(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if(currentIndex < (length - show)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
  }
};