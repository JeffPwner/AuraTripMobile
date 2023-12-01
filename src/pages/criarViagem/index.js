import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

// import Place from '../../Components/Place/index';
import Card from '../../components/Card/index';

export default function Form({ route }) {
  //criar viagem
  const [id, setId] = useState(route.params?.id);
  const [newTitle, setNewTitle] = useState(route.params?.title);
  const [newDescription, setNewDescription] = useState(
    route.params?.description
  );
  //mostrar viagem
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const salvarTarefa = async () => {
    const body = JSON.stringify({
      title: newTitle,
      description: newDescription,
    });

    if (id !== undefined) {
      const response = await api.put(`/tasks/${id}`, body, {
        headers: { 'Content-Type': 'application/json' },
      });
      await route.params?.atualizarLista();
    } else {
      const response = await api.post('/tasks', body, {
        headers: { 'Content-Type': 'application/json' },
      });
      await route.params?.atualizarLista();
    }

    navigation.goBack();
  };

  //mostrar viagem
  useEffect(async () => {
    await carregarTarefas();
    setLoading(false);
  }, []);

  const carregarTarefas = async () => {
    const response = await api.get('/tasks');
    setTarefas(response.data);
  };

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#09A6FF" size={40} />
      </View>
    );
  } else {
    return (
      <View>
      
        <TextInput
          style={styles.input}
          defaultValue={route.params?.title}
          onChangeText={(text) => setNewTitle(text)}
        />

        <TextInput
          style={styles.input}
          defaultValue={route.params?.description}
          onChangeText={(text) => setNewDescription(text)}
        />
        <Button title="Salvar" onPress={salvarTarefa} />
        <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card data={item} funcCarregarTarefas={carregarTarefas} />
          )}
        />

        <Button title="Salvar" onPress={salvarTarefa} />
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
    margin: 4,
  },
  
});
