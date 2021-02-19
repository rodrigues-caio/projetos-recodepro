import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import imageHome from '../../assets/imageHome.png';

import styles from './styles.js';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#888' }}>
        Seja bem vindo!
      </Text>
      <Text style={{ fontSize: 22, textAlign: 'center', margin: 20 }}>
        Conheça os seus contatos e ajude-os com o que você sabe.
      </Text>
      <Image source={imageHome} style={styles.image} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Listagem')}
      >
        <Text style={styles.titleButton}>Listar contatos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
