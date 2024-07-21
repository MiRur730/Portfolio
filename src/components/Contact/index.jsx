import { useEffect, useState } from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/index.jsx'
import './index.scss'
import LinearWithValueLabel from '../Progress/Progress.jsx';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
 



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [])



  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            large projects.Always open to new learnings.
             However, if you have any other requests or
            questions, donot hesitate to contact me using below form either.
          </p>

          <Link to="/contact/contactform" className="flat-button">
            MESSAGE HERE
          </Link>
        </div>
        <div className="info-map">
          Mitali Rajput,
          <br />
          India
          <br />
          
          Pathankot <br />
          
          <span>mitalisalaria55@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[32.2746, 75.6529]} zoom={13} >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[32.2746, 75.6529]}>
              <Popup>Mitali lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div> 
      </div> 
      <LinearWithValueLabel progress={100}/>
    </>
  )
}

export default Contact