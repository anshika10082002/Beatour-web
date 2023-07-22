import { Fade} from 'react-slideshow-image';
 import { useNavigate} from "react-router-dom"
import React from 'react';
import image1 from '../images/img1.jpg'
import image2 from '../images/img2.jpg'
import image3 from '../images/img3.jpg'
 import "./Slider.css"
import 'react-slideshow-image/dist/styles.css'

// const spanStyle = {
//     padding: '20px',
//     background: '#efefef',
//     color: '#000000'
//   }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px'
  }
const fadeImages = [
  {
    style: { backgroundImage: `url(${image1})` },
    description: "Experience the ultimate pampering session",
    buttonText: "Book Now",
    descriptionClass: "para-1",
      buttonClass:"btn-1",
      path:"/services"

  },
  {
    style: { backgroundImage: `url(${image2})` },
    description: "Discover the art of beauty at our salon.",
    buttonText: "Book Now",
    descriptionClass: "para-2",
      buttonClass:"btn-2",
      path:"/services"
  },
  {
    style: { backgroundImage: `url(${image3})` },
    description: "Feel confident and radiant with our exceptional services",
    buttonText: "Book Now",
    descriptionClass: "para-3",
      buttonClass:"btn-3",
      path:"/services"
  },
];

const Slideshow = () => {
    const navigate = useNavigate(); // Initialize useHistory

    const handleButtonClick = (path) => {
      navigate(path); // Programmatically navigate to the specified path
    };

  return (
    <div className="slide-container">
        <style>
        {`
          .react-slideshow-fade-transition {
            transitionDuration: 2.0s;
          } 
        `}
        
      </style>
<Fade>
         {fadeImages.map((slide, index)=> (
            <div key={index}>
                <div style={{...divStyle, ...slide.style }}>
              {/* <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, ...slideImage.style  }}> */}               
                <div className="slide-content">
                <p className={slide.descriptionClass}>{slide.description}</p>
              <button className={slide.buttonClass} onClick={() => handleButtonClick(slide.path)}>{slide.buttonText}</button>
              </div>
              </div>
              </div>
            
          ))} 
        </Fade>
    </div>
  )
}

export default Slideshow




 //   @media (max-width: 768px) {
        //     .slide-container .slide-content {
        //       font-size: 14px;
        //     }




//======================================================================

