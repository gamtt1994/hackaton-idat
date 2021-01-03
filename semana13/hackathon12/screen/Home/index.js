import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SocialSlider from '../../components/SocialMedia/ListSlider';
import SongSlider from '../../components/SongSlider/ListSlider';
import Cabecera from '../../components/Cabecera';
import {DataSocialMedia} from '../../components/resources/data/DataSocialMedia';
import {DataSong} from '../../components/resources/data/DataSong';

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Cabecera />
        </View>
        <View style={styles.socialMedia}>
          <Text style={styles.title}>My social Networks</Text>
          <SocialSlider data={DataSocialMedia} />
        </View>
        <View style={styles.podcasts}>
          <Text style={styles.title}>My favorite song</Text>
          <SongSlider
            style={{
              flex: 1,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            navigation={navigation}
            data={DataSong}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  header: {
    height: 100,
  },
  socialMedia: {
    flex: 1,
    marginHorizontal: 20,
  },
  podcasts: {
    flex: 3,
    marginHorizontal: 20,
  },
});

export default Dashboard;
