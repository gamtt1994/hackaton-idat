import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';

import ModalPicker from './src/components/modal/moda';
import MenuPerfil from './src/components/Menu/menu';

export default function Headers() {
  const [response, setResponse] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ModalPicker />
      <MenuPerfil />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff9e9e',
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
});
