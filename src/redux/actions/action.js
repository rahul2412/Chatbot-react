
export function addMessage(message) {
  return { type: "Add_message", message }; // sends message of inbox to reducer
}

export function stateChange(state) {
  return { type: "Change_State", state }; // sends state of the chat app to reducer
}
