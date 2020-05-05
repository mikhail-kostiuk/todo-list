import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';

import Todo from '../interfaces/Todo';
import { AuthService } from 'src/app/core/authentification/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  addTodo(todo: Todo): void {
    this.firestore.collection('todos').doc().set(todo);
  }
}
