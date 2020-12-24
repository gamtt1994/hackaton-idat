import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import CalendarItem from '../../components/calendario/ListCalendar';

import {DataMeses} from '../../data/meses';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Appointment</Text>
      <View>
        <View style={styles.socialMedia}>
          <Text style={styles.title}>Pick </Text>
          <CalendarItem data={DataMeses} />
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
