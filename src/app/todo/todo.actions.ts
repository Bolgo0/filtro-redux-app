import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[todo] Agregar todo';
export const TOGGLE_TODO = '[todo] Toggle todo';
export const EDITAR_TODO = '[todo] Editar todo';
export const ELIMINAR_TODO = '[todo] Eliminar todo';
export const MARCAR_TODOS = '[todo] Marcar Todos';
export const ELIMINAR_PENDIENTES_TODO = '[todo] Eliminar pendientes';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor( public texto: string ) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor( public id: number ) {}
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;

  constructor( public id: number , public texto: string ) {}
}

export class EliminarTodoAction implements Action {
  readonly type = ELIMINAR_TODO;

  constructor( public id: number ) {}
}

export class MarcarTodosAction implements Action {
  readonly type = MARCAR_TODOS;

  constructor( public completado: boolean ) {}
}

export class EliminarPendientesTodoAction implements Action {
  readonly type = ELIMINAR_PENDIENTES_TODO;
}


export type Acciones = AgregarTodoAction |
                        EditarTodoAction |
                        EliminarTodoAction |
                        MarcarTodosAction |
                        EliminarPendientesTodoAction |
                        ToggleTodoAction;
