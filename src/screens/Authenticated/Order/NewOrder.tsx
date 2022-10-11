import React from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable, Image, TextInput, Modal } from 'react-native';
import { ListItems } from '../../../components/ListItem';
import { AddProductModal } from '../../../components/AddProductModal';

const lancheImagem = "https://veja.abril.com.br/wp-content/uploads/2020/09/Whooper.jpg";

export function NewOrder({ route }) {
  const { order } = route.params

  const [observation, setObservations] = React.useState("")
  const [client, setClient] = React.useState("")
  const [showModal, setShowModal] = React.useState(false)
  const [products, setProducts] = React.useState([
    {
      id: 1,
      name: 'X-Tudo',
      value: 29.99,
      image: lancheImagem,
    },
    {
      id: 2,
      name: 'X-Tudo',
      value: 29.99,
      image: lancheImagem,
    },
    {
      id: 3,
      name: 'X-Tudo',
      image: lancheImagem,
      value: 29.99,
    },
    // {
    //   id: 4,
    //   image: lancheImagem,
    //   name: 'X-Tudo',
    //   value: 29.99,
    // },
    // {
    //   id: 5,
    //   name: 'X-Tudo',
    //   value: 29.99,
    //   image: lancheImagem,
    // },
    // {
    //   id: 6,
    //   name: 'X-Tudo',
    //   value: 29.99,
    //   image: lancheImagem,
    // },
    // {
    //   id: 7,
    //   name: 'X-Tudo',
    //   image: lancheImagem,
    //   value: 29.99,
    // },
    // {
    //   id: 8,
    //   image: lancheImagem,
    //   name: 'X-Tudo',
    //   value: 29.99,
    // },
  ])

  React.useEffect(()=>{
    if(order !== null) {
      setProducts(
        order.products
      )
      setClient(order.name)
      setObservations(order.observations)
    }
  },[order])

  return (
    <>
      <Modal
        animationType='slide'
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <AddProductModal setShowModal={setShowModal} updateProductList={setProducts}/>
      </Modal>
      <ScrollView style={styles.main}>
        <View style={styles.row}>
          <TextInput 
            style={styles.clientInput}
            onChangeText={setClient}
            value={client}
            placeholder="Cliente"
          />
        </View>
        <View style={styles.row}>
          <Pressable 
            style={styles.addProductButton}
            onPress={() => setShowModal(!showModal)}
          >
            <Text style={styles.addProductText}>Adicionar Produto+</Text>
          </Pressable>
        </View>
        {products.map((product)=>{
          return (
          <ListItems
            product={product} 
            setProducts={setProducts}
          />
          )
        })}
        <View style={styles.obsRow}>
          <TextInput
            style={styles.obsInput}
            onChangeText={setObservations}
            value={observation}
            multiline={true}
            placeholder="Observações do pedido"
          />
        </View>
        <View style={styles.lastRow}>
          <Pressable
            style={styles.addProductButton}
          >
            <Text style={styles.addProductText}>Confirmar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#E3F2FD",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
  },
  clientInput: {
    color: "#708090",
    width: "100%",
    height: 50,
    paddingLeft: 20,
    borderColor: "#708090",
    borderWidth: 1,
    borderRadius: 5,
  },
  addProductButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#2541b2',
    width: "100%",
    height: 40,
    borderRadius: 5,
  },
  addProductText: {
    fontSize: 20,
    color: '#fff',
  },
  obsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 120,
  },
  obsInput: {
    color: "#708090",
    width: "100%",
    height: 100,
    paddingLeft: 20,
    borderColor: "#708090",
    borderWidth: 1,
    borderRadius: 5,
  },
  lastRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
    marginBottom: 40,
  }
})