import { RECEIVE_USERS, ADD_USER_QUESTION } from '../action/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_QUESTION:
            const { id, author } = action;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(id)
                }
            };
        default:
            return state

    }
}
