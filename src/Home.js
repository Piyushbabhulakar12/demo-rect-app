import React from 'react';
import Heroslider from './Home/Heroslider.js';
import Aboutme from './Home/Aboutme.js';
import Textslider from './Home/Textslider.js';
import Service from './Home/Service.js'


function Home() {
  return (
    <div>
       
          <Heroslider/>
          <Aboutme/>
          <Textslider/>
          <Service/>
           

    </div>
  );
}

export default Home;