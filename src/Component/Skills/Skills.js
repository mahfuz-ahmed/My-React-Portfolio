import React from 'react';
import './Skills.css'

const Skills = () => {
    <script src='https://code.jquery.com/jquery-migrate-3.4.0.js'></script>
    return (

    <div>
        <h1> My Skills</h1>
       <section className='skill'>
        
        <div className='col'>
            <li><h3>HTML</h3>
           <span className='bar'><span className='html'></span></span>
           </li>

           <li><h3>CSS</h3>
           <span className='bar'><span className='css'></span></span>
           </li>

           <li><h3>BOOTSTRAP</h3>
           <span className='bar'><span className='bts'></span></span>
           </li>

           <li><h3>OOP CONCEPT</h3>
           <span className='bar'><span className='oop'></span></span>
           </li>
        </div>

        <div className='col'>
            <li> <h3>JAVASCRIPT</h3>
           <span className='bar'><span className='js'></span></span>
           </li>

           <li><h3>REACT</h3>
           <span className='bar'><span className='react'></span></span>
           </li>

           <li><h3>MY SQL</h3>
           <span className='bar'><span className='sql'></span></span>
           </li>

           <li><h3>GIT HUB</h3>
           <span className='bar'><span className='git'></span></span>
           </li>
        </div>          
       </section>
       </div>
       
    );
   
};

export default Skills;