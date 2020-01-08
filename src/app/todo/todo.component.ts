import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { MarcarTodosAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  marcarTodos() {
    this.completado = !this.completado;

    const accion = new MarcarTodosAction(this.completado);
    this.store.dispatch( accion );
  }
}
