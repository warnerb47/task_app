import { Pipe, PipeTransform } from '@angular/core';
import { Observable, catchError, isObservable, map, of, startWith } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Pipe({
  name: 'withLoading',
  standalone: true
})
export class WithLoadingPipe implements PipeTransform {

  transform(value: Observable<Todo[]>, ...args: unknown[]): Observable<{
    loading?: boolean,
    error?: boolean,
    data?: Todo[],
  }> {
    return isObservable(value)
      ? value.pipe(
        map((data: any) => ({ loading: false, data })),
        startWith({ loading: true }),
        catchError(error => of({ loading: false, error }))
      )
      : of({ data: value});
  }
}
