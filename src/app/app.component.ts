import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';

// import { AppState } from './store/app.states';
// import * as authActions from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todo-list';

  constructor() {} // private store: Store<AppState>

  ngOnInit(): void {
    // this.store.dispatch(new authActions.GetState());
  }
}
