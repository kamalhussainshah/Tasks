import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckBoxes from './checkboxes';
import Groups from './groups';

import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


function getSteps() {
  return ['Choose a Category', 'Choose a Group', 'Send Email'];
}



function getStepContent(stepIndex, handleChange, handleGroups, handleClose, handleMail ) {
  switch (stepIndex) {
    case 0:
        return <CheckBoxes  
                            handleChange={handleChange}
                       />;
    case 1:
      return <Groups  
                      handleGroups= {handleGroups}
                   />;
    case 2:
      return <Button variant="contained" color="primary"  
                      style={{marginBottom: '20px', marginLeft: '215px'}}
                      onClick={handleMail}
                      > 
                                Send 
                       </Button>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper(props) {

  
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep, props.handleChange, props.handleGroups, props.handleClose, props.handleMail)}</Typography>
            <div style={{marginBottom: '20px', marginLeft: '300px'}}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}

              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
