import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { styles } from './styles';

type HeaderProps = {
  title: string;
  showBadge?: number;
};

export function Header({ title, showBadge = undefined }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>

      {showBadge && (
        <BorderlessButton>
          <View style={styles.numberOfTasksContainer}>
            <Text style={styles.numberOfTasksText}>{showBadge}</Text>
          </View>
        </BorderlessButton>
      )}
    </View>
  );
}
