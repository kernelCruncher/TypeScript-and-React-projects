import { Todo, Action, ActionTypes } from '../actions'

//reducer takes in an state and action, and then produces a new state (depending on the action).
export const todosReducer = (state: Todo[] = [], action: Action) =>  {
        switch (action.type){
            case ActionTypes.fetchTodos:
                return action.payload
            case ActionTypes.deleteTodo:
                return state.filter((todo: Todo) => todo.id !== action.payload)
            default:
                return state
        }
}