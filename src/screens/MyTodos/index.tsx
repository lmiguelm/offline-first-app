import React from 'react';
import { connect } from 'react-redux';
import { StoreType } from '../../reducers';

import { View, FlatList, RefreshControl } from 'react-native';

import { styles } from './styles';

import Todo from '../../components/Todo';
import { ListDivider } from '../../components/ListDivider';
import { TodoType } from '../../reducers/todos';
import { findAll } from '../../actions/todos';

import { Header } from '../../components/Header';
import { Feedback } from '../../components/Feedback';
import { useEffect } from 'react';

type MyTodosProps = {
  todos: TodoType[];
  loading: boolean;
  findAll: () => void;
};

function MyTodos({ todos, loading, findAll }: MyTodosProps) {
  useEffect(() => {
    findAll();
  }, []);

  if (todos.length === 0) {
    return <Feedback title="Ops!" text="Você ainda não possui nenhuma tarefa!" />;
  }

  return (
    <View style={styles.container}>
      <Header title="Minhas tarefas" showBadge={todos.length || 0} />

      <FlatList
        data={todos}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => <Todo todo={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.list}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={findAll} />}
      />
    </View>
  );
}

const mapStateToProps = (state: StoreType) => ({
  todos: state.todos,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  findAll: () => dispatch(findAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyTodos);
