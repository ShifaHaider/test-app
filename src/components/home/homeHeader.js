import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import Global from "../../utils/global"
import Icon from 'react-native-vector-icons/Ionicons';
import RoutesKey from '../../navigation/routeskey';

export default class HomeHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dayOrNight: false
        }
    }

    componentDidMount() {
        this.setState({ dayOrNight: this.props.dayOrNight })
        console.log(this.props.dayOrNight, 'in header')
    }
    render() {
        const { dayOrNight } = this.state
        return (
            <View style={{ marginTop: Global.STATUSBAR_HEIGHT, flexDirection: "row", paddingLeft: 20, paddingTop: 20, height: "55%", position: "absolute" }}>

                <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => this.props.props.navigation.openDrawer()}  >
                    {/* <Icon size={20} name="ios-arrow-round-back" color="white" style={{ alignSelf: "center" }} /> */}
                    <Image source={require("../../assets/Images/menu-icon.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.props.navigation.navigate(this.props.keys)} style={{ alignSelf: "center", paddingLeft: 15 }}>
                    <Text style={this.props.dayOrNight === false ? styles.nightThemeText : styles.dayThemeText}>Your Location</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#f3525c", }}>29th street, Abu Dhabi</Text>
                        <Icon size={20} name="ios-arrow-down" color={this.props.dayOrNight === false ? "white" : "black"} style={{ paddingLeft: 5 }} />
                    </View>

                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    dayThemeText: {
        color: 'black',
        fontSize: 12
    },
    nightThemeText: {
        color: 'white',
        fontSize: 12
    }
})
