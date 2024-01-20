import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreTodoService } from './todo.service';
import { environment } from '../../../environments/environment';

describe('CoreTodoService', () => {
  let service: CoreTodoService;
  let httpMock: HttpTestingController;
  const mockTodos = [
    { done: false, text: 'Install Dependencies' },
    { done: false, text: 'Product Feature' },
    { done: false, text: 'Write Unit test' },
    { done: false, text: 'Deploy app' },
  ]

// npm run ng test -- --include src\app\core\services\todo.service.spec.ts
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CoreTodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetchTodos', () => {
    service.fetchTodos().subscribe((data) => {
      expect(data).toEqual(mockTodos);
    });
    const endpoint = '/todos';
    const url = environment.url + endpoint;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockTodos);
  });




  it('should fetchTodo by id', () => {
    service.fetchTodo('mockId').subscribe((data) => {
      expect(data).toEqual(mockTodos[0]);
    });
    const endpoint = '/todos';
    const url = environment.url + endpoint + 'mockId';
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockTodos[0]);
  });



  it('should postTodo', () => {
    service.postTodo(mockTodos[0]).subscribe((data) => {
      expect(data).toEqual(mockTodos[0]);
    });
    const endpoint = '/todos';
    const url = environment.url + endpoint;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    req.flush(mockTodos[0]);
  });
});
