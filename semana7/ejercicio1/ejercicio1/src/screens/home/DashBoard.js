import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import ListSlider from "../../components/SocialMediaSlider/ListSlider";
import { carouselSocialMedia } from "../../resource/functions/data/carouselSocialMedia";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Social Media</Text>
          <ListSlider data={carouselSocialMedia} />
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
    fontWeight: "bold",
  },
});

export default Dashboard;
