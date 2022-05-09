import React from 'react';
import Heroslider from './Home/Heroslider.js';
import Aboutme from './Home/Aboutme.js';
import Textslider from './Home/Textslider.js';
import Service from './Home/Service.js';
import Ourwork from './Home/Ourwork.js';
import Process from './Home/Process.js';
import Team from './Home/Team.js';
import Faq from './Home/Faq.js';
import Footer from './Home/Footer.js';

function Home() {
  return (
    <div>
       
          <Heroslider/>
          <Aboutme/>
          <Textslider/>
          <Service/>
          <Ourwork/>
          <Process/>
          <Team/>
          <Faq/>
          <Footer/>
           

    </div>
  );
}

export default Home;