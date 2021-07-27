import React, { useEffect, useState } from 'react';
import Reactotron from 'reactotron-react-native';

import { connect } from 'react-redux';
import { StoreType } from '../../reducers';
import { addTodo } from '../../actions/todos';

import {
  View,
  Text,
  TextInput,
  Keyboard,
  ActivityIndicator,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Header } from '../../components/Header';

type HomeTypeProps = {
  loading: boolean;
  addTodo: (title: string, description?: string) => void;
};

function Home({ addTodo, loading }: HomeTypeProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [keyboardIsOpen, setKeyboardIsOpen] = useState<boolean>(false);
  const [enableButton, setEnableButton] = useState<boolean>(false);

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
    if (title.trim().length > 0 && !loading) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [title, loading]);

  function handleSaveNewTask() {
    addTodo(title, description);
    setTitle('');
    setDescription('');
    Keyboard.dismiss();
  }

  return (
    <>
      {!keyboardIsOpen && <Header title="Cadastre uma tarefa" />}

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-120}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

              <RectButton
                enabled={enableButton}
                style={[styles.button, !enableButton && { opacity: 0.8 }]}
                onPress={handleSaveNewTask}
              >
                {loading ? (
                  <ActivityIndicator size="large" color="#9466FF" />
                ) : (
                  <Text style={styles.buttonText}>Salvar</Text>
                )}
              </RectButton>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const mapStateToProps = (state: StoreType) => ({
  todos: state.todos,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (title: string, description?: string) => dispatch(addTodo(title, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
