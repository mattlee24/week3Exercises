import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'

const RandomImageGenerator = () => {
    const [imageUri, setImageUri] = useState("https://picsum.photos/200/300?random="+randomNumber)
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)
    return (
    <View>
        <Pressable onPress={() => setImageUri("https://picsum.photos/200/300?random="+randomNumber)}>
            <Image style={styles.image} source={{ uri: imageUri}}></Image>
        </Pressable>
    </View>
    )
}

export default RandomImageGenerator

const styles = StyleSheet.create({
    image: {
        margin: 10,
        width: 200,
        height: 300,
        alignSelf: "center",
        borderRadius: 25
    },
    text: {
        textAlign: "center",
        fontSize: 25
    },
})