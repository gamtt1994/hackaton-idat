import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: width,
    height: height / 10,
    margin: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingVertical: 10,
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    flexDirection: 'column',
    alignItems: 'center',
    width: width / 5,
    height: height / 10,
    borderRadius: 100,
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
  title: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 10,
    marginHorizontal: 20,
  },
  titulos: {
    width: '80%',
  },
});

const Headers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titulos}>
        <Text style={styles.title}>Feed</Text>
        <Text style={styles.subtitle}>140 followers</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/38/38934.png',
          }}
        />
      </View>
    </View>
  );
};

export default Headers;
