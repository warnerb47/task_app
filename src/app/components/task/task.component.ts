import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../core/interfaces/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  
  @Input() todo: Todo = { text: '', done: false};
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  
  updateStatus(): void {
    this.todo.done = !this.todo.done;
  }

  updateLabel(newLabel='New task'): void {
    this.todo.text = newLabel;
  }

  deleteTodo(): void {
    this.onDeleteTodo.emit(this.todo);
  }
}
