import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      username: "",
      fullname: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    };

    this.closeModal = React.createRef();
    console.log("constructor");
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    // console.log(name,value)
    this.setState(
      {
        [name]: value,
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  /**
   * Submit
   */
  handleSubmit = (event) => {
    //Chặn load lại trang web
    event.preventDefault();
    this.props.getUserSubmit(this.state);
    //Close modal
    this.closeModal.current.click();
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    if (nextProps && nextProps.userEdit) {
      const { id, username, fullname, email, phoneNumber, type } =
        nextProps.userEdit;
      this.setState({
        id,
        username,
        fullname,
        email,
        phoneNumber,
        type,
      });
    } else {
      this.setState({
        id: "",
        username: "",
        fullname: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      })
    }
  }

  render() {
    // console.log(this.props.userEdit);
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"} </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.closeModal}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleOnChange}
                    name="username"
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleOnChange}
                    name="fullname"
                    value={this.state.fullname}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleOnChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleOnChange}
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    onChange={this.handleOnChange}
                    value={this.state.type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
