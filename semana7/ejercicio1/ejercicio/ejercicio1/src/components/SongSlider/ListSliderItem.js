import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: width,
    height: height / 5,
    backgroundColor: 'powderblue',
    margin: 2,
    borderRadius: 10,
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: width / 2,
    height: height / 5,
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
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemsubtitle}>{item.subtitle}</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
    </View>
  );
};

export default SocialMediaSliderItem;
