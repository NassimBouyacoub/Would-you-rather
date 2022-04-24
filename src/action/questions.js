
import { addUserQuestion } from "./users";
import { saveQuestion } from "../utils/initData";
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION';


function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
export function handleSaveQuestion(one, two) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestion({
      one,
      two,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
      .then((question) => dispatch(addUserQuestion(question)))
  }

}