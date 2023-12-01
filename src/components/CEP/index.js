import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import api from '../../services/apiCep';

const ConsultaCepTela = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  const consultaCep = async () => {
    try {
      const response = await api.get(`/${cep}/json`);
      setEndereco(response.data);
    } catch (error) {
      console.error('Erro ao consultar o CEP:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.cep}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        underlineColorAndroid="transparent"
        keyboardType="numeric"
      />
      <Button title="Consultar CEP" onPress={consultaCep} />
      <Text style={styles.endereco}>{endereco.logradouro}</Text>
      <Text style={styles.endereco}>{endereco.bairro}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  endereco: {
    marginTop: 5,
    fontSize: 15,
    textAlign: 'center',
  },
  cep: {
    width: 180,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
});

export default ConsultaCepTela;
