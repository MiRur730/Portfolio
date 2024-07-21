
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/index.jsx';
import './dash.scss';
import LinearWithValueLabel from "../Progress/Progress.jsx";
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dashboard } from '@mui/icons-material';

const DashBoard = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="container dashboard-page">
        <div className="dtext-zone">
          <h1 style={{marginTop:'-40px',fontSize:'6rem'}}>
            <AnimatedLetters
            
              letterClass={letterClass}
              strArray={['C', 'e', 'r', 't', 'i', 'f', 'i', 'c','a','t','i','o','n','s']}
              idx={15}
            />
          </h1>
          
          <div style={{display:'flex',flexDirection:'column'}}>
     

     <section style={{display:'flex'}}>


     <div className="card-container">
              <div style={{ width: '35rem', margin: '-15px' , height: '200px'}} className="custom-card">
                <Card.Img  style={{ width: '30rem' , height: '200px'}}variant="top" src="dc.jpeg" />
                <Card.Body>
                  <Card.Title style={{ color:'#DF0030',fontSize:'1.6rem',marginTop:'5px'}}>Certification by DC Office, Patiala</Card.Title>
                  <Card.Text style={{ color:'#fff',fontSize:'1.3rem',marginTop:'5px'}} >
                  
Certification by DC Office, Patiala: Achieved official recognition from DC Office, Patiala for leading the
development of the Kisan Mitra Chatbot
                  
                  </Card.Text>
                </Card.Body>
               
              </div>
            </div>
            <div className="card-container" >
              <div style={{ width: '35rem', margin: '-15px' , height: '200px'}} className="custom-card">
                <Card.Img variant="top" style={{ width: '30rem' , height: '200px'}} src="school.jpeg" />
                <Card.Body>
                  <Card.Title style={{ color:'#DF0030',fontSize:'1.6rem',marginTop:'5px'}}>Best Student of the Year.</Card.Title>
                  <Card.Text style={{ color:'#fff',fontSize:'1.3rem',marginTop:'5px'}} >
                  Certificate of Appreciation for being the Best Student of the Year by Christ The King Convent School.
                  </Card.Text>
                </Card.Body>
                
              </div>
            </div>
            <div className="card-container">
              <div style={{ width: '35rem', margin: '-15px' , height: '200px'}} className="custom-card">
                <Card.Img style={{ width: '30rem' , height: '200px'}} variant="top" src="game.jpeg" />
                <Card.Body>
                  <Card.Title style={{ color:'#DF0030',fontSize:'1.6rem',marginTop:'5px'}}>Badminton</Card.Title>
                  <Card.Text style={{ color:'#fff',fontSize:'1.3rem',marginTop:'5px'}}  >
                    First in Singles Girls Badminton in Inter School Sports Competition by ASISC.
                  </Card.Text>
                </Card.Body>
                
                
              </div>
            </div>


     </section>



            <section style={{display:'flex',marginTop:'100px'}}>
            <div className="card-container">
              <div style={{ width: '35rem', marginTop: '10px' , height: '200px'}} className="custom-card">
                <Card.Img  style={{ width: '30rem' , height: '200px'}} variant="top" src="olympiad.jpeg" />
                <Card.Body>
                  <Card.Title style={{ color:'#DF0030',fontSize:'1.6rem',marginTop:'5px'}}>ConQUEST Olympiad</Card.Title>
                  <Card.Text style={{ color:'#fff',fontSize:'1.3rem',marginTop:'5px'}}  >
                    First Position in All India Intra School Round of Conquest Olympiad.
                  </Card.Text>
                </Card.Body>
                
                
              </div>
            </div>

            <div className="card-container">
              <div style={{ width: '35rem', margin: '10px' , height: '200px'}} className="custom-card">
                <Card.Img style={{ width: '30rem' , height: '200px'}} variant="top" src="UX.jpeg" />
                <Card.Body>
                  <Card.Title style={{ color:'#DF0030',fontSize:'1.6rem',marginTop:'5px'}}>Foundations of User Experience (UX) Design</Card.Title>
                  <Card.Text  style={{ color:'#fff',fontSize:'1.3rem',marginTop:'5px'}} >
                  Certificate of Completion from Google
                  </Card.Text>
                </Card.Body>
                
                
              </div>
            </div>

            <div className="card-container">
              <div style={{ width: '35rem', margin: '10px' , height: '200px'}} className="custom-card">
                <Card.Img style={{ width: '30rem' , height: '200px'}} variant="top" src=" Crypto.jpeg" />
                <Card.Body>
                  <Card.Title style={{ color:'#DF0030',fontSize:'1.6rem',marginTop:'5px'}}>Blockchain and Cryptocurrency Explained</Card.Title>
                  <Card.Text  style={{ color:'#fff',fontSize:'1.3rem',marginTop:'5px'}} >
                  Certification from University of Michigan
                  </Card.Text>
                </Card.Body>
                
               
              </div>
            </div>
            </section>
            
          </div>
        </div>
      </div>
      <LinearWithValueLabel progress={60} />
    </div>
  );
}

export default DashBoard;
