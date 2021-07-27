import { AnyAction } from 'redux';
import { Types } from './types';

export type TodoStatusType = 'Aberta' | 'Fazendo' | 'Feita';

export type TodoType = {
  id: string;
  title: string;
  description?: string;
  status: TodoStatusType;
  createdAt: Date;
  updatedAt: Date;
};

const INITIAL_STATE: TodoType[] = [];

export function TodosReducer(state = INITIAL_STATE, action: AnyAction) {
  const { type, payload } = action;

  switch (type) {
    case Types.FIND_ALL_TODOS:
      return payload;
    case Types.NEW_TODO:
      return [...state, payload];
    case Types.REMOVE_TODO:
      return payload;
    case Types.UPDATE_TODO:
      return payload;
    case Types.CHANGE_STATUS_TODO:
      return payload;
    default:
      return state;
  }
}
