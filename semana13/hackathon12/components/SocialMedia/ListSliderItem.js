import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 4,
    height: height / 8,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  textView: {},
  image: {
    width: width / 4.5,
    height: height / 14,
    borderRadius: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    color: '#212121',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemSecondTitle: {
    color: '#212121',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const ListSliderItem = ({item}) => {
  console.log('item', item);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.itemSecondTitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

export default ListSliderItem;
