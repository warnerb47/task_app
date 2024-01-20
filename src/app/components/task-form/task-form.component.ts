import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {

  @ViewChild('label') label!: ElementRef<HTMLInputElement>;

  constructor(private _todoService: TodoService) {}

  addTask(text: string): void {
    this.label.nativeElement.value = '';
    if (text) {
      this._todoService.addTodo({done: false, text});
    }
  }
}
