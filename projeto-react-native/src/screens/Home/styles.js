import { StyleSheet } from 'react-native';

const corRosa = '#FF007F';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 8,
  },

  button: {
    backgroundColor: corRosa,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderRadius: 8,
  },

  titleButton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
  },
});
