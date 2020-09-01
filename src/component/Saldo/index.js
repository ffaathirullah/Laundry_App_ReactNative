import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WarnaUtama} from '../../utils';
import BottomIcon from '../BottomIcon';
import Gap from '../Gap';

const Saldo = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.informasiSaldo}>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>Saldo :</Text>
          <Text style={styles.valueSaldo}>RP. 100000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelPoint}>Antar Point :</Text>
          <Text style={styles.valuePoint}>100 point</Text>
        </View>
      </View>
      <View style={styles.bottomAksi}>
        <BottomIcon title="Add Saldo" />
        <Gap width={10} />
        <BottomIcon title="Get Point" />
      </View>
    </View>
  );
};

export default Saldo;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    margin: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginTop: -windowHeight * 0.05,
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  informasiSaldo: {
    width: '60%',
  },
  labelSaldo: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 20,
  },
  valueSaldo: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 20,
  },
  labelPoint: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 12,
  },
  valuePoint: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 12,
    color: WarnaUtama,
  },
  bottomAksi: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'flex-end',
  },
});
