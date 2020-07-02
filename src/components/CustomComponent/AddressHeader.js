import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class AddressHeader extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row", borderBottomWidth: 2, borderStyle: "solid", borderBottomColor: "#eaeaea", paddingVertical: 10, paddingHorizontal: 20, marginTop: 30 }}>

                <TouchableOpacity onPress={() => this.props.props.navigation.goBack()}>
                    <Ionicons size={30} name="ios-arrow-back" color="white" style={{ alignSelf: "center", backgroundColor: "#f3525c", paddingHorizontal: 20, paddingVertical: 11, borderRadius: 100 }} />
                </TouchableOpacity>
                <View style={{ justifyContent: "center", paddingHorizontal: 7 }}>
                    <Text>Your Location</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}><Text
                        style={{
                            color: "#f3525c",
                            fontWeight: "bold",
                            fontSize: 15
                        }}

                    >29th Streer, Abu Dhabi</Text>

                        <Image source={require("../../assets/Images/call.png")}
                            style={{
                                width: 10, height: 10,
                                marginHorizontal: 5
                            }}
                        />
                    </View>
                </View>

            </View>
        )
    }
}
