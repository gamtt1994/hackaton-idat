import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: width,
    height: height / 5,
    backgroundColor: '#edefed',
    margin: 2,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  containerImagen: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginHorizontal: 10,
    marginTop: 5,
  },
  image: {
    width: width / 7,
    height: height / 12,
    borderRadius: 10,
  },
  icono: {
    width: width / 6,
    height: height / 12,
    borderRadius: 10,
    marginRight: 45,
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  itemTitle: {
    color: '#212121',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemsubtitle: {
    color: '#212121',
    fontSize: 12,
    textAlign: 'center',
  },
});

const SocialMediaSliderItem = ({navigation, item}) => {
  const prueba = () => {
    console.log(item.id);
  };

  return (
    <View>
      <View style={styles.containerImagen}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Detalle', item);
          }}>
          <Image
            style={styles.icono}
            source={{
              uri: 'https://image.flaticon.com/icons/png/128/832/832642.png',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemsubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

export default SocialMediaSliderItem;
