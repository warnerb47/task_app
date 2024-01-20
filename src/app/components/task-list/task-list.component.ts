import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { Observable, of } from 'rxjs';
import { Todo } from '../../core/interfaces/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ CommonModule, TaskComponent ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  todos: Todo[] = [
    { done: true, text: 'Install Dependencies' },
    { done: false, text: 'Product Feature' },
    { done: false, text: 'Write Unit test' },
    { done: false, text: 'Deploy app' },
  ];

  todos$: Observable<Todo[]> = of(this.todos);

  loadTodos(): void {
    this.todos$ = this.fetchTodos();
  }

  fetchTodos(): Observable<Todo[]> {
    return of([]);
  }

  onDeleteTodo(payload: Todo): void {
    console.log(payload);
    const data = this.todos;
    const index = data.findIndex(d => d.text === payload.text);
    if (index !== -1) {
        data.splice(index, 1);
        this.todos = data;
    }
  }

}
