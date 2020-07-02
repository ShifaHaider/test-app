import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from "./style"
import { TransparentHeader } from "../CustomComponent/index"
import Global from "../../utils/global"
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from "react-native-vector-icons/Ionicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import RoutesKey from '../../navigation/routeskey'


export default class EstimatedDeliverTime extends Component {
    state = {
        visa: false,
        master: true,
        cash: false

    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }


    inputText(heading, placeholder, iconName, iconType, valueName) {
        return (
            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                width: '100%',
                alignItems: "center",
                borderBottomColor: "#b2b2b2",
                borderBottomWidth: 1,
            }}>

                {iconType == "AntDesign" && <AntDesign type={iconType} size={20} name={iconName} color="#575757" style={{ alignSelf: "center", marginBottom: 5, }} />}

                {iconType == "Entypo" && <Entypo type={iconType} size={20} name={iconName} color="#575757" style={{ alignSelf: "center", marginBottom: 5 }} />}

                {iconType == "MaterialCommunityIcons" && <MaterialCommunityIcons type={iconType} size={20} name={iconName} color="#575757" style={{ alignSelf: "center", marginBottom: 5 }} />}

                <View style={{ flex: 1, paddingHorizontal: 10, height: 50 }}>
                    <Text style={{ color: "black", fontWeight: "bold" }}>{heading}</Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={{
                            color: 'grey',
                            // marginRight: 10,
                            marginTop: -15
                        }}
                        placeholder={placeholder}
                        placeholderTextColor="#b2b2b2"
                        onChangeText={(val) => this.onChange(valueName, val)}
                        value={this.state.valueName}
                    />
                </View>
                <Image style={{ width: 20, resizeMode: "contain" }} source={require("../../assets/Images/check.png")} />

            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"light-content"}
                    translucent={true}
                />



                <View style={{ flex: 1 }}>
                    <ScrollView>

                        <ImageBackground
                            resizeMethod="scale"
                            source={require("../../assets/Images/Verification.png")}
                            style={{ flex: 1 }}
                        >
                            <TransparentHeader props={this.props} title={"Your Order"} />

                            <View style={{ flex: 1, alignItems: 'center', paddingTop: 10, paddingBottom: 50, }}>

                            </View>

                        </ImageBackground>
                        <View style={styles.Box}>


                            <View style={{ marginTop: "12%" }}>
                                <Text style={{ color: "#575757", fontWeight: "bold", paddingHorizontal: "8%", textAlign: "center" }}>Estimated delivery time</Text>
                                <Text style={{ color: "#cfd1d7", fontWeight: "bold", paddingHorizontal: "8%", textAlign: "center", paddingTop: 10 }}>Your order has been successfully placed</Text>
                                <Text style={{ color: "black", fontSize: 25, fontWeight: "bold", paddingHorizontal: "8%", textAlign: "center", paddingTop: 15 }}>25 min</Text>

                            </View>
                            <Image style={{ alignSelf: "center", width: "60%", resizeMode: "contain", paddingTop: 10 }} source={require("../../assets/Images/order_big_icon.png")} />

                            <View style={{}}>
                                <Text style={{ fontSize: 20, color: "#6a6a6a", fontWeight: "bold", paddingHorizontal: "8%", textAlign: "center" }}>Got your order James!</Text>

                            </View>
                            <View style={{ flex: 1, marginTop: "12%", justifyContent: "space-between", flexDirection: "row", paddingHorizontal: "8%" }}>
                                <Text style={{ color: "#b4b8c2", fontWeight: "bold", }}>ORDER DETAILS</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.TRACK_ORDER)} style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "#575757", fontWeight: "bold" }}>Track Order</Text>
                                    <Image style={{ height: 26, width: 25, resizeMode: "contain", marginLeft: 5 }} source={require("../../assets/Images/track_order_icon.png")} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, paddingHorizontal: "2%", backgroundColor: "#f9fafc", marginHorizontal: "8%", paddingVertical: 20 }}>
                                <Text style={{ color: "#b4b8c2" }}>Your Order Number</Text>
                                <Text style={{ color: "#575757", fontWeight: "bold", paddingTop: 2, paddingBottom: 10 }}>Subway - Disco block-04</Text>


                                <Text style={{ color: "#b4b8c2" }}>Order Number</Text>
                                <Text style={{ color: "#575757", fontWeight: "bold", paddingTop: 2, paddingBottom: 10 }}>#s2vo-g73s</Text>

                                <Text style={{ color: "#b4b8c2" }}>Delivery Address</Text>
                                <Text style={{ color: "#575757", fontWeight: "bold", paddingTop: 2, paddingBottom: 10 }}>1 Block 6 Gulshan-e-iqbal, karachi City Sindh, Pakistan</Text>

                            </View>


                            <View style={{ flex: 1, paddingHorizontal: "2%", backgroundColor: "#f9fafc", marginHorizontal: "8%", paddingVertical: 20 }}>
                                <Text style={{ fontSize: 20, color: "#575757", fontWeight: "bold", paddingTop: 2, paddingBottom: 5 }}>Combo Meal (6 inch)</Text>


                                <Text style={{ color: "#b4b8c2" }}>Meals and Condition</Text>
                                <Text style={{ color: "#575757", fontWeight: "bold", paddingTop: 2, paddingBottom: 10 }}>#s2vo-g73s</Text>

                                <Text style={{ color: "#b4b8c2" }}>Delivery Address</Text>
                                <Text style={{ color: "#575757", fontWeight: "bold", paddingTop: 2, paddingBottom: 10 }}>1 Block 6 Gulshan-e-iqbal, karachi City Sindh, Pakistan</Text>

                            </View>








                        </View>
                    </ScrollView>


                </View>



            </View>
        )
    }
}
