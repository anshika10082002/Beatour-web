import React ,{useState}from 'react';
import './Footer.css'
// const Footer = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

//   return (
//     <footer className="footer">
//       <div className="social-icons">
//         <a href="https://www.facebook.com">
//           <i className="fab fa-facebook"></i>
//         </a>
//         <a href="https://web.whatsapp.com">
//           <i className="fab fa-whatsapp"></i>
//         </a>
//         <a href="https://www.instagram.com">
//           <i className="fab fa-instagram"></i>
//         </a>
//         <div className="phone">
//           <span className="phone-icon" role="img" aria-label="phone">
//             📞
//           </span>
//           <span className="phone-number">123-456-7890</span>
//         </div>

//       </div>
//       <div className="feedback-form">
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Enter your message" />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <div className="footer-text">
//         &copy; 2023 All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;




//------------------------------------------
//import React from 'react';

const Footer = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User name:', name);
    console.log('User message:', message);
  
    // Clear the input fields after submission
    setName('');
    setMessage('');
  };
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <footer className="footer">

      <h3>We would like to hear from you</h3>

      <div className="social-icons">
        <div className="left-icons">
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://web.whatsapp.com">
            <i className="fab fa-whatsapp" style={{ color: "#25D366" }}></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"  style={{ color: '#E4405F' }}></i>
          </a>
        </div>
        <div className="right-icons">
          <span className="phone-icon" role="img" aria-label="phone"  style={{ color: 'black' }}>
            📞
          </span>
          <span className="phone-number">123-456-7890</span>
        </div>
      </div>
      <div className="feedback-form">
        <h4>Leave a Message</h4>
        <form onSubmit={handleSubmit}>       
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
        />     
          <input  type="text"
          name="message"
          value={message}
          onChange={handleMessageChange}
          placeholder="Enter your message" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="footer-text">
        &copy; 2023 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

//-----------------