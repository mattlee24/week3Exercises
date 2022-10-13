import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopNav = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.topNavTitle}>BBC NEWS</Text>
        <View style={styles.topNav}>
            <Text style={styles.topNavItem}>Top Stories   </Text>
            <Text style={styles.topNavItem}>My News   </Text>
            <Text style={styles.topNavItem}>Popular   </Text>
            <Text style={styles.topNavItem}>Video</Text>
        </View>
    </View>
  )
}

export default TopNav

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#b80000",
        width: "100%",
        height: "15%",
    },
    topNav: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    topNavTitle: {
        marginTop: 60,
        marginBottom: 10,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    topNavItem: {
        color: "white"
    }
})