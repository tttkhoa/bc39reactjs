import React, { Component } from "react";
import {connect} from "react-redux";
import { actDeleteUser } from "../redux/reducers/user/action";
import { actEditUser } from "../redux/reducers/user/action";

class UserItem extends Component {
  render() {
    const { user} = this.props;
    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.editUser(user)
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.deleteUser(user.id)
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (userId) => {
      dispatch(actDeleteUser(userId))
    },

    editUser: (user) => {
      dispatch(actEditUser(user))
    }
  }
}

export default connect(null,mapDispatchToProps)(UserItem);
