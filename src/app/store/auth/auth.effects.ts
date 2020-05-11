import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap, filter } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}
  // @Effect()
  // getState$ = this.actions$.pipe(
  //   ofType(authActions.GET_STATE),
  //   switchMap((payload) => this.fireAuth.authState),
  //   map((firebaseUser) => {
  //     console.log(firebaseUser);
  //     if (firebaseUser) {
  //       this.firestore
  //         .collection('users')
  //         .doc(firebaseUser.uid)
  //         .get()
  //         .pipe(map((user) => new authActions.Authenticated(user.data())));
  //     } else {
  //       return new authActions.NotAuthenticated();
  //     }
  //   }),
  // );
}
