const initialState =  {
    userList: [
        {
        id: 1,
        fullname: "Dinh Phuc Nguyen",
        username: "dpnguyen",
        email: "dpnguyen@gmail.com",
        phoneNumber: "123456789",
        type: "VIP"
        },
        {
        id: 2,
        fullname: "Nguyen Van A",
        username: "vana",
        email: "vana@gmail.com",
        phoneNumber: "123456789",
        type: "USER"
        }
        ],
    keyword: "",
    userEdit: null,
  };

const userReducer = (state = initialState) => {
    return {...state}
}

export default userReducer;