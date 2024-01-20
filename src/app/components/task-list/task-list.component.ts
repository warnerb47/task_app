import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { Observable, of } from 'rxjs';
import { Todo } from '../../core/interfaces/todo';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../todo.service';
import { WithLoadingPipe } from '../../core/pipe/with-loading.pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ CommonModule, TaskComponent, WithLoadingPipe ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

  todos$!: Observable<Todo[]>;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todos$ = this._todoService.todos$;
  }

}
