import React from 'react';
import axios from 'axios';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './img/car2.jpg';
import VehicleModal from './VehicleModal';

class VehicleCard extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {this.props.vehicleArray.year}
          <br></br>
          {this.props.vehicleArray.make}
          <br></br>
          {this.props.vehicleArray.model}</Card.Title>
        <Card.Text>          
          {this.props.vehicleArray.notes}
        </Card.Text>
        <Button variant="primary" onClick={this.props.handleOpenVehicleModal} >More Info</Button>
      </Card.Body>
    </Card>

    <VehicleModal
    show={this.props.showModal}
    handleCloseVehicleModal={this.props.handleCloseVehicleModal}
    vehicleArray={this.props.vehicleArray} />
    </React.Fragment>
    );
  }
}

export default VehicleCard;