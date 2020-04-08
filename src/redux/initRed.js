import initState from "./initState";

let initRed = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN" : {
      state = {...state, curPage : "MAINPAGE"}
      return state
    }
    default:
      return state;
  }
};

export default initRed;
