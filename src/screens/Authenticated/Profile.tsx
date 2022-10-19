import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native'

const userimage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F12%2F26%2Fee%2F1226ee007e9b9d904b6caef9aac47539--the-funniest-stock-photos.jpg&f=1&nofb=1&ipt=bcfcbe6f19bcb2c669bec2bc492d70baa48ca9c3c14a1b2b8b3762b82d4692b7&ipo=images"

export function Profile() {
    return (
        <ScrollView
            style={{flex: 1}}
            contentContainerStyle={styles.main}
        >
            <View style={styles.contentContainer}>
                <View style={styles.row}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: userimage
                            }}
                            style={styles.employeeImage}
                        />
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.styledText}>Rogerio da Silva</Text>
                        <Text style={styles.styledText}>Rogerinho</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center"
    },
    contentContainer: {
        flex: 1,
        marginVertical: 20,
    },
    styledText: {
        fontSize: 20,
    },
    row: {
        flexDirection: "row",
        width: "100%",
        height: 100,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    employeeImage: {
        resizeMode: 'contain',
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    nameContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 2,
    },
})