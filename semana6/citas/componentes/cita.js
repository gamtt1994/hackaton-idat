import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const Cita = ({cita, eliminarPaciente}) => {
  const diagloEliminar = (id) => {
    console.log('eliminando...', id);
    eliminarPaciente(id);
  };

  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.texto}>{cita.id}</Text>
      </View>
      <View>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.texto}>{cita.nombre}</Text>
      </View>
      <View>
        <Text style={styles.label}>Apellido:</Text>
        <Text style={styles.texto}>{cita.apellido}</Text>
      </View>
      <View>
        <Text style={styles.label}>Correo:</Text>
        <Text style={styles.texto}>{cita.correo}</Text>
      </View>
      <View>
        <Text style={styles.label}>Telefono:</Text>
        <Text style={styles.texto}>{cita.telefono}</Text>
      </View>

      <View>
        <Text style={styles.label}>Fecha:</Text>
        <Text style={styles.texto}>{cita.fecha}</Text>
      </View>

      <View>
        <Text style={styles.label}>Genero masculino:</Text>
        <Text style={styles.texto}>{cita.Masculino}</Text>
      </View>

      <View>
        <Text style={styles.label}>Genero Femenino:</Text>
        <Text style={styles.texto}>{cita.Femenino}</Text>
      </View>

      <View>
        <TouchableHighlight
          onPress={() => diagloEliminar(cita.id)}
          style={styles.btnEliminar}>
          <Text style={styles.btnTextoEliminar}>Eliminar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: 30,
    borderWidth: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: '#00FF80',
    marginVertical: 10,
  },
  btnTextoEliminar: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Cita;
