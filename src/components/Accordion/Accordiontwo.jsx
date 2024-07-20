
import { useState } from 'react';
import "./accordion.css"; // Updated CSS file name for clarity
import { styled } from '@mui/material/styles';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const AccordionContainer = styled('div')({
  marginTop: '50px',
  height:'100%',
  width: '100%', // Set the desired width
  maxWidth: '1500px', // Set max-width for responsiveness
  margin: 'auto', // Center the container
}); 

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={1} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  backgroundColor: '#21023cfb', // Set background color to match the about section
  marginBottom: '10px', // Space between accordions
  borderRadius: '10px', // Add border radius
  overflow: 'hidden',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem', color: '#ffd700' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#5c002c', // Set background color
  color: '#ffd700', // Set text color
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    fontFamily: "Playwrite US Trad", 
    fontSize: '7.5rem', // Set font size
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  color: '#ffd700', // Set text color
  fontFamily: "Playwrite US Trad", 
  fontSize: '2.2rem', // Set font size
  backgroundColor: '#21023cfb', // Match background color to the about section
}));

export default function Accordions() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    console.log(`Panel ${panel} expanded: ${newExpanded}`);
  };

  return (
    <AccordionContainer>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="body1">Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          <p>  Pursuing Bachelor of Engineering Computer Science and Business System from Thapar Institute of Enginering and Technology, Patiala with CGPA of 9.05.
         Schooling from Christ The King Convent School, Pathankot with overall 95.00 percentage.</p>
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="body1">Position of Responsibilty</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
           I am Educational Consultant modernizing the curriculum of an Educational Institute and enhancing the overall branding and standards.

           Designed key school materials (Report Card, Logo, Datesheet,Question papers,website).
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="body1">Achievments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
           <p>1. Certification by DC Office, Patiala: Achieved official recognition from DC Office, Patiala for leading the
development of the Kisan Mitra Chatbot</p>
            <p>
            2. Secured a position among top 3000 nationwide as Trainee at Amazon Machine Learning Summer School 2024.
            </p>
            <p> 3. Merit Scholarship: Awarded Academic Merit scholarship for two consecutive years of Rs 3,21,500.</p>
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant="body1">Skills & Certifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          <p>Development: HTML, CSS, Bootstrap, ReactJS, ExpressJS, NodeJs, REST APIs, MongoDB</p>
            <p>Soft Skills:Leadership, Teamwork, Management, Public Speaking, Communication, Social Service</p>
            <p>Blockchain and Cryptocurrency Explained: Certification from University of Michigan</p>
            <p>Foundations of User Experience (UX) Design: Certificate of Completion from Google</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
}
