import React from 'react';
import {  Button, Card, CardGroup } from 'react-bootstrap';
import ecom from "../img/ecommerce.png";
import port from "../img/portfolio.jpg";
import temp from "../img/temperature.jpg";




const Projects = () => {
    return (
        <div>
        <h1>PROJECTS</h1>
        <div className='projects'>           
        <CardGroup>
        <Card className='projects-card'>
            <Card.Img className='project-img' variant="top" src={ecom} />
            <Card.Body>
            <Card.Title>Simple Ecommerce</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <a href="https://www.google.com/"><Button>Visit Project</Button></a>
            </Card.Footer>
        </Card>
        <Card className='projects-card' >
            <Card.Img className='project-img' variant="top" src={port} />
            <Card.Body>
            <Card.Title>My Portfolio</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <a href="https://www.google.com/"><Button>Visit Project</Button></a>
            </Card.Footer>
        </Card>
        <Card className='projects-card'>
            <Card.Img className='project-img' variant="top" src={temp} />
            <Card.Body>
            <Card.Title>Teperature Counter</Card.Title>
            <Card.Text>
            If you want any country or city temperature ..? The temperature-Counter will show the current
            temperature{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <a href=" https://mahfuz-ahmed.github.io/temperature-counter"><Button className='visit-button'>Visit Project</Button></a>
            </Card.Footer>
        </Card>
        </CardGroup>
        </div>
        </div>
    );
};

export default Projects;