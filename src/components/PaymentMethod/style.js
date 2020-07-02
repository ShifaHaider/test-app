import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column"

    },
    Box: {
        flex: 1,
        backgroundColor: "white",
        // height: "40%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: -40,


    },
    circleTop: {
        alignSelf: "center",
        borderRadius: 100 / 2,
        borderWidth: 3,
        borderColor: "white",
        justifyContent: "center", alignItems: "center",
        backgroundColor: "yellow"
    },
    icon: {
        width: 25, height: 25,
        alignSelf: "center", justifyContent: "center",
        backgroundColor: "#393939",
        borderRadius: 100,
    },

    icon2: {
        width: 45, height: 45,
        justifyContent: "center",
        
        borderRadius: 100,
        
    }
})


export default styles