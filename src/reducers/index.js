// import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

// const intialState = {
//   user: false,
//   board: false,
//   campaign: false,
//   is_loggingIn: false,
//   token: undefined,
//   result: undefined
// };

// // REDUCER
// export const login_reducer = (state = initialState, action) => {
//   console.log("action", action);
//   console.log("action.payload", action.payload);
//   switch (action.type) {
//     case LOGIN_START:
//       return {
//         ...state,
//         is_loggingIn: true,
//         error: ""
//       };
//     case LOGIN_SUCCESS:
//       const decoded_JWT_token = jwt_decode(action.payload.data.token);
//       const userObjectToPass = {
//         user: decoded_JWT_token.user,
//         board: decoded_JWT_token.board,
//         campaign: decoded_JWT_token.campaign
//       };
//       return {
//         ...state,
//         token: action.payload.data.token,
//         currentUser: userObjectToPass,
//         is_loggingIn: false,
//         error: ""
//       };
//     case LOGIN_FAILURE:
//       return {
//         ...state,
//         is_loggingIn: false,
//         error: "Unable to Login"
//       };

//     // DEFAULT
//     default:
//       return state;
//   }
// };
