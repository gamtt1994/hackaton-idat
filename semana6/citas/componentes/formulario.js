import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  TouchableHighlight,
  Alert,
  Switch,
} from 'react-native';

import shortid from 'shortid';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Formulario = ({citas, setCitas, guardarMostrar}) => {
  const [nombre, guardarNombre] = useState('');
  const [apellido, guardarApellido] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [correo, guardarCorreo] = useState('');
  const [fecha, guardarFecha] = useState('');
  const [genero, guardarGenero] = useState('');
  const [Masculino, setIsMasculino] = useState(false);
  const [Femenino, setIsFemenino] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const toggleSwitch = () => setIsMasculino((previousState) => !previousState);
  const toggleSwitchFemenino = () =>
    setIsFemenino((previousState) => !previousState);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
    guardarFecha(date.toLocaleDateString('es-ES', opciones));

    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarHora = (hora) => {
    const opciones = {hour: 'numeric', minute: '2-digit'};
    guardarHora(hora.toLocaleString('en-US', opciones));
    hideTimePicker();
  };

  const crearNuevaCita = () => {
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      telefono.trim() === '' ||
      correo.trim() === '' ||
      fecha.trim() === '' ||
      genero.trim() === ''
    ) {
      MostrarAlerta();
      console.log('Debe de completar todos los campos');
      return;
    }
    const cita = {
      nombre,
      apellido,
      telefono,
      correo,
      fecha,
      Masculino,
      Femenino,
    };
    cita.id = shortid.generate();
    const citasNuevo = [...citas, cita];
    setCitas(citasNuevo);
    guardarMostrar(false);
  };

  //Muestra la alerta si falla la validación
  const MostrarAlerta = () => {
    Alert.alert(
      'Error', // titulo
      'Todos los campos son obligatorios', // mensaje
      [
        {
          text: 'Ok', //Arreglo de botones
        },
      ],
    );
  };

  return (
    <>
      <ScrollView style={styles.Formulario}>
        <View>
          <Text style={styles.label}>User Name:</Text>
          <TextInput
            onChangeText={(texto) => guardarNombre(texto)}
            style={styles.input}
            placeholder="Enter User Name"
          />
        </View>

        <View>
          <Text style={styles.label}>User Last Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => guardarApellido(texto)}
            placeholder="Enter User Last Name"
          />
        </View>

        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => guardarCorreo(texto)}
            placeholder="Enter Email"
          />
        </View>

        <View>
          <Text style={styles.label}>Mobile Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType={'numeric'}
            onChangeText={(texto) => guardarTelefono(texto)}
            placeholder="Enter your 10 digit mobile number"
          />
        </View>

        <View>
          <Text style={styles.label}>Date of Birth:</Text>
          <TouchableHighlight onPress={showDatePicker}>
            <Text style={styles.fecha}>DD/MM/YYYY</Text>
          </TouchableHighlight>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale="es_ES"
          />
          <Text onChangeText={(texto) => guardarFecha(texto)}>{fecha}</Text>
        </View>

        <View>
          <Text style={styles.label}>Genero:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => guardarGenero(texto)}
          />
        </View>

        <View>
          <Text style={styles.label}>Masculino:</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={Masculino ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={Masculino}
            onValueChange={toggleSwitch}
          />
          <Text style={styles.label}>Femenino:</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={Femenino ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={Femenino}
            onValueChange={toggleSwitchFemenino}
          />
        </View>

        <View>
          <TouchableHighlight
            onPress={() => crearNuevaCita()}
            style={styles.btnSubmit}>
            <Text style={styles.btnTextoSubmit}>SAVE</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  Formulario: {
    borderColor: '#e1e1e1',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    marginTop: 5,
    height: 50,
    borderColor: '#e1e1e1',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  fecha: {
    textAlign: 'center',
    color: '#5882FA',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'white',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#5882FA',
    marginVertical: 10,
  },
  btnTextoSubmit: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Formulario;
