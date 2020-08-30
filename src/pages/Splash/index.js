import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Splash = ({}) => (
  <View style={styles.container}>
    <Text>I'm Splash</Text>
  </View>
);

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
