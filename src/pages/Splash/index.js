import {Image, ImageBackground, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

import {logo, background} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={logo} style={styles.background}>
      <Image source={background} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 228,
    height: 115,
  },
});
