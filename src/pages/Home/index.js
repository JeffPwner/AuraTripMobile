import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CardsComponents from '../../components/Banner/index.js';

// Importe ou defina o componente Card aqui
const Card = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.cardImage}
      />
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};


export default function App() {
  return (
    <View>
      <Auratrip
        title="AuraTrip"
        description={"O AuraTrip é uma empresa de planejamento de viagens que vai revolucionar o turismo e te ajudar a fazer o passeio dos sonhos."}
        imageUrl="https://res.cloudinary.com/dlsuopwkn/image/upload/c_scale,h_3264,w_4928/v1677121001/gramado.jpg"
      />
    </View>
  );
}

const Auratrip = (props) => {
  return (
    <View>
      <Card
        title={props.title}
        description={props.description}
      />  
      <CardsComponents source="https://res.cloudinary.com/dlsuopwkn/image/upload/v1697428363/samples/animals/banner_home.png" />     
    </View>
  );
};

// Estilos para o Card
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    color: '#555',
  },
});
