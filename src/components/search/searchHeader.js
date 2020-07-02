import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import RoutesKey from '../../navigation/routeskey';

export default class SearchHeader extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row", borderBottomWidth: 2, borderStyle: "solid", borderBottomColor: "#eaeaea", paddingVertical: 10, paddingHorizontal: 20 }}>

                <Image source={require("../../assets/Images/back_btn_red.png")}
                    style={{
                        width: 40, height: 40
                    }}
                />
                <TouchableOpacity onPress={() => { this.props.prop.navigation.navigate(RoutesKey.MAP) }} style={{ justifyContent: "center", paddingHorizontal: 7 }}>
                    <Text>Your Location</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}><Text
                        style={{
                            color: "#f3525c",
                            fontWeight: "bold",
                            fontSize: 15
                        }}

                    >29th Streer, Abu Dhabi</Text>

                        <Icon size={16} name="ios-arrow-down" color="gray" style={{ paddingLeft: 5 }} />
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}
