import { _getQuestions, _getUsers, _saveQuestionAnswer } from "../Data"

export const AnswerQuestionAction = (question) => async (dispatch, getState) => {
 //   const { USERS: { users, questions } } = getState()

const MyData = await _saveQuestionAnswer(question).then(async() => { return {users: await _getUsers(),
    questions : await _getQuestions()}})
    console.log(MyData)

    dispatch({
        type: "UPDATE_DATA",
        payload:MyData
    })
}
