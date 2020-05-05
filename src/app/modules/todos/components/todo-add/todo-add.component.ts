import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  addTodoForm: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder) {
    this.addTodoForm = this.formBuilder.group({
      name: '',
      description: '',
      deadline: null,
      priority: 'lowest',
    });
  }

  ngOnInit(): void {}

  onSubmit({ name, description, deadline, priority }): void {
    // TODO
  }
}
