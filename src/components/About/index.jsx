import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/index.jsx';
import './index.scss';
import LinearWithValueLabel from "../Progress/Progress.jsx";
import Accordions from "../Accordion/Accordion.jsx";
import Accordionstwo from "../Accordion/Accordiontwo.jsx";
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    
    // Clean up the timer on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className='aboutflex'>
            <div className="accordion-container">
              <Accordions />
            </div>
            <div className="accordion-container">
              <Accordionstwo />
            </div>
          </div>
        </div>
      </div>
      <LinearWithValueLabel progress={40} />
    </>
  );
}

export default About;
