import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  Icon_akun,
  Icon_akun_aktif,
  Icon_home,
  Icon_home_aktif,
  Icon_pesanan,
  Icon_pesanan_aktif,
} from '../../assets';
import {WarnaDisable, WarnaUtama} from '../../utils';

const TabsItems = ({label, isFocused, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <Icon_home_aktif /> : <Icon_home />;
    }
    if (label === 'Pesanan') {
      return isFocused ? <Icon_pesanan_aktif /> : <Icon_pesanan />;
    }
    if (label === 'Akun') {
      return isFocused ? <Icon_akun_aktif /> : <Icon_akun />;
    }
    return <icon_home />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabsItems;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isFocused) => ({
    fontSize: 13,
    marginTop: 8,
    color: isFocused ? WarnaUtama : WarnaDisable,
  }),
});
