import React from 'react';
import './footer.css';
import oratorriComunicazioniLogo from '../../assets/index/oratorri-comunicazioni-logo-1.svg';

export default function Footer () {

  /* part of code that renders */
  return (
    <div>

      {/* small screen footer container */}
      <div className='ss-footer-container'>
        <p>
          <strong>Oratorri Comunicazioni</strong>&nbsp;&nbsp;&nbsp;
          ciao@oratorri.com<br />
          oratorri@gmail.com&nbsp;&nbsp;&nbsp;
          Social Media <strong>@oratorri</strong>
        </p>
      </div>










      {/* large screen footer container */}
      <div className='ls-footer-container'>
       
       {/* large screen footer container container */}
       <div className='ls-footer-container-container'>

          {/* large screen footer paragraph 1 container */}
          <div className='ls-footer-paragraph-1-container'>
            <ul>
              <li><strong>Oratorri Comunicazioni</strong></li>
              <li>ciao@oratorri.com</li>
              <li>oratorri@gmail.com</li>
              <li>Social Media <strong>@oratorri</strong></li>
            </ul>
          </div>

          {/* large screen footer logo & paragraph 2 container */}
          <div className='ls-footer-logo-paragraph-2-container'>

            {/* large screen footer logo container */}
            <div className='ls-footer-logo-container'>
              <img 
                src={oratorriComunicazioniLogo}
                onContextMenu={(e) => {e.preventDefault()}}
                alt='oratorri-comunicazioni-logo'/>
            </div>

            {/* large screen footer paragraph 2 container */}
            <div className='ls-footer-paragraph-2-container'>
              <p>
                WEB DEVELOPMENT<br />
                SEARCH OPTIMIZATION<br />
                SOCIAL MEDIA MANAGMENT
              </p>

              <p>
                META ADVERTISING<br />
                GOOGLE ADVERTISING<br />
                PHOTO / VIDEO PRODUCTION
              </p>

              <p>
                GRAPHIC DESIGN<br />
                POSTPRODUCTION
              </p>
            </div>

          </div>
            
            

          </div>

        </div>

      </div>
  )
}