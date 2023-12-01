import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Viagem() {
  const [nome, setNome] = useState();
  const [input, setInput] = useState();

  // Quando o componente é montado em tela (quando abrimos o App)
  useEffect(() => {
    const recuperarNome = async () => {
      const nomeUsuario = await AsyncStorage.getItem('nome');
      setNome(nomeUsuario);
    };

    recuperarNome();
  }, []);

  const gravaNome = async () => {
    setNome(input);
    await AsyncStorage.setItem('nome', input);
    Keyboard.dismiss();
    alert('Salvo com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(texto) => setInput(texto)}
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity onPress={gravaNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center',
  },
});
