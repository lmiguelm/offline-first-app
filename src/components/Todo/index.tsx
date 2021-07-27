import React, { useState, useCallback } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { TodoStatusType, TodoType } from '../../reducers/todos';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useRef } from 'react';
import { ModalTodoDetail } from './ModalTodoDetail';
import { formatDate } from '../../helpers/date';
import { connect } from 'react-redux';
import { StoreType } from '../../reducers';
import { updateTodo, removeTodo } from '../../actions/todos';
import ModalTodoEdit from './ModalTodoEdit';

type TodoTypeProps = {
  todo: TodoType;
  removeTodo: (id: string) => void;
  updateTodo: (todo: TodoType) => void;
};

function Todo({ todo, removeTodo, updateTodo }: TodoTypeProps) {
  const [showModalDetail, setShowModalDetail] = useState<boolean>(false);
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

  const menuRef = useRef<Menu>(null);

  function handleShowModalDetail() {
    setShowModalDetail(true);
  }
  const handleCloseModalDetail = useCallback(() => {
    setShowModalDetail(false);
  }, []);

  function handleShowModalEdit() {
    setShowModalEdit(true);
  }
  const handleCloseModalEdit = useCallback(() => {
    setShowModalEdit(false);
  }, []);

  function handleChangeStatus(status: TodoStatusType) {
    updateTodo({ ...todo, status });
    hideMenu();
  }

  function handleDeleteTodo() {
    Alert.alert('🚨 Atenção 🚨', 'Tem certeza que deseja deletar esta tarefa?', [
      {
        text: 'Não',
      },
      {
        text: 'Sim',
        onPress: () => removeTodo(todo.id),
      },
    ]);
  }

  function hideMenu() {
    menuRef.current?.hide();
  }

  function showMenu() {
    menuRef.current?.show();
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.6} onPress={handleShowModalDetail}>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {todo.title}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {todo.description}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.footer}>
          {todo.updatedAt !== null ? (
            <Text style={styles.date}>Atualizado em {formatDate(new Date(todo.updatedAt))} </Text>
          ) : (
            <Text style={styles.date}>Criado em {formatDate(new Date(todo.createdAt))} </Text>
          )}

          <View style={styles.actions}>
            <BorderlessButton onPress={handleShowModalEdit}>
              <Feather name="edit-3" size={20} color="#fff" />
            </BorderlessButton>

            <BorderlessButton onPress={handleDeleteTodo}>
              <Feather name="trash-2" size={20} color="#fff" />
            </BorderlessButton>

            <BorderlessButton onPress={showMenu}>
              <Menu ref={menuRef} button={<Feather name="chevron-down" size={20} color="#fff" />}>
                <MenuItem onPress={() => handleChangeStatus('Aberta')}>
                  <Text style={{ color: '#8257E5' }}>Aberta</Text>
                </MenuItem>
                <MenuDivider color="#8257E5" />
                <MenuItem onPress={() => handleChangeStatus('Fazendo')}>
                  <Text style={{ color: '#8257E5' }}>Fazendo</Text>
                </MenuItem>
                <MenuDivider color="#8257E5" />
                <MenuItem onPress={() => handleChangeStatus('Feita')}>
                  <Text style={{ color: '#8257E5' }}>Feita</Text>
                </MenuItem>
              </Menu>
            </BorderlessButton>
          </View>
        </View>
      </View>

      <ModalTodoDetail
        todo={todo}
        showModal={showModalDetail}
        handleCloseModal={handleCloseModalDetail}
      />

      <ModalTodoEdit
        todo={todo}
        showModal={showModalEdit}
        handleCloseModal={handleCloseModalEdit}
      />
    </>
  );
}

const mapDispacthToProps = (dispatch: any) => ({
  removeTodo: (id: string) => dispatch(removeTodo(id)),
  updateTodo: (todo: TodoType) => dispatch(updateTodo(todo)),
});

export default connect((_: StoreType) => ({}), mapDispacthToProps)(Todo);
