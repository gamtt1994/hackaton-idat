import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, Animated} from 'react-native';

const styles = StyleSheet.create({
  container1: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container2: {
    flex: 0.6,
  },
  imagePrincipal: {
    width: 150,
    height: 150,
    borderRadius: 40,
  },
  imageSecundario: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 30,
  },
  textDetalle: {
    fontWeight: 'bold',
    fontSize: 50,
    marginLeft: 45,
  },
  textDetalleDetalle: {
    fontSize: 20,
    marginLeft: 45,
    marginTop: 20,
  },
  textDatos: {
    color: '#93C9F3',
    marginLeft: 45,
    fontSize: 50,
  },
  textDatosDetalle: {
    color: 'black',
    marginLeft: 45,
    fontSize: 15,
  },
});

const Detalle = ({route}) => {
  {
    console.log('Navigation', route);
  }
  return (
    <>
      <View style={styles.container1}>
        <Image
          source={{
            uri: route.params.image,
          }}
          style={styles.imagePrincipal}></Image>
        <Image
          source={{
            uri:
              'https://cdn.icon-icons.com/icons2/566/PNG/128/heart_icon-icons.com_54351.png',
          }}
          style={styles.imageSecundario}></Image>
      </View>
      <View style={styles.container2}>
        <Text style={styles.textDetalle}>{route.params.title}</Text>
        <Text style={styles.textDetalleDetalle}>{route.params.subtitle}</Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            <Text style={styles.textDatos}>900</Text>
            <Text style={styles.textDatosDetalle}>Like</Text>
          </View>
          <View>
            <Text style={styles.textDatos}>120</Text>
            <Text style={styles.textDatosDetalle}>Dislike</Text>
          </View>
          <View>
            <Text style={styles.textDatos}>31</Text>
            <Text style={styles.textDatosDetalle}>Follow</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Detalle;
