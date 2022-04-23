import { getInitialData } from "../utils/initData"
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
import { setAuthedUser } from "./setAuthedUser"


export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(null))
      })
  }
}