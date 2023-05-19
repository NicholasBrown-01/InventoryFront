import React from 'react';
import axios from 'axios';
import './App.css';
import VehicleCard from './VehicleCard';
import VehicleModal from './VehicleModal';




class Vehicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: '',
      showModal: false,
      vehicleArray: []
    }
  }

  handleCloseVehicleModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleOpenVehicleModal = () => {
    this.setState({
      showModal: true
    });
  }



  // *** LOAD IN VEHICLES *** //
  handleVehicleLoading = async (event) => {

    try {
      let url = `${process.env.REACT_APP_SERVER}/vehicles`;
      let vehicleDataFromAxios = await axios.get(url);

      this.setState({
        vehicleArray: vehicleDataFromAxios.data,
        error: false
      });
      console.log(vehicleDataFromAxios.data);

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  };

  componentDidMount() {
    this.handleVehicleLoading();
  }

  render() {

    return (
      <div className="vehicles-container">
        {this.state.vehicleArray.map(vehicleArray => (
          <VehicleCard
          key={vehicleArray._id}
          vehicleArray={vehicleArray}
          showModal={this.state.showModal}
          handleCloseVehicleModal={this.handleCloseVehicleModal}
          handleOpenVehicleModal={this.handleOpenVehicleModal} />
        ))}

      </div>
    );
  }
}

export default Vehicles;