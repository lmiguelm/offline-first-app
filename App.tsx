import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import NetInfo from '@react-native-community/netinfo';

if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './src/store';

import { Routes } from './src/routes/index.routes';
import { TodoQueue } from './src/queue';

export default function App() {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((status) => {
      if (status.isConnected && TodoQueue.existsQueue()) {
        TodoQueue.execute();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
