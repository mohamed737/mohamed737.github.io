export const DataReducer = (state = { users: [], questions: [] }, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      console.log(action.payload.questions)
      return {
        users: Object.values(action.payload.users),
        questions: Object.values(action.payload.questions).sort((a, b) => -a.timestamp + b.timestamp)
      }
    default:
      return state;
  }
}
