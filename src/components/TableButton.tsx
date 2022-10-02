import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TableButton({order, onPress}) {
    
    const statusHandling: Function = (status: number) => {
        let statusColor: string
    
        switch(status) {
        case 100:
          statusColor = "#c4c4c4"
          break;
        case 102:
          statusColor = "#009fb7"
          break;
        case 999:
          statusColor = "#dc143c"
          break;
        }
    
        return <MaterialCommunityIcons
          name='table-chair'
          color={statusColor}
          size={40}
          // style={{
          // width: "50%",
          // height: "50%",
          // borderRadius: 50,
          // backgroundColor: statusColor,
          // }}
          />
      }

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.cardSection}>
        {statusHandling(order.status)}
      </View>
      {/* <View style={styles.cardSectionLarge}><Text>Mesa: {order.table}</Text></View>
      <View style={styles.cardSection}><Text>{order.table}</Text></View> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
    card: {
        // flexDirection: "row"
        backgroundColor: "#fff",
        width: 80,
        height: 80,
        marginHorizontal: 10,
        marginBottom: 20,
        borderRadius: 50,
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