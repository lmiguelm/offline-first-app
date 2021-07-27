import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

export const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    host: '192.168.15.149',
  })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

console.tron = tron;

tron.clear();
