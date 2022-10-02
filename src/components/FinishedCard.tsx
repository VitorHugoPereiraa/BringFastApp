import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function FinishedCard({order, onPress}) {

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.cardSection}>
        <Text>02/10-18:32</Text>
      </View>
      <View style={styles.cardSectionLarge}><Text>Fernando Antonio</Text></View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center",
      }
})