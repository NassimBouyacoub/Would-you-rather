export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_Question = 'ADD_QUESTION_TO_USER';

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}


export function addUserQuestion({ author, id }) {
  return {
    type: ADD_USER_Question,
    author,id
  };
}