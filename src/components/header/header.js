import React from 'react';
import './header.css';
import oratorriComunicazioniLogo1 from '../../assets/index/oratorri-comunicazioni-logo-1.svg';

export default function Header() {

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
    <div>
    
      {/* small screen header container */}
      <div className='ss-header-container'>
        
        {/* small screen header logo */}
        <img
          className='ss-header-logo' 
          src={oratorriComunicazioniLogo1}
          onContextMenu={(e) => {e.preventDefault()}}
          alt='oratorri-comunicazioni-logo'
        />

        {/* small screen header navigation icon */}
        <div className='ss-header-navigation-icon'>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </div>










      {/* large screen header container */}
      <div className='ls-header-container'>
        
        {/* large screen header navigation */}
        <div className='ls-header-navigation'>
          <ul>
            <li>Naslovna</li>
            <li>Usluge</li>
            <li>Portofolio</li>
            <li><strong onClick={downloadServices}>Cenovnik</strong></li>
            <li>Kontakt</li>
          </ul>
        </div>

        {/* large screen header logo */}
        <img
          className='ls-header-logo' 
          src={oratorriComunicazioniLogo1}
          onContextMenu={(e) => {e.preventDefault()}}
          alt='oratorri-comunicazioni-logo'
        />

      </div>

    </div>
  )
}