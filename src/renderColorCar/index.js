import React, { Component } from "react";

export default class RenderColorCar extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            urlImg : "./img/imgBlackCar.jpg"
        }
    }

    changeColorCar = (urlImg) => {
        this.setState({
            urlImg
        })
    }

  render() {
    console.log("render")
    const {urlImg} = this.state
    return (
      <div>
        <h3>RenderColorCar</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={urlImg} className="img-fluid" alt=""/>
            </div>
            <div className="col-md-6">
                <button className="btn btn-dark" onClick={() => {this.changeColorCar("./img/imgBlackCar.jpg")}}>Black</button>
                <button className="btn btn-light mx-2" onClick={() => {this.changeColorCar("./img/imgSilverCar.jpg")}}>Silver</button>
                <button className="btn btn-danger" onClick={() => {this.changeColorCar("./img/imgRedCar.jpg")}}>Red</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
