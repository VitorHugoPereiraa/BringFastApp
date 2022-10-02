import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FinishedCard from '../../../components/FinishedCard'
 
interface orderList {
    table: string
    status: number
}

export function FinishedOrders({navigation}) {
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
        navigation.navigate('Info')
    }

  return (
    <ScrollView 
      contentContainerStyle={styles.mainContainer}
      style={styles.main}
    >
      {orderList.map((order)=>{
        if(order.status !== 999) {
            return <></>
        }
        
        return (
          <FinishedCard order={order} onPress={()=>{openOrder(order)}}/>
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