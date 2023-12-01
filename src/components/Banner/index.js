import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';

const CardsComponents = (props) => {
  return (
    <ScrollView>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1677121001/gramado.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/v1671675718/preikestolen.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1677123253/buzios.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1672624395/beachReynisfjara_vhbjsr.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1677121001/gramado.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/v1671675718/preikestolen.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1677123253/buzios.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1672624395/beachReynisfjara_vhbjsr.jpg',
        }}
        style={styles.card}
      />
            <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1677121001/gramado.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/v1671675718/preikestolen.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1677123253/buzios.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1672624395/beachReynisfjara_vhbjsr.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1677121001/gramado.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/v1671675718/preikestolen.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1677123253/buzios.jpg',
        }}
        style={styles.card}
      />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1672624395/beachReynisfjara_vhbjsr.jpg',
        }}
        style={styles.card}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 335,
    height: 300,
    resizeMode: 'cover',
  },

  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 100,
    shadowColor: '#000',
  },
});

export default CardsComponents;
