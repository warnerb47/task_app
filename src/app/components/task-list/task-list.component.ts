import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { Observable, of } from 'rxjs';
import { Todo } from '../../core/interfaces/todo';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../todo.service';
import { WithLoadingPipe } from '../../core/pipe/with-loading.pipe';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ CommonModule, TaskComponent, WithLoadingPipe, ConfirmDialogComponent ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

  todos$!: Observable<Todo[]>;
  hideDialog=true;
  toDelete!: Todo;
  @ViewChild('dialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();

  }

  loadTodos(): void {
    this.todos$ = this._todoService.todos$;
  }

  handleDelete(deleteConfirmed: any): void {
    this.hideDialog = true;
    if (deleteConfirmed) {
      this._todoService.deleteTodo(this.toDelete);
    }
  }
  deleteTodo(todo: Todo): void {
    this.hideDialog = false;
    this.toDelete = todo;
  }

}
