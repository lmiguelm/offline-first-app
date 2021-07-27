import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  modalIcon: {
    alignSelf: 'flex-end',
  },
  content: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'justify',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  description: {
    marginTop: 30,
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'justify',
  },
  footer: {
    alignSelf: 'flex-end',
    marginTop: 100,
  },
  footerText: {
    fontSize: 10,
    opacity: 0.5,
    textTransform: 'uppercase',
  },
});
