import React from 'react';

export default class ImageDisplay extends React.Component {
  render(){
    return(
    <div>
      <div>{this.props.rover}</div>
        <ul>
          {this.props.images.map((image, id) =>
          <li key={image.id}><img src={image.img_src} alt="images"/></li>
          )}
        </ul>
    </div>
    )
  }
}
