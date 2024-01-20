import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from './core/interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  get todos$(): Observable<Todo[]> {
    return this._todos.asObservable();
  }

  set todos(todos: Todo[]) {
    this._todos.next(todos);
  }


  addTodo(todo: Todo): void {
    const todos = [...this._todos.value, todo];
    this.todos = todos;
  }
  
  updateTodo(payload: Todo): void {
    const data = this._todos.value;
    const index = data.findIndex(d => d.text === payload.text);
    if (index !== -1) {
        data[index] = payload;
        this.todos = data;
    }
  }
  
  deleteTodo(payload: Todo): void {
    const data = this._todos.value;
    const index = data.findIndex(d => d.text === payload.text);
    if (index !== -1) {
        data.splice(index, 1);
        this.todos = data;
    }
  }
}
