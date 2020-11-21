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
  image2: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
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
});

const Headers = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://up.quizlet.com/14mgef-5sFDv-256s.png',
          }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>Gustavo Maldonado</Text>
        <Text style={styles.itemsubtitle}>140 followers</Text>
      </View>
      <View>
        <Image
          style={styles.image2}
          source={{
            uri:
              'https://cdn.icon-icons.com/icons2/1154/PNG/128/1486564394-edit_81508.png',
          }}
        />
      </View>
    </View>
  );
};

export default Headers;
