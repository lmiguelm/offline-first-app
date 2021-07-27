import { TodoService } from '../services/todo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { QueueType } from '../reducers/queue';

class TodoQueueClass {
  queue: QueueType[] = [];

  constructor() {
    AsyncStorage.getItem('@queue').then((response) => {
      if (response) {
        this.queue = JSON.parse(response) ?? [];
      }
    });
  }

  async push(queue: QueueType) {
    this.queue.push(queue);
    await AsyncStorage.setItem('@queue', JSON.stringify(this.queue));
  }

  async clear() {
    this.queue = [];
    await AsyncStorage.removeItem('@queue');
  }

  existsQueue() {
    return this.queue.length > 0;
  }

  async execute() {
    this.queue.forEach(async (item) => {
      await TodoService[item.method](item.payload);
    });

    await this.clear();
  }
}

export const TodoQueue = new TodoQueueClass();
