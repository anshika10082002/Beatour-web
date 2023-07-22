import React from "react";
import ServiceCard from "./ServiceCard"; // Adjust the import path if needed
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import './Waxing.css';

function Makeup() {
  const makeupItems = [
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
      <h1 className="card-items-heading">All makeup items</h1>
      <div className="card-container">
        {makeupItems.map((item, index) => (
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

export default Makeup;