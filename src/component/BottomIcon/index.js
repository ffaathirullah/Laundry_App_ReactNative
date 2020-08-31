import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const BottomIcon = ({}) => (
  <TouchableOpacity>
    <Text>Button</Text>
  </TouchableOpacity>
);

export default BottomIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
