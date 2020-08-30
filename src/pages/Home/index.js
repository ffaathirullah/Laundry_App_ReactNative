import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = ({}) => (
  <View style={styles.container}>
    <Text>I'm Home</Text>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
