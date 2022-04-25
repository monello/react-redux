export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

// This is the main store's strucrureal descript (interface)
export interface Store {
    todos: Todo[];
    newTodo: string;
}
