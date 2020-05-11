import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore/firestore';

import Todo from '../interfaces/Todo';
import { AuthService } from 'src/app/core/authentification/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  getTodos(userId): Observable<any> {
    console.log(userId);
    return this.firestore
      .collection('todos', (ref) => ref.where('createdBy', '==', userId))
      .valueChanges({ idField: 'id' });
  }

  addTodo(todo: Todo): void {
    this.firestore.collection('todos').add(todo);
  }

  editTodo(id: string, name: string, deadline: number, priority: string) {
    this.firestore
      .collection('todos')
      .doc(id)
      .update({ name, deadline, priority });
  }

  deleteTodo(id: string): void {
    this.firestore.collection('todos').doc(id).delete();
  }

  checkTodo(id: string): void {
    this.firestore.collection('todos').doc(id).update({ checked: true });
  }

  uncheckTodo(id: string): void {
    this.firestore.collection('todos').doc(id).update({ checked: false });
  }
}
