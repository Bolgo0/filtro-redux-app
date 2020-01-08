import { Component, OnInit } from '@angular/core';
import { filtrosValidos, SetFilterAction, acciones } from '../../filter/filter.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { EliminarPendientesTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: filtrosValidos[] = ['todos', 'pendientes', 'completados'];
  filtroActual: filtrosValidos;
  tareasPendientes: number;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    this.store.subscribe( state => {
      this.tareasPendientes = state.todos.filter( todo => !todo.completado ).length;
      this.filtroActual = state.filtro;
    });
  }

  aplicarFiltro(nuevoFiltro: filtrosValidos) {
    const accion = new SetFilterAction(nuevoFiltro);

    this.store.dispatch( accion );
  }

  borrarTerminados() {
    const accion = new EliminarPendientesTodoAction();

    this.store.dispatch( accion );
  }
}
