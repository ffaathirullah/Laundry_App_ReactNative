import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Gap = ({height, width}) => (
  <View style={{height: height, width: width}} />
);

export default Gap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
