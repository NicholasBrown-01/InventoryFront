import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Vehicles from './Vehicles';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/vehicles"
              element={<Vehicles />}
            >
           </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}


export default App;
