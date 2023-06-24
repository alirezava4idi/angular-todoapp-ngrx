import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/models/todo.model';
import { Observable } from 'rxjs';
import * as TodoActions from '../../actions/todo.actions';

interface ErrorState {
  error: Error
}

interface TodoState {
  todos: Todo[]
}

interface Error {
  error: string
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  
  error$: Observable<Error>;
  
  inputValue: string;

  

  constructor(private store: Store<TodoState>, private errStore: Store<ErrorState>) {
    this.inputValue = '';
    this.store.dispatch(TodoActions.todoErrorDelete());
    this.error$ = this.errStore.select('error');

  }

  onChange(value: string) {
    this.inputValue = value.trim();
  }

  onCreate()
  {
    this.store.dispatch(TodoActions.todoErrorDelete());
    const id = Math.floor(Math.random() * 1000);
    const title = this.inputValue;
    const done = false;

    const todo: Todo = {
      id,
      title, 
      done
    }

    if (!this.inputValue)
    {
      this.store.dispatch(TodoActions.todoErrorEmptyInput());
      return
    }

    this.store.dispatch(TodoActions.todoCreate(todo))
    this.inputValue = ''
  }

}
