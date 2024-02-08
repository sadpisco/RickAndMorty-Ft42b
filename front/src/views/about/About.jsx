import styles from './About.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Mapa from '../../assets/icons/Mapa.jpeg';
import { useState } from 'react';
import "../../tailwind.css";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function About (){
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        {
          label: 'Material UI',
          description: `Material UI was the Front End Component library chosen to provide the styles and the components of the UI/UX of the page, like this dropdown. Due to the simplicity of its components they are easy to use and easy to add on the code. One of my favorites Front End libraries to work with.`,
        },
        {
          label: 'CSS',
          description:
            'Pure CSS was used to adapt every one of the styles applied to every view of the page. Proficiend knowledge of Cascade Style Sheets is required in order to make the web completely responsive (media queries) like this one.',
        },
        {
          label: 'Redux',
          description: `Redux is the most popular library to handle and manage local and global states of the app. It was used to store all the characters, episodes and locations that this web page can display. It allows a variety of options to manage the most important information that the software is handling.`,
        },
        {
            label: 'React.Js',
            description: `React.js is the most important framework of all the technologies listed. It's a great enviroment to bluid a responsive app with great data workflows. `,
          },
          {
            label: 'Node.Js Server',
            description: `
            Node.js is commonly used to develop web servers. Its ability to handle HTTP requests asynchronously and efficiently makes it ideal for real-time, high-concurrency web applications. It was used to manage the database and API requests.`,
          },
          {
            label: 'Sequelize',
            description: `Sequelize is an ORM (Object-Relational Mapping) for Node.js that simplifies interaction with relational databases like MySQL, PostgreSQL, SQLite, and more. It allows developers to use JavaScript objects to represent and manipulate data in the database, instead of writing SQL queries directly. Sequelize offers features such as database migrations, table relationships, data validations, and advanced queries, streamlining development and improving application maintainability.`,
          },
          {
            label: 'PostgreSQL',
            description: `PostgreSQL is a powerful open source relational database management system. Known for its robustness, reliability, and ability to handle large volumes of data, PostgreSQL is widely used in enterprise and mission-critical applications. It offers a wide range of advanced features, such as support for complex queries and data integrity.`,
          },
      ];
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
        <div className = {styles.divAbout}>
            <NavBar />
            <div className = {styles.divOne}>
            <h1 className = {styles.titleDivOne}>About the Rick And Morty Project</h1>
            <p className = {styles.textDivOne}>This project was designed and develop in order to create a portfolio app to display FrontEnd and BackEnd proficient knowledge. The main purpose of this application is that the user could feel a really good User-Interface experience. It was developed using several technologies, using React as the web Framework and written in JavaScript.</p>
            </div>
            <div className = {styles.divTwo}>
                <h1 className = {styles.titleDivTwo}>Map of Technologies Used</h1>
                <img src = {Mapa} alt = 'mapa' className = {styles.img}/>
            </div>
            <div className = {styles.divThree}>
            <Box sx={{ 
                maxWidth: 700,
                width: '95%',
                paddingBottom: '5vh',
                color: 'white',
                 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}
          sx = {{
            color: 'white',
            fontSize: '20px',
            fontWeight: '700',

          }}
          >
            <StepLabel
              optional={
                index === 6 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
              sx = {{
                backgroundColor: 'white',
                width: '200px',
                padding: '10px',
                margin: '15px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px 0px black',
              }}
            ><p className = {styles.titleDesplegables}>{step.label}</p>              
            </StepLabel>
            <StepContent>
              <Typography sx = {{
                fontWeight: '500',

              }}>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ 
            p: 3,
            borderRadius: '15px',
            margin: '20px',
            }}>
          <Typography>All Technologies Reviewed</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>

            </div>
            <Footer />
        </div>
    )
}
