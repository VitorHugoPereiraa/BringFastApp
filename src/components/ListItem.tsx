import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  product: {
    id: number,
    name: string,
    value: number,
    image: string,
  }
  setProducts: any;
  newProduct?: boolean;
  setShowModal?: any;
}

export function ListItems(props: Props) {

  const { product, setProducts, newProduct, setShowModal } = props

  const handleAddProduct: Function = () => {
    setProducts(old=>([
      ...old,
      product
    ]))
    setShowModal(false)
  }

  if(!newProduct) return (
    <View style={styles.cardMain}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: product.image
            }}
            style={styles.productImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>{product.name} - R${product.value}</Text>
        </View>
        <View style={styles.excludeContainer}>
          <Pressable
            onPress={()=>{}}
          >  
            <MaterialIcons
              name="delete"
              color="#8b0000"
              size={50}
            />
          </Pressable>  
        </View>
    </View>
  )
  
    return (
        <Pressable style={styles.cardMain}
          onPress={()=>{handleAddProduct()}}
        >
            <View style={styles.imageContainer}>
              <Image
              source={{
                uri: product.image
              }}
              style={styles.productImage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text>{product.name} - R${product.value}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Pressable style={styles.seeInfo}>
                <Text style={styles.buttonText}>Ver detalhes</Text>
              </Pressable>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardMain: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: 70,
        // backgroundColor: "red",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#708090",
        marginBottom: 10,
    },
    imageContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    productImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 2,
        paddingHorizontal: 5,
        alignItems: "center",
    },
    productText: {},
    excludeContainer: {
        flex: 1,
        alignItems: "center",
    },
    infoContainer: {
        flex: 1.5,
        alignItems: "center",
    },
    seeInfo: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#009fb7",
        height: 30,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
    }
})