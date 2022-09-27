import React from 'react';
import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';

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

  const statusHandling: Function = (status: number) => {
    let statusColor: string

    switch(status) {
    case 100:
      statusColor = "#00ff7f"
      break;
    case 102:
      statusColor = "#ffd700"
      break;
    case 999:
      statusColor = "#dc143c"
      break;
    }

    return <View style={{
      width: "50%",
      height: "50%",
      borderRadius: 50,
      backgroundColor: statusColor,
    }}/>
  }

  return (
    <ScrollView style={styles.container}>
      {orderList.map((order)=>{
        if(!orderList){
          return <></>
        }

        return(
          <Pressable style={styles.card}>
            <View style={styles.cardSection}>
              {statusHandling(order.status)}
            </View>
            <View style={styles.cardSectionLarge}><Text>Mesa: {order.table}</Text></View>
            <View style={styles.cardSection}><Text>{order.table}</Text></View>
          </Pressable>
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
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    height: 80,
    marginBottom: 20,
    borderRadius: 5,
  },
  cardSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardSectionLarge: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  }
})