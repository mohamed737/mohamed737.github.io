import { _getQuestions, _getUsers } from "../Data"

export const GetDataAction = () => async (dispatch, getState) => {
 //   const { USERS: { users, questions } } = getState()

var MyData =  {users: await _getUsers(),
    questions : await _getQuestions()}
    dispatch({
        type: "UPDATE_DATA",
        payload:MyData
    })
}
