import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Add_saldo, Get_Point} from '../../assets/icons';
import {WarnaSekunder} from '../../utils';

const BottomIcon = ({title}) => {
  const Icon = () => {
    if (title === 'Add Saldo') {
      return <Add_saldo />;
    }
    if (title === 'Get Point') {
      return <Get_Point />;
    }
    return <Add_saldo />;
  };
  return (
    <TouchableOpacity>
      <View style={styles.IconColor}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BottomIcon;

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    fontFamily: 'TitilliumWeb-Regular',

    textAlign: 'center',
  },
  IconColor: {
    backgroundColor: WarnaSekunder,
    padding: 7,
    borderRadius: 10,
  },
});
