import React from 'react';
import axios from 'axios';
import './App.css';
import VehicleCard from './VehicleCard';




class Vehicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: '',
      vehicleArray: []
    }
  }



  // *** LOAD IN VEHICLES *** //
handleVehicleLoading = async (event) => {

  try {
    let url = `${process.env.REACT_APP_SERVER}/vehicles`;
    let vehicleDataFromAxios = await axios.get(url);
    console.log(vehicleDataFromAxios.data);

    this.setState({
      vehicleArray: vehicleDataFromAxios.data,
      error:false
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

render () {
  console.log(this.state);
  return (
    <VehicleCard />
  )
}



}

export default Vehicles;