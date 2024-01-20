import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoreTodoService {

  constructor(private _httpClient: HttpClient) { }

  fetchTodos(): Observable<Todo[]> {
    const endpoint = '/todos';
    return this._httpClient.get<Todo[]>(
      environment.url + endpoint
    );
  }


  fetchTodo(id: string): Observable<Todo> {
    const endpoint = '/todos';
    return this._httpClient.get<Todo>(
      environment.url + endpoint + id
    );
  }

  postTodo(payload: Todo): Observable<Todo> {
    const endpoint = '/todos';
    return this._httpClient.post<Todo>(
      environment.url + endpoint,
      payload,
    );
  }
}
