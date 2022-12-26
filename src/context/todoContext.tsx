import React, { createContext, useReducer, useContext } from "react"
import { todoReducer, TodoActions } from "./todoReducer"
import { TodoType, TodoStateType, TodoProviderProps } from '../types/types'

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

const mainReducer = ({ todoList }: TodoStateType, action: TodoActions) => ({
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