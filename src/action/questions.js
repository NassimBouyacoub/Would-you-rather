
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
export function handleSaveQuestion(optionOneText, optionTwoText,authedUser) {
  console.log(optionOneText,optionTwoText)

    console.log(optionOneText,optionTwoText)
    console.log(authedUser)
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author:authedUser}
    )
      .then((question) => (addQuestion(question)))
      .then((question) => (addUserQuestion(question,authedUser)))

}