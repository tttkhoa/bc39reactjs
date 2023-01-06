import React, { Component } from 'react';
export default class Detail extends Component {
  render() {
    // this.props.match.params.id
    let arrURL = window.location.pathname.split('/')
    let paramId = arrURL[arrURL.length - 1]
    return (
      <div>
        Detail: {paramId}
      </div>
    )
  }
  componentDidMount(){
    //Hàm này chạy sau render để can thiệp vào quá trình thay đổi state,prop của component
  }
}
