import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Receipt } from '../../../components/Receipt';

export function OrderInfo() {
  return (
    <ScrollView style={styles.main}>
      <Receipt>
        <Text> Teste </Text>
      </Receipt>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#E3F2FD",
    padding: 20,
  }
})