import React, { useEffect, useRef } from 'react';

const intersection = (props) => {
    const targetRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        // Do something when the observed element enters or exits the viewport
        console.log(entries);
      });
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      // Clean up the observer when the component unmounts
      return () => {
        observer.disconnect();
      };
    }, []); // Make sure this effect runs only once
  
    return <hr ref={targetRef}/>;
  }

export default intersection;