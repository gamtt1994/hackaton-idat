import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 4,
    height: height / 4,
    margin: 2,
    borderRadius: 10,
    alignContent: 'center',
  },
  textView: {},
  image: {
    width: width / 2.5,
    height: height / 6,
    borderRadius: 10,
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

const SocialMediaSliderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemsubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

export default SocialMediaSliderItem;
