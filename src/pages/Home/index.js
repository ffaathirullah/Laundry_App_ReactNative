import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';

import {Imageheader, background} from '../../assets';
import {Saldo} from '../../component';
import {WarnaAbu} from '../../utils';
import BottomIcon from '../../component/BottomIcon';
import {PesananAktif} from '../../pages';
const Home = ({}) => (
  <ScrollView>
    <View style={styles.container}>
      <ImageBackground source={Imageheader} style={styles.header}>
        <Image source={background} style={styles.logo} />
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang</Text>
          <Text style={styles.username}>Fachrul</Text>
        </View>
      </ImageBackground>
      <Saldo />
      <View style={styles.layanan}>
        <Text style={styles.label}>Layanan Kami</Text>
        <View style={styles.iconLayanan}>
          <BottomIcon title="Kiloan" type="layanan" />
          <BottomIcon title="Satuan" type="layanan" />
          <BottomIcon title="Vip" type="layanan" />
          <BottomIcon title="Karpet" type="layanan" />
          <BottomIcon title="Setrika saja" type="layanan" />
          <BottomIcon title="Express" type="layanan" />
        </View>
      </View>
      <View style={styles.pesananAktif}>
        <Text style={styles.label}> Pesanan Aktif</Text>
        <PesananAktif />
        <PesananAktif />
        <PesananAktif />
      </View>
    </View>
  </ScrollView>
);

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
  layanan: {
    paddingLeft: 30,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: WarnaAbu,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
