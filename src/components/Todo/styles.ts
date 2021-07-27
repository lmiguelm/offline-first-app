import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 125,
    backgroundColor: '#8257E5',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 5,
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  description: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.4,
  },
  actions: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '35%',
  },
  modalContainer: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  modalIcon: {
    alignSelf: 'flex-end',
  },
  modalText: {
    marginTop: 60,
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'justify',
  },
});
