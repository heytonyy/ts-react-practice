export type TodoType = {
    id: string;
    title: string;
    completed: boolean;
}

export type TodoStateType = {
    todoList: TodoType[];
}

export type TodoProviderProps = {
    children: React.ReactNode;
}