import React from 'react';
import { Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import MyTodos from '../screens/MyTodos';

export function TabsRouter() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        tabStyle: {
          backgroundColor: '#9466FF',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        style: {
          height: 50,
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 15,
        },
        iconStyle: {
          flex: 0,
          width: 24,
          height: 24,
        },
        activeTintColor: '#04D361',
        inactiveTintColor: '#fff',
      }}
    >
      <Screen
        component={Home}
        name="Home"
        options={{
          title: 'Nova',
          tabBarIcon: ({ color, focused, size }) => (
            <Feather size={size} color={color} name="plus-circle" />
          ),
        }}
      />

      <Screen
        component={MyTodos}
        name="MyTodos"
        options={{
          title: 'Tarefas',
          tabBarIcon: ({ color, focused, size }) => (
            <Feather size={size} color={color} name="list" />
          ),
        }}
      />
    </Navigator>
  );
}
