import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private _todoService: TodoService) {}

  clearTodos(): void {
    this._todoService.clearTodos();
  }
}
