import React from 'react';
import './header.css';
import oratorriComunicazioniLogo1 from '../../assets/index/oratorri-comunicazioni-logo-1.svg';

export default function Header() {

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

    </div>
  )
}