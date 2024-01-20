import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Todo } from '../../core/interfaces/todo';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../todo.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  
  @Input() todo: Todo = { text: '', done: false};
  @Output() onDelete: EventEmitter<Todo> = new EventEmitter<Todo>();
  
  constructor() {}

  updateStatus(): void {
    this.todo.done = !this.todo.done;
  }

  updateLabel(newLabel='New task'): void {
    this.todo.text = newLabel;
  }

  deleteTodo(): void {
    this.onDelete.emit(this.todo);
  }
}
