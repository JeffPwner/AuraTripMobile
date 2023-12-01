import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/Home';
import Viagens from './src/pages/Viagens';
import Conta from './src/pages/Conta';
import CriarViagem from './src/pages/criarViagem/index';


const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home',
  },
  Viagens: {
    name: 'ios-people',
  },
  CriarViagem: {
    name: 'ios-airplane',
  },
  Conta: {
    name: 'ios-call',
  },
};
    export default function App(){
      const [cep, setCep] = useState([])
      const [endereco, setEndereco] = useState([])


    const consultaCep = async (cep) => {
      const response = await api.get('/' + cep + '/json/');
      setEndereco(response.data)
    }


    return(
      <View style={styles.container}>
        <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Viagens" component={Viagens} />
        <Tab.Screen name="CriarViagem" component={CriarViagem} />
        <Tab.Screen name="Conta" component={Conta} />
      </Tab.Navigator>
      
    </NavigationContainer>
      </View>    
      
    )
  }
  

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  endereco:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  },
  cep:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  }
});
