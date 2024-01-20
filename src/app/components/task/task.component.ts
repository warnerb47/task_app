import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../core/interfaces/todo';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  
  @Input() todo: Todo = { text: '', done: false};
  
  constructor(private _todoService: TodoService) {}

  updateStatus(): void {
    this.todo.done = !this.todo.done;
  }

  updateLabel(newLabel='New task'): void {
    this.todo.text = newLabel;
  }

  deleteTodo(): void {
    this._todoService.deleteTodo(this.todo);
  }
}
