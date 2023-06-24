import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/models/todo.model';
import * as TodoActions from '../../actions/todo.actions';


interface TodosState {
  todos: Todo[]
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<TodosState>){
    this.todos$ = this.store.select('todos');
  }


  onChangeStatus(id: number){
    this.store.dispatch(TodoActions.todoIsDone({ id }));
  }

  onDelete(id: number){
    this.store.dispatch(TodoActions.todoDelete({ id }));
  }
}
