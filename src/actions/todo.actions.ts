import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const todoCreate = createAction(
    '[Todo] Create',
    props<Todo>()
)


export const todoDelete = createAction(
    '[Todo] Delete',
    props<{id: number}>()
)

export const todoIsDone = createAction(
    '[Todo] Compelete',

    props<{id: number}>()
)

export const todoErrorEmptyInput = createAction(
    '[Todo] Error',
)

export const todoErrorDelete = createAction(
    '[Todo] Error Delete',
)