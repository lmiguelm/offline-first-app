import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#9466FF',
    justifyContent: 'center',
  },
  title: {
    fontStyle: 'italic',
    textTransform: 'uppercase',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    width: '100%',
    padding: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  textarea: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 20,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 10,
    height: 50,
    backgroundColor: '#04D361',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
