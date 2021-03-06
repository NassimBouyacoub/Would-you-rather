import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../action/questions"

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            console.log(action)
            return {
                ...state,
                [action.question.id]: action.question,
            }
        default:
            return state
    }
}