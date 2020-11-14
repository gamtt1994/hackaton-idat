import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Image,
} from 'react-native';
import Cita from './componentes/cita';
import Formulario from './componentes/formulario';
import Cabecera from './componentes/Header/index.js';

const App = () => {
  const [mostrar, guardarMostrar] = useState(false);

  const [citas, setCitas] = useState([
    {
      id: '1',
      nombre: 'Gustavo',
      apellido: 'Maldonado',
      correo: 'ga@ga.com',
      telefono: '947230083',
      fecha: '11/14/20',
      genero: 'masculino',
    },
  ]);

  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  const mostrarListado = () => {
    guardarMostrar(!mostrar);
  };

  const mostrarFormulario = () => {
    guardarMostrar(!mostrar);
  };

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Cabecera />

        <View style={styles.TituloChange}>
          <TouchableHighlight
            onPress={() => mostrarFormulario()}
            style={styles.btnSubmit}>
            <Text
              style={styles.inputUsuario}
              onChangeText={(texto) => guardarPropietario(texto)}>
              USER PROFILE
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contenido}>
          {mostrar ? (
            <>
              <Formulario
                citas={citas}
                setCitas={setCitas}
                guardarMostrar={guardarMostrar}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {citas.length > 0 ? '' : 'No hay Citas'}
              </Text>

              <FlatList
                data={citas}
                style={styles.listado}
                renderItem={({item}) => (
                  <Cita cita={item} eliminarPaciente={eliminarPaciente} />
                )}
                keyExtractor={(cita) => cita.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  TituloChange: {
    textAlign: 'center',
    marginHorizontal: '2.5%',
  },
  inputUsuario: {
    textAlign: 'center',
  },
  listado: {
    flex: 1,
  },
  btnSubmit: {
    padding: 10,
    marginVertical: 10,
  },
  btnTextoSubmit: {
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
