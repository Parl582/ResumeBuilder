import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import Box from '@mui/material/Box';



import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import Resume from "./Resume";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Personal Details",
    "Education Details",
    "Skills ",
    "Projects ",
   
  ];
}
const DetailsForm = () => {


  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="Image"
        render={({ field }) => (
          <TextField
          required
          value={field.value}
   
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            type="file"
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="FullName"
        render={({ field }) => (
          <TextField
          required
            // id="first-name"
            label="Full Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            
            margin="normal"
            // type="file"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="PhoneNo"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Phone No"
            type='number'
            variant="outlined"
            placeholder="Enter Your Phone No"
            fullWidth
            margin="normal"
            required
            
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Address"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Address"
            variant="outlined"
            placeholder="Enter Your Address"
            fullWidth
            margin="normal"
            required
            {...field}
          />
        )}
      />
    </>
  );
};
const Education = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="CollageName"
        render={({ field }) => (
          <TextField
            id="coolagename"
            label="Collage Name or University Name"
            variant="outlined"
            placeholder="EEnter Collage Name or University Name"
            fullWidth
            margin="normal"
            required
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Persentage"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label=" Persentage"
            variant="outlined"
            placeholder="Enter Your Persentage"
            fullWidth
            required
            type='number'
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="From"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Start Year"
            variant="outlined"
            placeholder="Enter Start Year"
            fullWidth
            required
            type='number'
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="To"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="End Year"
            variant="outlined"
            placeholder="Enter End Year"
            fullWidth
            margin="normal"
            required
            type='number'
            {...field}
          />
        )}
      />
    </>
  );
};
const Skills = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="Skill1"
        // value='Skill1'
        render={({ field }) => (
          <TextField
            id="address1"
            label="Skill"
            variant="outlined"
            placeholder="Enter Your Skill"
            fullWidth
            margin="normal"
            {...field}
            required
          />
        )}
      />
      <Controller
        control={control}
        name="Skill2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Skill"
            variant="outlined"
            placeholder="Enter Your Skill"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const Preview = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="ProjectName"
        render={({ field }) => (
          <TextField
            id="projectname"
            label="Project Name"
            variant="outlined"
            placeholder="Enter Project Name"
            fullWidth
            required
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Tach_Stake_Used"
        render={({ field }) => (
          <TextField
            id="tech"
            label="Technology Used"
            variant="outlined"
            placeholder="Technology Used"
            fullWidth
            margin="normal"
            required
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Describe"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Description"
            variant="outlined"
            placeholder="Description"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DetailsForm />;
    case 1:
      return <Education />;
    case 2:
      return <Skills />;
    case 3:
      return <Preview />;
    default:
      return "unknown step";
  }
}

const Form = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      Image:'',
      FullName: "",
      PhoneNo: "",
      Address: "",
      CollageName: "",
      Persentage: "",
      From: "",
      To: "",
      Skill1: ['',''],
      Skill2: "",
      Skill3: "",
      ProjectName: "",
      Tach_Stake_Used: "",
      Describe: "",
    },

  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {



      setActiveStep(activeStep + 1);
      localStorage.setItem("formData", JSON.stringify(data));



    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };


  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');

  

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const handleClickOpen = () => {

    setOpen(true);
  
  };


  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                {/* optional */}
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          <Button onClick={handleClickOpen} variant="contained" >Preview</Button>
          {/* ----------------------- */}

          <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
       
        <DialogContent>
          <DialogContentText>
            <Resume/>
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} > 
          Close
          </Button>
        </DialogActions>
      </Dialog>


          {/* ------------------------- */}
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
    
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default Form;
