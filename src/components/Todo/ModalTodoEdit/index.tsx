import React, { StatelessComponent, useEffect, useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { TodoType } from '../../../reducers/todos';
import { StoreType } from '../../../reducers';
import { connect } from 'react-redux';
import { updateTodo } from '../../../actions/todos';

type ModalTodoEditProps = {
  showModal: boolean;
  handleCloseModal: () => void;
  todo: TodoType;
  loading: boolean;
  updateTodo: (todo: TodoType) => void;
};

function ModalTodoEdit({
  showModal,
  handleCloseModal,
  todo,
  loading,
  updateTodo,
}: ModalTodoEditProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [keyboardIsOpen, setKeyboardIsOpen] = useState<boolean>(false);
  const [enableButton, setEnableButton] = useState<boolean>(false);

  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description ?? '');
  }, [showModal]);

  useEffect(() => {
    const unKeyboardShow = Keyboard.addListener('keyboardDidShow', () => setKeyboardIsOpen(true));
    const unKeyboardHide = Keyboard.addListener('keyboardDidHide', () => setKeyboardIsOpen(false));

    return () => {
      Keyboard.removeSubscription(unKeyboardShow);
      Keyboard.removeSubscription(unKeyboardHide);
      return;
    };
  }, []);

  useEffect(() => {
    if (title?.trim().length > 0 && !loading) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [title, loading]);

  function handleUpdateTodo() {
    updateTodo({ ...todo, title, description });
    setTitle('');
    setDescription('');
    Keyboard.dismiss();
    handleCloseModal();
  }

  return (
    <Modal animationType="fade" visible={showModal} onRequestClose={handleCloseModal}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContainer}>
            {!keyboardIsOpen && (
              <TouchableOpacity onPress={handleCloseModal} style={styles.modalIcon}>
                <Feather name="x" size={24} color="red" />
              </TouchableOpacity>
            )}

            <View style={styles.container}>
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="Fazer café"
                  value={title}
                  onChangeText={(value) => setTitle(value)}
                />

                <TextInput
                  style={styles.textarea}
                  multiline={true}
                  numberOfLines={10}
                  placeholder="Descrição (opcional)"
                  value={description}
                  onChangeText={(value) => setDescription(value)}
                />

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles.button, !enableButton && { opacity: 0.8 }]}
                  onPress={handleUpdateTodo}
                >
                  {loading ? (
                    <ActivityIndicator size="large" color="#9466FF" />
                  ) : (
                    <Text style={styles.buttonText}>Saalvar</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const mapStateToProps = (state: StoreType) => ({
  loading: state.loading,
});

const dispatchToProps = (dispatch: any) => ({
  updateTodo: (todo: TodoType) => dispatch(updateTodo(todo)),
});

export default connect(mapStateToProps, dispatchToProps)(ModalTodoEdit);
