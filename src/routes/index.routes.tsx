import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabsRouter } from './tabs.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <TabsRouter />
    </NavigationContainer>
  );
}
