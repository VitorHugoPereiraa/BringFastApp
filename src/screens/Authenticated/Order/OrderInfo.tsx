import React from 'react';
import { ScrollView, View, StyleSheet, Text, Pressable } from 'react-native';
import { Receipt } from '../../../components/Receipt';

const lancheImagem = "https://veja.abril.com.br/wp-content/uploads/2020/09/Whooper.jpg";
const cocaColaImagem = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.gobankingrates.com%2Fwp-content%2Fuploads%2F2018%2F05%2FCoca-Cola-shutterstock_281176775.jpg&f=1&nofb=1&ipt=873a46b4d0907307bb6f2be53351e77fbeb160ae6bd4eccc08e5bb0359ff0b70&ipo=images";

export function OrderInfo({ route, navigation }) {

  const { readOnly } = route.params

  const handleEditOrder: Function = () => {
    navigation.navigate('Pedido', {order: order})
  }

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
    table: "id16",
    name: "Antonio Fernando",
    date: 1664990490903,
    products: [
      {
        id: 1,
        name: "X-Burguer",
        value: 29.90,
        image: lancheImagem,
      },
      {
        id: 2,
        name: "Coca-Cola",
        value: 7.90,
        image: cocaColaImagem,
      }
    ],
    value: 37.80,
    observations: "X-Burguer sem cebola",
  }

  return (
    <ScrollView style={styles.main}>
      {!readOnly ? (
        <View style={styles.editRow}>
          <Pressable 
            style={styles.editButton}
            onPress={()=>handleEditOrder()}
          >
            <Text style={styles.editButtonText}>Editar pedido</Text>
          </Pressable>
        </View>
      ) : <></>}
      <Receipt>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Pedido - {order.table}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.itemText}>{order.name}</Text>
          <Text style={styles.itemText}>{getDayMonth(order.date)} ({getTime(order.date)})</Text>
        </View>
        <View style={styles.orderContainer}>
          <Text style={styles.orderTitle}>Produtos:</Text>
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
  editRow: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  editButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#2541b2',
    width: "50%",
    height: 40,
    borderRadius: 5,
  },
  editButtonText: {
    fontSize: 20,
    color: "#fff"
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