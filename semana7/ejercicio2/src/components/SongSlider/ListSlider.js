import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import ListliderItem from './ListSliderItem';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  dot: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const SocialSlider = ({data}) => {
  const scrollY = new Animated.Value(0);

  if (data && data.length) {
    return (
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item, index) => 'key' + index}
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return <ListliderItem item={item.item} />;
          }}
        />
      </View>
    );
  }
  return null;
};

export default SocialSlider;
