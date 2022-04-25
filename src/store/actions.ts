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
    | { type: typeof DELETE_TODO; payload: number; } // here the payload will be the identifier of the Todo item we want to delete
    | {
        type: typeof UPDATE_TODO;
        payload: {
            id: number;
            text: string;
        };
    }
    | { type: typeof TOGGLE_TODO; payload: number; }
    | { type: typeof SET_NEWTODO; payload: string; }
    | { type: typeof SET_TODOS; payload: Todo[]; }
    ;
