import React, { createContext, useReducer, Dispatch, useContext } from "react"
import { todoReducer, TodoActions } from "./todoReducer"

type TodoType = {
    id: string;
    title: string;
    completed: boolean;
}

type TodoStateType = {
    todoList: TodoType[];
}

const initialState = {
    todoList: [],
}

const TodoContext = createContext<{
    state: TodoStateType;
    dispatch: React.Dispatch<TodoActions>;
}>({
    state: initialState,
    dispatch: () => null,
})

type TodoProviderProps = {
    children: React.ReactNode;
}

const mainReducer = ({todoList}: TodoStateType, action: TodoActions) => ({
    todoList: todoReducer(todoList, action)
})

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodo = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error("useTodo must be used within a TodoProvider")
    }
    return context
}

export { type TodoType, type TodoStateType, useTodo, TodoProvider }