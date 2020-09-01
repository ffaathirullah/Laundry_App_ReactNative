import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {
  Add_saldo,
  Get_Point,
  Icon_satuan,
  Icon_kiloan,
  Icon_vip,
  Icon_karpet,
  Icon_setrika,
  Icon_express,
} from '../../assets/icons';
import {WarnaSekunder} from '../../utils';

const BottomIcon = ({title, type}) => {
  const Icon = () => {
    if (title === 'Add Saldo') {
      return <Add_saldo />;
    }
    if (title === 'Get Point') {
      return <Get_Point />;
    }
    if (title === 'Satuan') {
      return <Icon_satuan />;
    }
    if (title === 'Kiloan') {
      return <Icon_kiloan />;
    }
    if (title === 'Setrika saja') {
      return <Icon_setrika />;
    }
    if (title === 'Karpet') {
      return <Icon_karpet />;
    }
    if (title === 'Vip') {
      return <Icon_vip />;
    }
    if (title === 'Express') {
      return <Icon_express />;
    }
    return <Add_saldo />;
  };
  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BottomIcon;

const styles = StyleSheet.create({
  container: (type) => ({
    marginBottom: 12,
    marginRight: type === 'layanan' ? 30 : 0,
  }),
  text: (type) => ({
    fontSize: 10,
    fontFamily:
      type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
  }),
  button: (type) => ({
    backgroundColor: WarnaSekunder,
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 10,
  }),
});
