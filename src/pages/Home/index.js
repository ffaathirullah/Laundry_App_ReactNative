import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {Imageheader, background} from '../../assets';

const Home = ({}) => (
  <View style={styles.container}>
    <ImageBackground source={Imageheader} style={styles.header}>
      <Image source={background} style={styles.logo} />
      <View style={styles.hello}>
        <Text style={styles.selamat}>Selamat Datang</Text>
        <Text style={styles.username}>Fachrul</Text>
      </View>
    </ImageBackground>
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
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  hello: {
    marginTop: windowHeight * 0.025,
  },
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',
  },
});
