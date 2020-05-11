import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoComponent } from './components/todo/todo.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';

@NgModule({
  declarations: [TodosComponent, TodoListComponent, TodoAddComponent, TodoComponent, TodoEditComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class TodosModule {}
