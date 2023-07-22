import bgImage from '../images/img1.jpg'
import React from 'react';

function Contact(){
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com', '_blank');
      };
    
      const handleFacebookClick = () => {
        window.open('https://www.facebook.com', '_blank');
      };
    
      const handleWhatsAppClick = () => {
        window.open('https://web.whatsapp.com', '_blank');
      };
    return (
        <>
     
     <div
      style={{
        backgroundImage: `url(${bgImage})`, // Add the path to your background image
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

      <div>
        <i
          className="fab fa-instagram"
          onClick={handleInstagramClick}
          style={{ marginRight: '10px', cursor: 'pointer', fontSize: '40px' }}
        ></i>
        <i
          className="fab fa-facebook"
          onClick={handleFacebookClick}
          style={{ marginRight: '10px', cursor: 'pointer', fontSize: '40px' }}
        ></i>
        <i
          className="fab fa-whatsapp"
          onClick={handleWhatsAppClick}
          style={{ cursor: 'pointer', fontSize: '40px' }}
        ></i>
      </div>
      <style>
        {`
        @media (max-width: 768px) {
          .fab {
            font-size: 30px;
          }
        }

        @media (max-width: 480px) {
          .fab {
            font-size: 24px;
          }
        }
      `}
      </style>
    </div>
  </div>


        </>
    )
}
export default Contact