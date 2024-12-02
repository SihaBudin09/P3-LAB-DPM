import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';  // Mengimpor komponen Header

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...',
    };
  }

  // Lifecycle method: componentDidMount
  componentDidMount() {
    // Simulasi pengambilan data atau proses lainnya
    setTimeout(() => {
      this.setState({ message: 'Hello, welcome to Home Screen Raja Choir!' });
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Menampilkan Header yang telah dimodifikasi */}
        <Header />

        {/* Konten utama berada di bawah header */}
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Selamat datang di aplikasi saya</Text>
          <Text style={styles.description}>
            Ini punya raja
          </Text>
          
          {/* Pesan setelah data dimuat */}
          <Text style={styles.message}>{this.state.message}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Warna latar belakang utama
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 30, // Memberikan padding atas agar konten tidak menempel di atas
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333', // Warna teks lebih gelap agar kontras
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 1.5, // Menambahkan jarak antar huruf
  },
  description: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
    fontStyle: 'italic', // Menggunakan style italic agar lebih menarik
  },
  message: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default HomeScreen;
