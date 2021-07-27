import { AnyAction } from 'redux';
import { Types } from './types';

export type QueueType = {
  method: 'findAll' | 'newTodo' | 'removeTodo' | 'updateTodo';
  payload?: any;
};

const INITIAL_STATE: [] = [];

export function QueueReducer(state = INITIAL_STATE, action: AnyAction) {
  const { type, payload } = action;

  switch (type) {
    case Types.ADD_TO_QUEUE:
      return [...state, payload];
    case Types.CLEAR_QUEUE:
      return [];
    default:
      return state;
  }
}
