import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import colors from '../../utils/colorConstant'
const styles = StyleSheet.create({
    Container: {
        // backgroundColor: "#F0F0F0",
        flex: 1,
        marginTop: 30
    },
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
        width: "90%",
        borderRadius: 60,
        backgroundColor: "white",
        elevation: 3,
        paddingHorizontal: "10%",
        paddingTop: "10%",
        // opacity:1
        // alignItems: "center",
        // justifyContent: "center",
    },
    Heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#b2b2b2",
        textAlign: "left"

    },
    Paragraph: {
        textAlign: "center",
        color: "#575757"

    },
    OTPText: {
        fontSize: 12,
        color: "#575757",
        textAlign: "center"
    },
    CodeBox: {
        paddingVertical: "10%"
    }
    ,
    ResendCode: {
        color: "#f3525c",
        fontWeight: "bold",
        fontSize: 15
    },
    recommedHead: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "white",
        paddingBottom: 10,
        marginVertical: 15,


        shadowColor: 'lightgray',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 3,

    },
    budgetBox: {
        backgroundColor: colors.LIGHT_GRAY_BACKGROUND,
        width: "30%",
        textAlign: "center",
        paddingVertical: 5,
        borderRadius: 50,
        borderColor: "#f3525c",
        borderWidth: 1,
        color: "#f3525c"
    },
    foodBox: {
        backgroundColor: colors.LIGHT_GRAY_BACKGROUND,
        width: "48%",
        textAlign: "center",
        paddingVertical: 5,
        borderRadius: 50,
        borderColor: "#f3525c",
        borderWidth: 1,
        color: "#f3525c"
    }



})

export default styles
