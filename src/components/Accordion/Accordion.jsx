
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
  fontSize: '1.2rem', // Set font size
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
          <Typography variant="body1">Technical</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            I am a highly motivated Full-Stack developer eager to contribute my skills to an esteemed IT company. My goal is to immerse myself in challenging and diverse projects, leveraging the latest technologies to deliver innovative solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="body1">Non-Technical</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            I am a naturally curious soul, always eager to explore and learn new things. Think of me as a knowledge-seeking missile, constantly on the hunt for new information, experiences, and skills.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="body1">Also me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            I am a family-oriented individual, the only daughter, skilled in face sketch artistry, deeply passionate about music, and fully immersed in the world of technology in short tech-obsessed!!!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant="body1">Fun Facts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            On weekends, I enjoy trying out new recipes. Sometimes they even turn out edible!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
}
