import { TodoType } from '../reducers/todos';
import { api } from './api';

export const TodoService = {
  async newTodo(todo: TodoType) {
    await api.post('todos', todo);
  },

  async findAll() {
    const { data } = await api.get('todos');
    return data;
  },

  async removeTodo(id: string) {
    await api.delete(`todos/${id}`);
  },

  async updateTodo(data: TodoType) {
    await api.put(`todos/${data.id}`, data);
  },
};
