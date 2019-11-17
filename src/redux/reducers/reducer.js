
const initialState = {
  messageFromBot: "  Hey, how may I help you ??",
  messageFromUser: [],
  app_state: "closed"
};

function rootReducer(state = initialState, action) {
  if (action.type === "Add_message") {
    return Object.assign({}, state, {
      messageFromUser: state.messageFromUser.concat(action.message)
    });
  }

  if (action.type === "Change_State") {
    return Object.assign({}, state, {
      app_state: action.state
    });
  }
  return state;
}

export default rootReducer;
// reducing function