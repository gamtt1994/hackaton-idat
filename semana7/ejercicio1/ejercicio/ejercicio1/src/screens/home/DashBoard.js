import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SocialSlider from '../../components/SocialMediaSlider/ListSlider';
import SongSlider from '../../components/SongSlider/ListSlider';
import Headers from '../../components/Header/header';
import {DataSocialMedia} from '../../resources/data/DataSocialMedia';
import {DataSong} from '../../resources/data/DataSong';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View>
        <View style={styles.header}>
          <Headers />
        </View>
        <View style={styles.socialMedia}>
          <Text style={styles.title}>My social Networks</Text>
          <SocialSlider data={DataSocialMedia} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.title}>My favorite song</Text>
          <SongSlider data={DataSong} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  socialMedia: {
    height: 180,
  },
});

export default Dashboard;
