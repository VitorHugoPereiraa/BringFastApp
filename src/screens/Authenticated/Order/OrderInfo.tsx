import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Receipt } from '../../../components/Receipt';

export function OrderInfo() {

  const toReal: Function = (value: number) => {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",")
  }

  const getDayMonth: Function = (dateNumber: number) => {
    let date = new Date(dateNumber)
    let day = date.getDate()
    let month = date.getMonth() + 1
    return `${day}/${month}`
  }

  const getTime: Function = (dateNumber: number) => {
    let date = new Date(dateNumber)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    return `${hours}:${minutes}`
  }

  const order = {
    name: "Antonio Fernando",
    date: 1664990490903,
    products: [
      {
        name: "X-Burguer",
        value: 29.90,
      },
      {
        name: "Coca-Cola",
        value: 7.90,
      }
    ],
    value: 37.80,
  }

  return (
    <ScrollView style={styles.main}>
      <Receipt>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Pedido</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.itemText}>{order.name}</Text>
          <Text style={styles.itemText}>{getDayMonth(order.date)} ({getTime(order.date)})</Text>
        </View>
        <View style={styles.orderContainer}>
          <Text style={styles.orderTitle}>Pedidos:</Text>
          {order.products.map(product => {
            return (
              <Text style={styles.itemText}>* {product.name} - R${toReal(product.value)}</Text>
            )
          })}
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.title}>Valor: R${toReal(order.value)}</Text>
        </View>
      </Receipt>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#E3F2FD",
    padding: 20,
  },
  rowContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 60,
  },
  titleRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 60,
  },
  orderContainer: {
    width: "100%",
    marginLeft: 50,
  },
  valueContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: 60,
    marginLeft: 50,
  },
  divide: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    // paddingLeft: 10,
  },
  title: {
    fontSize: 24,
  },
  orderTitle: {
    fontSize: 20,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 18,
  },
})