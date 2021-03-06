import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import User from 'src/app/shared/interfaces/User';
import { AuthService } from 'src/app/core/authentification/auth.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  user$: Observable<User>;
  user: User;
  addTodoForm: FormGroup;
  error: string;
  @Output() added = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private todoService: TodoService
  ) {
    this.addTodoForm = this.formBuilder.group({
      name: '',
      deadline: null,
      priority: 'low',
    });
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  onSubmit({ name, deadline, priority }): void {
    this.todoService.addTodo({
      name,
      deadline: new Date(deadline).getTime(),
      priority,
      createdAt: Date.now(),
      createdBy: this.user.uid,
      checked: false,
    });

    this.added.emit();
  }
}
