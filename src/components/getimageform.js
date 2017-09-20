import React from 'react';
import '../styles/App.css';
import GetImageButton from './getimagebutton';
import ImageDisplay from './imagedisplay';

const api_key = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=X3aNQZj7BdSiNk8EUjNBImIKplVeWrVEfeVislMQ';

export default class GetImageForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      rover: [],
      camera: "",
      images: [],
      sol: "",
    }
  }

  handleRover = (e) => {
    this.setState({rover: e.target.value});
  }
  handleCamera = (e) => {
    this.setState({camera: e.target.value});
  }
  handleSol = (e) => {
    e.preventDefault();
    this.setState({sol: e.target.value});
  }

  fetchRoverImage = () => {
    console.log('clicked');
    fetch(api_key)
    .then(r => r.json())
    .then(results => {
    })
  }
  componentDidMount(){
    this.fetchRoverImage();
  }

render(){
  console.log(this.state.rover);
return(
      <div>
        <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
        <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>

        <GetImageButton {...this.state} onClick={this.fetchRoverImage}/>
        <ImageDisplay camera={this.state.camera} rover={this.state.rover} sol={this.state.sol}/>
      </div>
      );
    }
  }
