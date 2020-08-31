import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {Imageheader} from '../../assets';

const Home = ({}) => (
  <View style={styles.container}>
    <ImageBackground source={Imageheader} style={styles.header} />
  </View>
);

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.25,
  },
});
