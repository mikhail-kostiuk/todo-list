import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import User from 'src/app/shared/interfaces/User';
import { AuthService } from 'src/app/core/authentification/auth.service';
import { TodoService } from '../../services/todo.service';
import Todo from '../../interfaces/Todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  user$: Observable<User>;
  user: User;
  editTodoForm: FormGroup;
  error: string;
  @Input() todo: Todo;
  @Output() edited = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private todoService: TodoService
  ) {
    this.editTodoForm = this.formBuilder.group({
      name: '',
      deadline: null,
      priority: 'low',
    });
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
    this.editTodoForm.setValue({
      name: this.todo.name,
      deadline: moment(new Date(this.todo.deadline)).format('YYYY-MM-DD'),
      priority: this.todo.priority,
    });
  }

  onSubmit({ name, deadline, priority }): void {
    this.todoService.editTodo(
      this.todo.id,
      name,
      new Date(deadline).getTime(),
      priority
    );

    this.edited.emit();
  }
}
