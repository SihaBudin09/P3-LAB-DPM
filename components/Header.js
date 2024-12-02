import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';

// Mengambil dimensi layar untuk memastikan header memenuhi layar
const { width, height } = Dimensions.get('window');

const Header = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://example.com/your-image.jpg' }} // Ganti dengan URL gambar atau file lokal
      style={styles.header}
    >
      <View style={styles.overlay}>
        <Text style={styles.headerText}>My React Native App</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: height * 0.3,  // Membuat tinggi header 30% dari tinggi layar
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',  // Membuat latar belakang transparan agar gambar tampil
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Menambahkan overlay hitam transparan untuk teks lebih jelas
    width: width,
    height: height * 0.3,
    borderBottomLeftRadius: 30,  // Sudut membulat di kiri bawah
    borderBottomRightRadius: 30,  // Sudut membulat di kanan bawah
    shadowColor: '#000',  // Bayangan untuk efek kedalaman
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,  // Elevasi untuk perangkat Android
  },
  headerText: {
    fontSize: 28,  // Ukuran teks lebih besar
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',  // Membuat teks lebih tegas
    paddingHorizontal: 20,
  },
});

export default Header;
