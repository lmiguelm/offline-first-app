import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  header: {
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 30,
    height: 120,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  numberOfTasksContainer: {
    backgroundColor: '#04D361',
    minHeight: 20,
    minWidth: 30,
    padding: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberOfTasksText: {
    color: '#fff',
  },
});
