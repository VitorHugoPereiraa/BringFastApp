import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { NativeStackScreenProps } from  "@react-navigation/native-stack"

import TableButton from "../../../components/TableButton"

interface orderList {
  table: string
  status: number
}

// type StackParamList = {
//   Order: any;
//   Mesas: any;
//   Info: any;
// }

// type StackProps = NativeStackScreenProps<StackParamList, 'Mesas'>;

// type Props = {
//   routes: StackProps;
// }

export function TablesList({navigation}) {
  const orderList : Array<orderList> = [
    {
      table: "id1",
      status: 999,
    },
    {
      table: "id2",
      status: 100,
    },
    {
      table: "id3",
      status: 100,
    },
    {
      table: "id4",
      status: 102,
    },
    {
      table: "id5",
      status: 999,
    },
  ]

  const openOrder: Function = (order) => {
    // const { navigation } = routes
    if(order.status == 102){
      navigation.navigate('Info')
    }
    else if(order.status == 100) {
      navigation.navigate('Novo')
    }
  }

  return (
    <ScrollView 
      contentContainerStyle={styles.mainContainer}
      style={styles.main}
    >
      {orderList.map((order)=>{
        if(!orderList || order.status == 999){
          return <></>
        }
        return(
          <TableButton onPress={()=>{openOrder(order)}} order={order}/>
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    padding: 20,
  },
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  }
})