import { combineReducers } from 'redux';

import { TodosReducer, TodoType } from './todos';
import { LoadingReducer, LoadingType } from './loading';
import { QueueReducer, QueueType } from './queue';

export type StoreType = {
  todos: TodoType[];
  loading: LoadingType;
  queue: QueueType[];
};

export const rootReducer = combineReducers({
  todos: TodosReducer,
  loading: LoadingReducer,
  queue: QueueReducer,
});
