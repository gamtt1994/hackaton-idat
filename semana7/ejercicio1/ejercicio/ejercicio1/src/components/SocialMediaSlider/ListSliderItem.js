import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: height / 6,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  textView: {},
  image: {
    width: width / 6,
    height: height / 15,
    borderRadius: 10,
    margin: 10,
  },
  itemTitle: {
    marginLeft: 10,
    color: '#212121',
    fontSize: 13,
    fontWeight: 'bold',
  },
  itemPrice: {
    marginLeft: 8,
    color: '#212121',
    fontSize: 13,
    fontWeight: '300',
  },
});

const SocialMediaSliderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

export default SocialMediaSliderItem;
