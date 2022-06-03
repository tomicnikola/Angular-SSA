import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodoByUserId(userId: number): Observable<Todo[]>{
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos?userId=" + userId);
  }
}
