import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column"

    },

    smallBoxHead: {
        paddingRight: 10,
        marginVertical: 10
    },
    deliveryBox: {
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    topHeading: {
        color: "black",
        fontWeight: "400",
        paddingTop: 5
    },
    deliveryHeading: {
        color: "black",
        fontWeight: "400",
        paddingBottom: 15
    },
    borderBox: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderColor: "lightgray"
    },
    orderHead: {
        textAlign: "center",
        paddingTop: 5
    },
    orderIcon: {
        alignSelf: "center",
        marginTop: 5,
        marginLeft: 5
    },
    nearHeadingView: {
        justifyContent: "space-between",
        flexDirection: "row",
        margin: 15,
        marginTop: 0,
    },
    nearText: {
        fontSize: 20
    },
    viewAllText: {
        alignSelf: "center",
        color: "#f3525c"
    },

    offersHead: {
        marginLeft: 10,
        marginVertical: 10,
        // width: "35%",
        height: "30%"
    },
    offerImage: {
        alignSelf: "center",
        width: "100%",
        // height: "100%"

    },
    offerDetail: {
        backgroundColor: "black",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textRate: {
        color: "white",
        fontSize: 9
    },
    offerName: {
        color: "white",
        fontSize: 12

    },
    offerButton: {
        alignSelf: "flex-end",
        marginLeft: 15
    },
    offerButtonText: {
        color: "white",
        fontSize: 9,
        borderRadius: 2,
        borderColor: "white",
        borderWidth: 1,
        padding: 2,
        paddingHorizontal: 10
    },
    recommedHead: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "white",
        paddingBottom: 10,
        marginBottom: 15
    },
    productImage: {
        height: "100%"
    }



})


export default styles