import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Icon_akun,
  Icon_akun_aktif,
  Icon_home,
  Icon_home_aktif,
  Icon_pesanan,
  Icon_pesanan_aktif,
} from '../../assets';

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
      style={{flex: 1}}>
      <Icon />
      <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabsItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
