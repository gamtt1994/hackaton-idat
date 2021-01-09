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

export const styles = StyleSheet.create({
  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});

const ListSlider = ({data}) => {
  const scrollX = new Animated.Value(0);
  console.log('Data socialMedia', data);
  if (data && data.length) {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return <ListliderItem item={item.item} />;
          }}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}},
          ])}
        />
      </View>
    );
  }
  return null;
};

export default ListSlider;
