import React from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import { ListItems } from '../../../components/ListItem';

const lancheImagem = "https://veja.abril.com.br/wp-content/uploads/2020/09/Whooper.jpg";

const products = [
  {
    name: 'X-Tudo',
    value: 29.99,
    image: lancheImagem,
  },
  {
    name: 'X-Tudo',
    value: 29.99,
    image: lancheImagem,
  },
  {
    name: 'X-Tudo',
    image: lancheImagem,
    value: 29.99,
  },
  {
    image: lancheImagem,
    name: 'X-Tudo',
    value: 29.99,
  },
]

export function NewOrder() {
  return (
    <ScrollView style={styles.main}>
      <Pressable 
        style={styles.row}
        onPress={()=>{}}
        >
        <Text style={styles.addProduct}>Adicionar Produto+</Text>
      </Pressable>
      {products.map(product=>{
        return <ListItems product={product}/>
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#E3F2FD",
    padding: 20,
  },
  row: {
    width: "100%",
    height: 40,
  },
  addProduct: {
    fontSize: 24,
    color: "#2541b2",
  }
})