import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Card from "../../components/Card"

interface orderList {
  table: string
  status: number
}

export function Home() {
  const orderList : Array<orderList> = [
    {
      table: "id1",
      status: 100,
    },
    {
      table: "id2",
      status: 999,
    },
    {
      table: "id2",
      status: 102,
    }
  ]

  const openOrder: Function = () => {

  }

  return (
    <ScrollView style={styles.container}>
      {orderList.map((order)=>{
        if(!orderList){
          return <></>
        }

        return(
          <Card onPress={()=>{}} order={order}/>
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#E3F2FD',
    flex: 1,
    padding: 20,
  },
})