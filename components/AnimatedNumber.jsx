import React from 'react';
import CountUp from 'react-countup';

const AnimatedNumber = ({ endValue, duration, ...rest }) => {
  return (
    <CountUp 
      start={0} 
      end={endValue} 
      duration={duration} 
      enableScrollSpy={true} // This is the key prop
      scrollSpyOnce={true}    // Animates only once when it comes into view
      {...rest} 
    />
  );
};

export default AnimatedNumber;