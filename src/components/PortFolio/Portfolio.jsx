
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/index.jsx';
import './port.scss';
import LinearWithValueLabel from "../Progress/Progress.jsx";
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="container portfolio-page">
        <div className="ptext-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          
          <div className="aboutflex">
            <div className="card-container">
              <div style={{ width: '30rem', margin: '15px' , height: '500px'}} className="custom-card">
                <Card.Img variant="top" src="bot.png" />
                <Card.Body>
                  <Card.Title style={{ color:'#ffd700',fontSize:'2rem',marginTop:'10px'}}>TU-BOT</Card.Title>
                  <Card.Text className="custom-card-text">
                  Built a campus query-solving chatbot using the Rasa open-source framework, tailored for Thapar University.
                  
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <a style={{ color:'#DF0030',fontSize:'2rem',marginBottom:'10px'}} href="https://github.com/orgs/OfficialTeamThing/repositories">Source Code</a>
                </Card.Body>
              </div>
            </div>
            <div className="card-container" >
              <div style={{ width: '30rem', margin: '15px' , height: '500px'}} className="custom-card">
                <Card.Img variant="top" style={{ width: '30rem', height: '300px' }} src="image2.webp" />
                <Card.Body>
                  <Card.Title style={{ color:'#ffd700',fontSize:'2rem',marginTop:'10px'}}>VidyaVision</Card.Title>
                  <Card.Text className="custom-card-text">
                  Developed and designed a comprehensive website for a local school named ”New Holy Heart Model School” to
                  showcase their achievements and goals.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <a style={{ color:'#DF0030',fontSize:'2rem',marginBottom:'10px'}}href="https://github.com/MiRur730/VidyaVision.git">Souce Code</a>
                </Card.Body>
              </div>
            </div>
            <div className="card-container">
              <div style={{ width: '30rem', margin: '15px' , height: '500px'}} className="custom-card">
                <Card.Img variant="top" src="marsify.jpg" />
                <Card.Body>
                  <Card.Title style={{ color:'#ffd700',fontSize:'2rem',marginTop:'10px'}}>Project Marsify</Card.Title>
                  <Card.Text >
                    Project Marsify is a  mission portal to optimize astronaut communication, health monitoring, and mood tracking
                  </Card.Text>
                </Card.Body>
                
                <Card.Body>
                  <a style={{ color:'#DF0030',fontSize:'2rem',marginBottom:'10px'}} href="https://www.figma.com/proto/3h26MH5LHXWqR0OWAcKBmZ/marsify?page-id=0%3A1&node-id=25-56&starting-point-node-id=35%3A1116&t=RyTVMOJrMImoTFHX-1">Souce Code</a>
                </Card.Body>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LinearWithValueLabel progress={50} />
    </div>
  );
}

export default Portfolio;
