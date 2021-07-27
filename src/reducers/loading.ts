import { AnyAction } from 'redux';

export type LoadingType = boolean;

const INITIAL_STATE: LoadingType = false;

export function LoadingReducer(state = INITIAL_STATE, { type }: AnyAction) {
  switch (type) {
    case 'LOADING':
      return true;
    case 'LOADED':
      return false;
    default:
      return state;
  }
}
