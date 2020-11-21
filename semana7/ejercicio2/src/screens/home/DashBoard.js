import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SongSlider from '../../components/SongSlider/ListSlider';
import Headers from '../../components/Header/header';
import {DataSong} from '../../resources/data/DataSong';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Headers />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.title}>My favorite places</Text>
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
