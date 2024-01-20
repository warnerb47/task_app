import { Component, Input } from '@angular/core';
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
  
  updateStatus(): void {
    this.todo.done = !this.todo.done;
  }
}
