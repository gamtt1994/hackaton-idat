import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Button} from '../Header/button';
import ImagePicker from 'react-native-image-picker';
const ModalPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = React.useState(
    'https://reactnative.dev/img/tiny_logo.png',
  );
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
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
                  },
                  (response) => {
                    setResponse(response);
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
                  },
                  (response) => {
                    setResponse(response);
                  },
                )
              }
            />

            <TouchableHighlight
              style={{backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
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
          <View style={styles.image}>
            <Image
              style={{width: 200, height: 200, borderRadius: 100}}
              source={{uri: response.uri}}
            />
            <Text style={styles.textStyle}>Alisa</Text>
            <Text style={styles.textStyle}>22 want | 35 done</Text>
          </View>
        )}
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    paddingVertical: 50,
    paddingHorizontal: 50,
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
    height: 300,
    width: 400,
    backgroundColor: '#fc7272',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalPicker;
