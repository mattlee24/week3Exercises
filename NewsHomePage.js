import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { ScrollView } from 'react-native'

const NewsHomePage = () => {
  return (
    <ScrollView style={styles.container}>
        <View>
            <Image source={{ uri: "https://picsum.photos/200/300?random=1"}} style={styles.image}></Image>
            <View style={styles.card}>
                <Text style={styles.texttitle}>This is a main headline</Text>
                <Text style={styles.textsubtitle}>3h | Europe</Text>
            </View>
        </View>
        <View style={{flexDirection: "row", width: "100%"}}>
            <View>
                <Image source={{ uri: "https://picsum.photos/200/300?random=1"}} style={styles.imagerow}></Image>
                <View style={styles.cardRow}>
                    <Text style={styles.texttitle}>This is a main headline</Text>
                    <Text style={styles.textsubtitle}>3h | Europe</Text>
                </View>
            </View>
            <View>
                <Image source={{ uri: "https://picsum.photos/200/300?random=1"}} style={styles.imagerow}></Image>
                <View style={styles.cardRow}>
                    <Text style={styles.texttitleRow}>This is a main headline</Text>
                    <Text style={styles.textsubtitleRow}>3h | Europe</Text>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

export default NewsHomePage

const styles = StyleSheet.create({
    container: {
        width: "95%",
        margin: 10
    },
    image: {
        width: "100%",
        height: 250
    },
    card: {
        backgroundColor: "white",
        height: 80,
        marginBottom: 10
    },
    texttitle: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    textsubtitle: {
        marginLeft: 10,
        marginTop: 5,
    },
    imagerow: {
        height: 100,
        width: 170
    },
    cardRow: {
        backgroundColor: "white",
        height: 80,
        marginBottom: 10
    },
    texttitleRow: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        with:"50%"
    },
    textsubtitleRow: {
        marginLeft: 10,
        marginTop: 5,
    }
})