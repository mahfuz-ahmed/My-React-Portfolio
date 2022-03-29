import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import "./Banner.css";
import logo from "../img/Mahfuz Ahmed.png";
import { Button } from 'react-bootstrap';

const Banner = () => {
       
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
      const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
    
    <div className='particle'>
     
    {/* <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    /> */}
    <div className='banner'>
      
      <div className='banner-title'>
        <h1 className='banner-name'>I  
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' am a React Developer', ' have Experience in this field',]}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            
          />
        </span>
        </h1>
        <div className='banner-details'>
        <h5>Hi i,m Mahfuz Ahmed, professional web developer with long time
        experience in this field</h5>
        <a className='resume' href="https://drive.google.com/file/d/1VoGUQizTykLLDBTOCoZoKDvHLiz7KizE/view?usp=sharing" target="_blank"><Button >Download Resume</Button></a>
        </div>
        
      </div>
      <div className='banner-image'>
          <img src={logo} alt="" />
      </div>
      </div>
    </div>
    
    );
};

export default Banner;