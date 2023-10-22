import React from 'react';
import './home.css';
import Header from '../../components/header/header.js';
import Footer from '../../components/footer/footer.js';
import caoCao from '../../assets/index/cao-cao.svg';

export default function Home() {
  
  /* download services pdf on click function */
  function downloadServices() {
    const servicesURL = '/oratorri_comunicazioni_services.pdf';
    const link = document.createElement('a');
    link.href = servicesURL;
    link.target = '_blank';
    link.download = 'oratorri-comunicazioni-services.pdf'; 
    link.click();
  };

  /* part of code that renders */
  return (

    /* all screen home container */
    <div className='home-container'>
      
      {/* small screen home container */}
      <div className='ss-home-container'>
        <Header />

        {/* small screen home image container */}
        <div className='ss-home-image-container'>
          <img
            src={caoCao} 
            onContextMenu={(e) => {e.preventDefault()}}
            alt='oratorri-comunicazioni-ćao-ćao'/>
        </div>

        {/* small screen home paragraph 1 container */}
        <div className='ss-home-paragraph-1-container'>
          <div>
            <p>Creative</p>
            <p>Studio</p>
            <p>+ Marketing</p>
            <p className='ss-home-paragraph-1-agency'>Agency</p>
          </div>
        </div>

        {/* small screen home paragraph 2 container */}
        <div className='ss-home-paragraph-2-container'>
          <p>
            WEB DEVELOPMENT<br />
            SEARCH ENGINE OPTIMIZATION<br />
            SOCIAL MEDIA MANAGMENT<br /><br />
            META ADVERTISING<br />
            GOOGLE ADVERTISING<br />
            PHOTO/VIDEO PRODUCTION<br /><br />
            GRAPHIC DESIGN<br />
            POSTPRODUCTION<br />
            <strong 
              onClick={downloadServices}>
                PREUZMITE PONUDU
            </strong>
          </p>
        </div>

        <Footer />
      </div>










      {/* large screen home container */}
      <div className='ls-home-container'>
        <Header />

        {/* large screen home image & paragraph 1 container */}
        <div className='ls-home-image-paragraph-1-container'>

          {/* large screen home image container */}
          <div className='ls-home-image-container'>
            <img 
              src={caoCao}
              onContextMenu={(e) => {e.preventDefault()}}
              alt='oratorri-comunicazioni-ćao-ćao'/>
          </div>

          {/* large screen home paragraph-1 container */}
          <div className='ls-home-paragraph-1-container'>
            <p>Creative</p>
            <p>Studio</p>
            <p>+ Marketing</p>
            <p className='ls-home-paragraph-1-agency'>Agency</p>
          </div>

        </div>

        <Footer />
      </div>

    </div>
  )
}