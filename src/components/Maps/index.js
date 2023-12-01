import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const MapScreen = () => {
  const [location, setLocation] = useState('');
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleSearch = async () => {
    try {
      // Faz a requisição para o serviço de Forward Geocoding do OpenCage
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=8499fdc8bab9498497ee37c63d26aa58`,
      );

      // Verifica se a resposta tem dados
      if (response.data.results.length > 0) {
        // Obtém as coordenadas da primeira entrada da resposta
        const { lat, lng } = response.data.results[0].geometry;
        setMarkerPosition({ latitude: lat, longitude: lng });
      } else {
        Alert.alert('Erro', 'Localização não encontrada');
      }
    } catch (error) {
      console.error('Erro na requisição de Forward Geocoding:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao buscar a localização');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a localização"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <Button title="Buscar" onPress={handleSearch} />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markerPosition && (
          <Marker
            coordinate={markerPosition}
            title="Localização Encontrada"
            description={location}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
