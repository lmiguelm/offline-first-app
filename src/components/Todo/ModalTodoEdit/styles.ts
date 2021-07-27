import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingVertical: 60,
    backgroundColor: '#9466FF',
  },
  modalIcon: {
    alignSelf: 'flex-end',
    paddingHorizontal: 30,
  },
  modalText: {
    marginTop: 60,
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'justify',
  },
  container: {
    flex: 1,
    width: '100%',

    justifyContent: 'center',
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
