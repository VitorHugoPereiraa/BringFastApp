import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Receipt } from '../../../components/Receipt';

export function OrderInfo() {
  return (
    <ScrollView style={styles.main}>
      <Receipt>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Pedido</Text>
        </View>
        <View style={styles.rowContainer}>
          {/* <View style={styles.divide}> */}
            <Text style={styles.itemText}>Antonio Fernando</Text>
          {/* </View> */}
          {/* <View style={styles.divide}> */}
            <Text style={styles.itemText}>12/11 (11:12)</Text>
          {/* </View> */}
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
  divide: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    // paddingLeft: 10,
  },
  title: {
    fontSize: 24,
  },
  itemText: {
    fontSize: 18,
  },
})