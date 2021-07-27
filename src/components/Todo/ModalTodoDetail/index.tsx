import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { TodoType } from '../../../reducers/todos';
import { formatDate } from '../../../helpers/date';

type ModalTodoDetailProps = {
  showModal: boolean;
  handleCloseModal: () => void;
  todo: TodoType;
};

export function ModalTodoDetail({ showModal, handleCloseModal, todo }: ModalTodoDetailProps) {
  return (
    <Modal animationType="fade" visible={showModal} onRequestClose={handleCloseModal}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={handleCloseModal} style={styles.modalIcon}>
          <Feather name="x" size={24} color="red" />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>{todo.title}</Text>
          <Text style={styles.description}>{todo.title}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Status: {todo.status}</Text>
          <Text style={styles.footerText}>Atualiza em {formatDate(new Date(todo.updatedAt))}</Text>
          <Text style={styles.footerText}>Criada em {formatDate(new Date(todo.createdAt))}</Text>
        </View>
      </View>
    </Modal>
  );
}
