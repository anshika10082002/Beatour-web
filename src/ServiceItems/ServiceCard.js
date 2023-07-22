import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ServiceCard = ({ image, title, description }) => {
  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} className="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">
          {description}
        </Card.Text>
        <Button variant="primary" className="card-btn">More</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
