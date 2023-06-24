import { createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

const initialState: Todo[] = [];


function makeItDone(state: Todo[], id: number) {

    const updatedState = state.map(todo => todo.id === id ? {...todo, done: true} : todo);

    return [...updatedState]
    
    
}

function todoDelete(state: Todo[], id: number)
{
    const updated = state.filter(todo => todo.id !== id);
    return [...updated];
}

export const todoReducer = createReducer(
    initialState,
    on(TodoActions.todoCreate, (state, action) => ([...state, action])),
    on(TodoActions.todoIsDone, (state, action) => (makeItDone(state, action.id))),
    on(TodoActions.todoDelete, (state, action) => (todoDelete(state, action.id))),
)

const defaultErrorState = '';

export const errorReducer = createReducer(
    defaultErrorState,
    on(TodoActions.todoErrorEmptyInput, state => "Input Can't be Empty!"),
    on(TodoActions.todoErrorDelete, state => ''),
)
