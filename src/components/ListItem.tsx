import React from 'react';
import { View, StyleSheet } from 'react-native'

export function ListItems({product}) {
    return (
        <View style={styles.cardMain}>
           
        </View>
    )
}

const styles = StyleSheet.create({
    cardMain: {
        width: "100%",
        height: 70,
        // backgroundColor: "red",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#d3d3d3",
        marginBottom: 10,
    }
})