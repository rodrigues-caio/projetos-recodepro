import { StyleSheet } from 'react-native';

const corRosa = '#FF007F';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  contentTop: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: corRosa,
    marginBottom: 8,
  },

  text: {
    color: corRosa,
    fontSize: 22,
  },

  button: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    height: 40,
    marginTop: 16,
    backgroundColor: corRosa,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
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
