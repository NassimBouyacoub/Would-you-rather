import { getInitialData } from "../utils/initData"
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
import { setAuthedUser } from "./setAuthedUser"

export function handleInitialData () {
  console.log(localStorage)
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}