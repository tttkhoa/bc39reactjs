import { DELETE_USER } from "./constants";
import { EDIT_USER } from "./constants";
import { KEYWORD } from "./constants";
import { SUBMIT } from "./constants";

const initialState = {
  userList: [
    {
      id: 1,
      fullname: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "123456789",
      type: "VIP",
    },
    {
      id: 2,
      fullname: "Nguyen Van A",
      username: "vana",
      email: "vana@gmail.com",
      phoneNumber: "123456789",
      type: "USER",
    },
  ],
  keyword: "",
  userEdit: null,
};

const userReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case DELETE_USER: {
      //Clone userList từ state

      let userList = [...state.userList];

      //Tìm vị trí
      const index = userList.findIndex((user) => user.id === action.payload);

      if (index !== -1) {
        //Xóa phần tử tại vị trí tìm thấy
        userList.splice(index, 1);
      }

      //Cập nhật lại state
      state.userList = userList;

      return { ...state };
    }

    case SUBMIT: {
      let userList = [...state.userList];
      if (action.payload.id) {
        //update
        const index = userList.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          userList[index] = action.payload;
        }
      } else {
        //add
        const userNew = { ...action.payload, id: new Date().getTime() };
        userList.push(userNew);
      }

      state.userList = userList;

      return { ...state };
    }

    case EDIT_USER: {
        state.userEdit = action.payload;

        return {...state}
    }

    case KEYWORD: {
        state.keyword = action.payload;

        return {...state}
    }

    default:
      return { ...state };
  }
};

export default userReducer;
