import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <Typography variant="h5" className="about-title">
       <b>Welcome to TechWave </b> 
      </Typography>
      <Typography>
        Leading dealer in tech product all over tamilnadu.
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">About Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are an e-commerce company built with the power of young talent!
            Our goal is to deliver quality products that meet your tech needs.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">Our Products</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List className="about-list">
            <ListItem>Laptops</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>PC Hardware Devices</ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our offices are located in Coimbatore, Chennai, and other cities.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant="h6">Contact Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For more details, visit our website: 
            <a href="https://www.techwave.com" target="_blank" rel="noopener noreferrer">
              www.techwave.com
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default About;
