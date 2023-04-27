import React from 'react';
import axios from 'axios';




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
    console.log(url);

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
    <header>
      <h1>Vehicle Inventory Page</h1>
    
    </header>
  )
}



}

export default Vehicles;