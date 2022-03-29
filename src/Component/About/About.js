import React from 'react';
import "./About.css"
import logo from "../img/Mahfuz Ahmed.png";
import { Button } from 'react-bootstrap';

const About = () => {
    return (
        <div className='about'>
            <div className='about-img'>
            
                <img src={logo} alt="" />
            </div>
            <div className='about-me'>
                <h1>About Me</h1>
                <p>I have moderate front end development skills. I love to write clean code and follow best
                practices. Seeking a position to become a reliable software engineer where I will be able to learn and
                apply core software engineering architectures, reliable system development principles</p>

                <div className='sbout-skill'>
                    
                    <h4>BSc In CSE</h4>
                    <p>Daffodil International University (2017-2021)</p>
                    <a className='resume' href="https://drive.google.com/file/d/1VoGUQizTykLLDBTOCoZoKDvHLiz7KizE/view?usp=sharing" target="_blank"><Button >Download Resume</Button></a>
                </div>
            </div>
        </div>
    );
};

export default About;