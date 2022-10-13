import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const NewsHomePage = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Pressable>
            <Image source={{ uri: "https://picsum.photos/200/300?random=1"}} style={styles.image}></Image>
            <View style={styles.card}>
                <Text style={styles.texttitle}>This is a main headline</Text>
                <Text style={styles.textsubtitle}>3 hours ago | Europe</Text>
            </View>
        </Pressable>
        <View style={{flexDirection: "row", width: "100%"}}>
            <Pressable style={styles.rowView}>
                <Image source={{ uri: "https://picsum.photos/200/300?random=1"}} style={styles.imagerow}></Image>
                <View style={styles.cardRow}>
                    <Text style={styles.texttitleRow}>This is a headline</Text>
                    <Text style={styles.textsubtitleRow}>1y | Coronavirus</Text>
                </View>
            </Pressable>
            <Pressable>
                <Image source={{ uri: "https://picsum.photos/200/300?random=1"}} style={styles.imagerow}></Image>
                <View style={styles.cardRow}>
                    <Text style={styles.texttitleRow}>This is a headline</Text>
                    <Text style={styles.textsubtitleRow}>10h | USA</Text>
                </View>
            </Pressable>
        </View>
        <Pressable style={styles.rowBV}>
            <Image source={{ uri: "https://picsum.photos/200/300?random=1"}} style={styles.imageBV}></Image>
            <View style={styles.cardBV}>
                <Text style={styles.texttitleBV}>This is a headline</Text>
                <Text style={styles.textsubtitleBV}>3 hours ago | Europe</Text>
            </View>
        </Pressable>
        <Pressable style={styles.rowBV}>
            <Image source={{ uri: "https://picsum.photos/200/300?random=1"}} style={styles.imageBV}></Image>
            <View style={styles.cardBV}>
                <Text style={styles.texttitleBV}>This is a headline</Text>
                <Text style={styles.textsubtitleBV}>3 hours ago | Europe</Text>
            </View>
        </Pressable>
        <Pressable style={styles.rowBV}>
            <Image source={{ uri: "https://picsum.photos/200/300?random=1"}} style={styles.imageBV}></Image>
            <View style={styles.cardBV}>
                <Text style={styles.texttitleBV}>This is a headline</Text>
                <Text style={styles.textsubtitleBV}>3 hours ago | Europe</Text>
            </View>
        </Pressable>
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
        height: 250,
    },
    card: {
        backgroundColor: "white",
        height: 80,
        marginBottom: 10,
        shadowColor: "black",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
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
        width: 180,
    },
    cardRow: {
        backgroundColor: "white",
        height: 90,
        marginBottom: 10,
        width: 180,
        shadowColor: "black",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    texttitleRow: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        with:"50%",
    },
    textsubtitleRow: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 20,
        color: "maroon"
    },
    rowView: {
        marginRight: 10,
    },
    imageBV: {
        width: "25%",
        height: 100,
    },
    cardBV: {
        backgroundColor: "white",
        height: 100,
        marginBottom: 10,
        width: "100%",
        shadowColor: "black",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    texttitleBV: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    textsubtitleBV: {
        marginLeft: 10,
        marginTop: 45,
    },
    rowBV: {
        flexDirection: "row"
    }
})