import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
const ModalPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = React.useState(
    'https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg',
  );
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          console.log('Close Modal');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Perfil</Text>

            <Button
              title="Take image"
              onPress={() =>
                ImagePicker.launchCamera(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 200,
                    maxWidth: 200,
                    marginBottom: 5,
                  },
                  (response) => {
                    setResponse(response);
                    console.log(response);
                  },
                )
              }
            />

            <Button
              title="Select image"
              onPress={() =>
                ImagePicker.launchImageLibrary(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 200,
                    maxWidth: 200,
                    marginBottom: 15,
                  },
                  (response) => {
                    setResponse(response);
                    console.log('Change Imagen', response);
                  },
                )
              }
            />

            <TouchableHighlight
              style={{backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
                console.log('Cerrar Modal');
              }}>
              <Text style={styles.textStyle}>Cerrar Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        {response && (
          <View style={styles.grilla}>
            <Text style={styles.titleStyle}>Podcasts</Text>
            <Image style={styles.image} source={{uri: response.uri}} />
          </View>
        )}
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  grilla: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    height: 150,
    width: 400,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginRight: 10,
    flex: 1 / 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalPicker;
