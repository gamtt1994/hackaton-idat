import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

const Cabecera = () => {
  const [nombre, onChangeName] = useState('Virginia Maldonado');
  const [valor, onChangeValue] = useState(false);

  const onImageAlert = () => {
    Alert.alert(
      'Alerta',
      'Esta funcionalidad aún no se encuentra habilitada',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelar'),
          style: 'cancel',
        },
        {text: 'Aceptar', onPress: () => console.log('Aceptar')},
      ],
      {cancelable: false},
    );
  };

  const CambiarNombre = (valor) => {
    if (valor === true) {
      onChangeValue(false);
    } else {
      onChangeValue(true);
    }
  };

  return (
    <View style={styles.contenedorHeader}>
      <View style={styles.contenedorImagen}>
        <TouchableOpacity style={styles.Cabecera} onPress={onImageAlert}>
          <Image
            style={styles.imagen}
            source={require('../../img/imagen.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contenedorInput}>
        <View>
          <TextInput
            style={styles.inputUserName}
            editable={valor}
            selectTextOnFocus={valor}
            onChangeText={(text) => onChangeName(text)}
            value={nombre}
            onBlur={() => CambiarNombre(valor)}
          />
        </View>

        <View style={styles.btnCambiarNombre}>
          <TouchableHighlight onPress={() => CambiarNombre(valor)}>
            <Image
              style={styles.imagenUsuario}
              source={require('../../img/usuario.jpg')}
            />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorHeader: {
    width: '100%',
    backgroundColor: '#a71b75',
  },
  contenedorImagen: {
    height: 300,
    width: '100%',
    marginVertical: 0,
  },
  Cabecera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a71b75',
    marginVertical: 0,
  },

  imagen: {
    width: '50%',
    height: '50%',
    borderRadius: 1000,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#fff',
    marginVertical: 0,
  },
  contenedorInput: {
    width: '80%',
    flexDirection: 'row',
    backgroundColor: '#a71b75',
    height: 50,
    marginHorizontal: 40,
    textAlign: 'center',
    marginVertical: 0,
  },
  inputUserName: {
    color: '#ffffff',
    width: '100%',
    backgroundColor: '#a71b75',
  },
  btnCambiarNombre: {
    width: '50%',
    textAlign: 'center',
    alignItems: 'center',
  },
  imagenUsuario: {
    alignItems: 'center',
    width: 25,
    height: 40,
  },
});

export default Cabecera;
