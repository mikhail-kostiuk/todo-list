import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import Todo from '../../interfaces/Todo';
import { AuthService } from 'src/app/core/authentification/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  isAddTodoOpen: boolean;

  constructor(
    private authService: AuthService,
    private todoService: TodoService
  ) {
    this.isAddTodoOpen = false;
  }

  ngOnInit(): void {
    this.authService.user$
      .pipe(
        switchMap((user) => {
          return this.todoService.getTodos(user.uid);
        })
      )
      .subscribe((todos) => {
        this.todos = todos;
      });
  }

  toggleAddTodoForm(): void {
    this.isAddTodoOpen = !this.isAddTodoOpen;
    console.log(this.isAddTodoOpen);
  }

  onAdded(): void {
    this.isAddTodoOpen = false;
  }
}
