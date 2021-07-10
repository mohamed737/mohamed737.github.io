import { _getQuestions, _getUsers, _saveQuestion } from "../Data"

export const AddQuestionAction = (question) => async (dispatch, getState) => {
  //  const { USERS: { users, questions } } = getState()

const MyData = await _saveQuestion(question).then(async() => { return {users: await _getUsers(),
    questions : await _getQuestions()}})
    console.log(MyData)

    dispatch({
        type: "UPDATE_DATA",
        payload:MyData
    })
}
