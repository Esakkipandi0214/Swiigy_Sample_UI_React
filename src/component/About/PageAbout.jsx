import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <h2 className=' text-black'>About</h2>
      <Link to="/"><h3 className=' text-black'>Home</h3></Link>
      <p className=' text-black'>This is the About page.</p>
    </div>
  );
};

export default About;
