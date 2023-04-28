

import React from 'react';
import axios from 'axios';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './img/car2.jpg'

class VehicleCard extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Vehicle Card</Card.Title>
        <Card.Text>
          Information about vehicle
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
    );
  }
}

export default VehicleCard;