import Netinfo from '@react-native-community/netinfo';

import { TodoType } from '../reducers/todos';
import { Types } from '../reducers/types';

import { showToastBottom } from '../helpers/showToast';
import { StoreType } from '../reducers';

import uuid from 'react-native-uuid';
import { TodoService } from '../services/todo';
import { TodoQueue } from '../queue';

export const findAll = () => async (dispatch: any) => {
  dispatch({ type: Types.LOADING });

  try {
    if ((await Netinfo.fetch()).isConnected) {
      const todos = await TodoService.findAll();

      dispatch({
        type: Types.FIND_ALL_TODOS,
        payload: todos,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    showToastBottom('Conecte-se a uma rede de internet');
  } finally {
    dispatch({ type: Types.LOADED });
  }
};

export const addTodo = (title: string, description?: string) => async (dispatch: any) => {
  dispatch({ type: Types.LOADING });

  const todo: TodoType = {
    id: String(uuid.v4()),
    title,
    description,
    status: 'Aberta',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    if ((await Netinfo.fetch()).isConnected) {
      await TodoService.newTodo(todo);
    } else {
      TodoQueue.push({ method: 'newTodo', payload: todo });
    }

    dispatch({
      type: Types.NEW_TODO,
      payload: todo,
    });

    showToastBottom('Tarefa salva com sucesso!');
  } catch (error) {
    showToastBottom('Ocorreu um erro ao salvar esta tarefa!');
  } finally {
    dispatch({ type: Types.LOADED });
  }
};

export const removeTodo = (id: string) => async (dispatch: any, getState: () => StoreType) => {
  dispatch({ type: Types.LOADING });

  try {
    if ((await Netinfo.fetch()).isConnected) {
      console.log('ok');
      await TodoService.removeTodo(id);
    } else {
      TodoQueue.push({ method: 'removeTodo', payload: id });
    }

    const { todos } = getState();
    const newArrayTodos = todos.filter((todo) => todo.id !== id);
    dispatch({
      type: Types.REMOVE_TODO,
      payload: newArrayTodos,
    });
    showToastBottom('Tarefa removida!');
  } catch (error) {
    showToastBottom('Ocorreu um erro ao remover esta tarefa!');
  } finally {
    dispatch({ type: Types.LOADED });
  }
};

export const updateTodo = (todo: TodoType) => async (dispatch: any, getState: () => StoreType) => {
  dispatch({ type: Types.LOADING });

  try {
    const data = {
      ...todo,
      updateAt: new Date(),
    };

    if ((await Netinfo.fetch()).isConnected) {
      await TodoService.updateTodo(data);
    } else {
      TodoQueue.push({ method: 'updateTodo', payload: data });
    }

    const { todos } = getState();
    const { id } = todo;

    const newArrayTodos = todos.map((todo) => {
      if (id === todo.id) {
        return data;
      }
      return todo;
    });

    dispatch({
      type: Types.UPDATE_TODO,
      payload: newArrayTodos,
    });

    showToastBottom('Tarefa atualizada com sucesso!');
  } catch (error) {
    showToastBottom('Ocorreu um erro ao atualizar esta tarefa!');
  } finally {
    dispatch({ type: Types.LOADED });
  }
};
