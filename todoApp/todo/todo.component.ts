import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos?: Todo[];

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.getTodosByUserId(userId);
  }

  getTodosByUserId(userId: number){
    return this.todoService.getTodoByUserId(userId).subscribe(resp =>{
      this.todos = resp;
    })
  }
}
