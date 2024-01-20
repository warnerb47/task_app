import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Todo } from './core/interfaces/todo';

// npm run ng test -- --include src\app\todo.service.spec.ts
describe('TodoService', () => {
  let service: TodoService;
  const mockTodos = [
    { done: false, text: 'Install Dependencies' },
    { done: false, text: 'Product Feature' },
    { done: false, text: 'Write Unit test' },
    { done: false, text: 'Deploy app' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial values for BehaviorSubjects', () => {
    service.todos$.subscribe((data) => {
      expect(data).toEqual(mockTodos);
    });
  });

  it('should addTodo', () => {
    const todo: Todo = mockTodos[0];
    const initialtodos: Todo[] = [];
    service.todos = initialtodos;
    service.addTodo(todo);
    service.todos$.subscribe((data) => {
      expect(data).toEqual([...initialtodos, todo]);
    });
  });

  it('should updateTodo', () => {
    const todo: Todo = mockTodos[0];
    const update = {...todo, text: 'update'};
    const initialtodos: Todo[] = [todo];
    service.todos = initialtodos;
    service.updateTodo(todo, update);
    service.todos$.subscribe((data) => {
      expect(data[0].text).toEqual('update');
    });
  });

  it('should deleteTodo', () => {
    const todo: Todo = mockTodos[0];
    const initialtodos: Todo[] = [todo];
    service.todos = initialtodos;
    service.deleteTodo(todo);
    service.todos$.subscribe((data) => {
        expect(data).toEqual([]);
    });
  });
  
});
