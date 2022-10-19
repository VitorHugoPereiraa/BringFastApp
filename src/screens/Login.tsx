import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export function Login() {
  const [code, setCode] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleConfirm = () => {
    setIsAuthenticated(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.head}>
          <Text style={{
            fontSize: 24,
            color: "#fff",
          }}>Entrar</Text>
        </View>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.input}
            onChangeText={setCode}
            value={code}
            placeholder="CNPJ"
          />
          <TextInput
            style={styles.input}
            onChangeText={setLogin}
            value={login}
            placeholder="Login"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Senha"
          />
        </View>
      </View>
      <View>
        <Pressable
          style={styles.button}
          onPress={()=>handleConfirm()}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </Pressable>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E3F2FD',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    main: {
      backgroundColor: '#fff',
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      width: 300,
      height: 240,
    },
    head: {
      flex: 0.4,
      paddingLeft: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      justifyContent: "center",
      width: 300,
      backgroundColor: "#2541b2",
    },
    inputSection: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      height: 40,
      marginBottom: 12,
      borderBottomWidth: 1,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#2541b2',
      width: 200,
      height: 50,
      marginTop: 20,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 24,
      color: '#fff',
    }
  });