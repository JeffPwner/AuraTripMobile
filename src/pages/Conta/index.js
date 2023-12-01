import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, Alert, Image, StyleSheet } from 'react-native';

import ConsultaCepTela from '../../components/CEP/index'

const ConfigConta = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNotification = () => {
    setNotificationEnabled(!notificationEnabled);
    //  lógica p ligar ou desligar as notificações no backend
    //  enviar solicitação para o servidor para atualizar as configurações de notificação
    if (notificationEnabled) { 
      Alert.alert('Notificações Desativadas', 'Você desativou as notificações.');
    } else { 
      Alert.alert('Notificações Ativadas', 'Você ativou as notificações.');
    }
  };

  const handleSubmit = () => {
    // Lógica p enviar os dados atualizados para o backend
    console.log('Novos valores:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Dark Mode:', darkMode);
  };

  return (
    <View>
      <Text>Configurações da Conta</Text>
    <View style={styles.avatarContainer}>
        <Image
          source={require('../../../assets/Dog.jpg')} 
          style={styles.avatar}
        />
      </View>
      <TextInput
        placeholder="Alterar nome de usuário"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        placeholder="Alterar Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Alterar senha"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      /> 

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text>Receber Notificações</Text>
        <Switch value={notificationEnabled} onValueChange={toggleNotification} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Modo Escuro</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ConsultaCepTela/>
      </View>


      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({ 
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ConfigConta;