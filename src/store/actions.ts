import { Todo } from "./types";

// List of action constants
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_NEWTODO = "SET_NEWTODO";  // Set the text of the new TODO item
export const SET_TODOS = "SET_TODOS";      // Set all the Todos, This one will be used when we load all the Todo's from the JSON file

// The contents of the actions listed above
// An action has 2 arguments:
// - The type
// - (optional) The payload. The payload contains any extra information that is require to implement that particular action
export type ActionTypes =
    | { type: typeof ADD_TODO; }
    | { type: typeof DELETE_TODO; payload: number; } // payload = will be the identifier of the Todo item we want to delete
    | {
        type: typeof UPDATE_TODO;
        payload: {
            id: number;
            text: string;
        };
    }
    | { type: typeof TOGGLE_TODO; payload: number; }
    | { type: typeof SET_NEWTODO; payload: string; }
    | { type: typeof SET_TODOS; payload: Todo[]; }  // payload = a list of all the todos. will replace all the current todos
    ;

// Our list of action creators (action objects)
//  - Basically we describe how the functions should lokk
//  - These action objects (creators) will be forwarded to the Reducer, the reducer that applies these to the state and then derives a new state

export const addTodo = (): ActionTypes => ({ type: ADD_TODO });

export const deleteTodo = (id: number): ActionTypes => ({
    type: DELETE_TODO,
    payload: id
});

export const updateTodo = (id: number, text: string): ActionTypes => ({
    type: UPDATE_TODO,
    payload: { id, text }
});

export const toggleTodo = (id: number): ActionTypes => ({
    type: TOGGLE_TODO,
    payload: id
});

export const setNewTodo = (text: string): ActionTypes => ({
    type: SET_NEWTODO,
    payload: text
});

export const setTodos = (todos: Todo[]): ActionTypes => ({
    type: SET_TODOS,
    payload: todos
});
