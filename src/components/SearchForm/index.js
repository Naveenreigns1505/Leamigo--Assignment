import { Component } from "react";
import "./index.css"
import vehiclesData from "../../data";
import VehicleList from "../VehiclesList";


class SearchForm extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      origin: '',
      destination: '',
      date: '',
      availableVehicles: [],
      flag: false
    }
    this.handleSubmit.bind(this)
  }

  handleSubmit = () => {
    const {origin, destination, date, availableVehicles, flag} = this.state 
    this.setState({availableVehicles: []})
    vehiclesData.forEach((vehicle) => {
      if (vehicle.origin === origin && vehicle.destination===destination && vehicle.date===date.toString()) {
        availableVehicles.push(vehicle)

      }
    })
    this.setState({availableVehicles, flag: true})
  };

  render() {
    const {origin, destination, date, availableVehicles, flag} = this.state
    return(
      <>
      <form>
        <div className='bg-container'>
          <div className='container'>
            <div className="in-cont">
              <label className="change-text">
                Origin: 
                <input 
                  type='text'
                  placeholder='Enter pickup location...'
                  value={origin}
                  onChange={(e) => this.setState({origin: e.target.value})} 
                />
              </label>
            </div>
            
            <div className="in-cont">
            <label className="des">
                Destination: 
                <input 
                  type='text'
                  placeholder='Enter destination location...'
                  value={destination}
                  onChange={(e) => this.setState({destination: e.target.value})} 
                />
              </label>
            </div>
            </div>
            <div className="date">
              <label>
              Date:
              <input 
                type="date" 
                value={date} 
                onChange={(e) => this.setState({date: e.target.value})} 
              />
              </label>
            </div>
          <div>
            <button className='btn' type='button' onClick={this.handleSubmit}>Search</button>
          </div>
        </div>
      </form>
      {
        availableVehicles.length >0 ? <VehicleList vehicles={availableVehicles}/> : (flag ? "No data available" : null)
      }
    </>
    )
  }
}

export default SearchForm;
