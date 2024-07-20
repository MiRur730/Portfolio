import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AnimatedLetters from '../AnimatedLetters/index.jsx'
import LogoTitle from '../../assets/images/Mitali.png'
import Logo from './Logo'
import './index.scss'
import LinearWithValueLabel from "../Progress/Progress.jsx";
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['i', 't', 'a', 'l', 'i', '  ','R','a','j','p','u','t' ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    
    // Clean up the timer on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="container home-page">

        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I </span>
            
            <span className={`${letterClass} _14`}> am</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / UI-UX Designer / ChatBot Developer</h2>
          
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>


        <Logo />
      </div>
<LinearWithValueLabel progress={20}/>
      
      
    </>
  )
}

export default Home;