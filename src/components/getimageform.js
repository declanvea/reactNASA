import React from 'react';
import '../styles/App.css';
import GetImageButton from './getimagebutton';
import ImageDisplay from './imagedisplay';

const api_key = 'nUDPdXQQtEn0kpWTbXv6rxXrfUeQyNzyGMDRmjPq';

export default class GetImageForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "",
    }
  }

  handleRover = (e) => this.setState({rover: e.target.value});
  handleCamera = (e) => this.setState({camera: e.target.value});
  handleSol = (e) =>  this.setState({sol: e.target.value});



  fetchRoverImage = (e) => {
    const {rover, camera, sol} = this.state;
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${api_key}`;

    fetch(imageUrl)
    .then(r => r.json())
    .then(results => {
      this.setState({images: results.photos})
    });
  }

render(){
  console.log(this.state.rover);
  const {rover, camera, sol} = this.state;
return(
      <div>
        <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={rover}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
        <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover" value={camera}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input type="number" onChange={this.handleSol} max="2000" min="1000" value={sol}/>

        <GetImageButton {...this.state} onClick={this.fetchRoverImage}/>
        <ImageDisplay {...this.state}/>
      </div>
      );
    }
  }
