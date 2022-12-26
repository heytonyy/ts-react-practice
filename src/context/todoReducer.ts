import { TodoType } from "./todoContext";

enum Types {
    Add = 'ADD_TODO',
    Delete = 'DELETE_TODO',
    Edit = 'EDIT_TODO',
}

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

type TodoPayload = {
    [Types.Add]: {
        id: string;
        title: string;
        completed: boolean;
    };
    [Types.Delete]: {
        id: string;
    };
    [Types.Edit]: {
        id: string;
    }
}

type TodoActions = ActionMap<TodoPayload>[keyof ActionMap<TodoPayload>];

const todoReducer = (state: TodoType[], action: TodoActions) => {
    switch (action.type) {
        case Types.Add:
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    completed: action.payload.completed,
                },
            ];
        case Types.Delete:
            return [
                ...state.filter(todo => todo.id !== action.payload.id)
            ];
        case Types.Edit:
            return [
                ...state.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )];
        default:
            return state;
    }
};

export { Types, type TodoActions, type TodoPayload, todoReducer };