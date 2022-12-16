import React, { Component } from "react";

export default class ExampleEvent extends Component {
  isLogin = false;

  //   renderHTML() {

  //     if (this.isLogin) {
  //         return (
  //     <div id="logOut">
  //     <p>Hello Cybersoft</p>
  //     <button className="btn btn-danger">Logout</button>
  //   </div>
  //         )
  //      } else {
  //         return (
  // <div id="logIn">
  //   <p>Vui lòng login </p>
  //   <button className="btn btn-success">Login</button>
  // </div>
  //         )
  //      }
  //   }

  handleLogin = () => {
    console.log(this.isLogin)
    this.isLogin = true;
    console.log(this.isLogin)
  }

  renderHTML() {
    // dk ? "Dung" : "Sai"
    return this.isLogin ? (
      <div >
        <p>Hello Cybersoft</p>
        <button className="btn btn-danger">Logout</button>
      </div>
    ) : (
      <div>
        <p>Vui lòng login </p>
        <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>ExampleEvent</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
