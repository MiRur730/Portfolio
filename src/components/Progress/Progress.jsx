// // import * as React from 'react';
// import PropTypes from 'prop-types';
// import LinearProgress from '@mui/material/LinearProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function LinearProgressWithLabel(props) {
//   return (
//     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//       <Box sx={{ width: '100%', mr: 1 }}>
//         <LinearProgress variant="determinate" {...props} />
//       </Box>
//       <Box sx={{ minWidth: 35 }}>
//         <Typography variant="body2" color="text.secondary">{`${Math.round(
//           props.value,
//         )}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

// LinearProgressWithLabel.propTypes = {
  
//   value: PropTypes.number.isRequired,
// };

// export default function LinearWithValueLabel({progress}) {
 

//   return (
//     <Box sx={{ width: '100%' }}>
//       <LinearProgressWithLabel value={progress} />
//     </Box>
//   );
// }
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  const { value } = props;

  // Determine the color based on the progress value
  const getColor = (value) => {
    if (value == 20 || value==60) return 'error';
    if  (value==40|| value ==80) return 'warning';
    return 'success';
  };
  // const getColor = (value) => {
  //   if (value == 20 || value==60) return '#DF0030';  // Red
  //   if(value==40|| value ==) return '#ffd700';

    
  // };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress 
          variant="determinate" 
          value={value} 
          color={getColor(value)} // Apply dynamic color
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel({ progress }) {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressValue((oldProgress) => {
        const newProgress = Math.min(oldProgress + 10, progress);
        if (newProgress === progress) {
          clearInterval(timer);
        }
        return newProgress;
      });
    }, 100); // Adjust this interval for the speed of the transition

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <Box sx={{ width: '130%' }} sy={{height:'120px'}}>
      <LinearProgressWithLabel value={progressValue} />
    </Box>
  );
}

LinearWithValueLabel.propTypes = {
  progress: PropTypes.number.isRequired,
};
