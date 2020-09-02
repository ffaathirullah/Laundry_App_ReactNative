import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icon_PesananaAktif} from '../../assets/icons';
import {WarnaUtama, WarnaWarn} from '../../utils';

const PesananAktif = ({title, status}) => (
  <TouchableOpacity style={styles.container}>
    <Icon_PesananaAktif />
    <View style={styles.text}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status(status)}>{status}</Text>
    </View>
  </TouchableOpacity>
);

export default PesananAktif;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      wid: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: windowHeight * 0.03,
    alignItems: 'center',
  },
  text: {
    marginLeft: windowWidth * 0.02,
  },
  title: {
    fontFamily: 'TitilliumWeb-SemiBold',
    fontSize: 18,
  },
  status: (status) => ({
    fontFamily: 'TitilliumWeb-Light',
    fontSize: 16,
    color: status === 'Masih Dicuci' ? WarnaWarn : WarnaUtama,
  }),
});
