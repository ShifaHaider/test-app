import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Global from "../../utils/global"
import Icon from 'react-native-vector-icons/Ionicons';
import RoutesKey from '../../navigation/routeskey';

export default class TransparentHeader extends Component {
    render() {
        return (
            <View style={{ marginTop: Global.STATUSBAR_HEIGHT + 10, height: 30, flexDirection: "row", justifyContent: 'center' }}>
                {this.props.notBackIcon == true ?
                    <View></View> :
                    <TouchableOpacity onPress={this.props.fun ? this.props.fun : () => this.props.props.navigation.goBack()} style={{ width: 25, height: 25, alignSelf: "center", justifyContent: "center", backgroundColor: `rgba(255, 255, 255, ${0.5})`, borderRadius: 100, position: "absolute", left: 20 }}>
                        <Icon size={20} name="ios-arrow-round-back" color="white" style={{ alignSelf: "center" }} />
                    </TouchableOpacity>}
                <Text style={{ color: "white", alignSelf: "center" }}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
