import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listUsers: [
        { id: 1, username: "Nguyen", age: 18 },
        { id: 2, username: "Van", age: 20 },
        { id: 3, username: "Phat", age: 22 },
        { id: 4, username: "Phi", age: 23 },
      ],

      listCar: [
        {id: 1, nameCar: "Black Car", img:"./img/imgBlackCar.jpg"},
        {id: 2, nameCar: "Silver Car", img:"./img/imgRedCar.jpg"},
        {id: 3, nameCar: "Red Car", img:"./img/imgSilverCar.jpg"},
      ]
    };
  }

  renderListUser = () => {
    return this.state.listUsers.map((user) => {
      return (
        <li key={user.id}>
          Username: {user.username} - Age: {user.age}
        </li>
      );
    });
  };

  renderListCar = () => {
    const {listCar} = this.state;
    return listCar.map((car,index) => {
        return (
            <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.nameCar}</td>
                <td>
                  <img src={car.img} width="100" alt=""/>  
                </td>
            </tr>
        )
    })
  }
  render() {
    return (
      <div>
        <h3>*ListKeys</h3>
        <ul>
          {/* {
                this.state.listUsers.map((user,index) =>{
                    return (
                        <li key={user.id}>Username: {user.username} - Age: {user.age}</li>
                    )
                })
            } */}
            {this.renderListUser()}
        </ul>

        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Img</th>
                </tr>
            </thead>
            <tbody>
                {this.renderListCar()}
            </tbody>
        </table>
      </div>
    );
  }
}
