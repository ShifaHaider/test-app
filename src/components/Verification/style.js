import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Box: {
        // backgroundColor: "pink",
        // height: "50%",
        width: "90%",
        borderRadius: 60,
        backgroundColor: "white",
        elevation: 3,
        paddingHorizontal: "10%",
        paddingTop: "10%",
        alignItems: "center",
        justifyContent: "center",

    },
    Heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#575757"

    },
    Paragraph: {
        textAlign: "center",
        color: "#575757"

    },
    OTPText: {
        fontSize: 12,
        padding: 10,
        color: "#575757"



    },
    CodeBox: {
        flex: 1,
        backgroundColor: "red",
        height: 20
    }
    ,
    ResendCode: {
        color: "#f3525c",
        fontWeight: "bold",
        fontSize: 15



    }
})

export default styles
