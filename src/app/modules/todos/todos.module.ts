import { NgModule } from '@angular/core';

import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodosRoutingModule } from './todos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './pages/todos/todos.component';

@NgModule({
  declarations: [TodosComponent, TodoAddComponent],
  imports: [TodosRoutingModule, ReactiveFormsModule],
})
export class TodosModule {}
