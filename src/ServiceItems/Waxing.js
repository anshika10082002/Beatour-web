// import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import image1 from '../images/img1.jpg'
// import image2 from '../images/img2.jpg'
// import image3 from '../images/img3.jpg'
// import './Waxing.css'


// function Waxing(){
//     return(
//         <>
//         <h1 className="wax-heading">All waxing items</h1>
//         <div className="card-container">
//         <Card className="card"  style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={image1} className="card-img" />
//       <Card.Body>
//         <Card.Title className="card-title">Card Title</Card.Title>
//         <Card.Text className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary" className="card-btn">More</Button>
//       </Card.Body>
//     </Card>

//     <Card className="card"  style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={image2} className="card-img" />
//       <Card.Body>
//         <Card.Title className="card-title">Card Title</Card.Title>
//         <Card.Text className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary" className="card-btn">More</Button>
//       </Card.Body>
//     </Card>

//     <Card className="card"  style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={image3} className="card-img" />
//       <Card.Body>
//         <Card.Title className="card-title">Card Title</Card.Title>
//         <Card.Text className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary" className="card-btn">More</Button>
//       </Card.Body>
//     </Card>

//     <Card className="card"  style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={image1} className="card-img" />
//       <Card.Body>
//         <Card.Title className="card-title">Card Title</Card.Title>
//         <Card.Text className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary" className="card-btn">More</Button>
//       </Card.Body>
//     </Card>
//     </div>
//         </>
//     )
// }

// export default Waxing

//-------------------------------------------------------------

import React from "react";
import ServiceCard from "./ServiceCard"; // Adjust the import path if needed
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import './Waxing.css';

function Waxing() {
  const waxingItems = [
    {
      image: image1,
      title: "Card Title 1",
      description: "Some quick example text for Card 1.",
    },
    {
      image: image2,
      title: "Card Title 2",
      description: "Some quick example text for Card 2.",
    },
    {
      image: image3,
      title: "Card Title 3",
      description: "Some quick example text for Card 3.",
    },
    // Add more items as needed
  ];

  return (
    <>
      <h1 className="card-items-heading">All waxing items</h1>
      <div className="card-container">
        {waxingItems.map((item, index) => (
          <ServiceCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Waxing;
