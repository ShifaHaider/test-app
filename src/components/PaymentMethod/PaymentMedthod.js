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


export default class PaymentMethod extends Component {
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
                            <TransparentHeader props={this.props} title={"Payment Methods"} style={{ marginTop: Global.STATUSBAR_HEIGHT }} />

                            <View style={{ flex: 1, alignItems: 'center', paddingTop: 10, paddingBottom: 50, }}>

                            </View>

                        </ImageBackground>
                        <View style={styles.Box}>


                            <View style={{ marginTop: "12%" }}>
                                <Text style={{ color: "#575757", fontWeight: "bold", paddingHorizontal: "8%", textAlign: "center" }}>CHOOSE YOUR PAYMENT METHOD</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10, justifyContent: "center", borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4, marginHorizontal: "9%", paddingBottom: "5%" }}>
                                {!!this.state.visa ?
                                    <Image style={{ width: 70, height: 20, resizeMode: "contain" }} source={require("../../assets/Images/visa.png")} />
                                    :
                                    <TouchableOpacity onPress={() => this.setState({ visa: true, master: false, cash: false })}>
                                        <Image style={{ width: 70, height: 20, resizeMode: "contain" }} source={require("../../assets/Images/visa_selected.png")} />
                                    </TouchableOpacity>}

                                {!!this.state.master ?
                                    <Image style={{ width: 80, height: 27, resizeMode: "contain" }} source={require("../../assets/Images/master.png")} />
                                    :
                                    <TouchableOpacity onPress={() => this.setState({ visa: false, master: true, cash: false })}>
                                        <Image style={{ width: 80, height: 27, resizeMode: "contain" }} source={require("../../assets/Images/master_selected.png")} />
                                    </TouchableOpacity>}

                                {!!this.state.cash ?
                                    <Image style={{ width: 50, height: 27, resizeMode: "contain" }} source={require("../../assets/Images/cashondelivery.png")} />
                                    :
                                    <TouchableOpacity onPress={() => this.setState({ visa: false, master: false, cash: true })}>
                                        <Image style={{ width: 50, height: 27, resizeMode: "contain" }} source={require("../../assets/Images/cashondelivery_selected.png")} />
                                    </TouchableOpacity>}
                            </View>



                            <View style={{ flex: 1, marginTop: "12%" }}>
                                <Text style={{ color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%" }}>CARD DETAILS</Text>
                            </View>
                            <View style={{ flex: 1, paddingHorizontal: "9%" }}>
                                {this.inputText("Card Holder Name", "James Dean", "user", "AntDesign", "name")}
                                {this.inputText("Card Number", "5437 5090 4578 2546", "credit-card", "Entypo", "number")}
                                {this.inputText("Expiration Date", "05/22", "calendar", "AntDesign", "date")}
                                {this.inputText("Expiration Date", "05/22", "table-search", "MaterialCommunityIcons", "cvv")}

                            </View>








                        </View>
                    </ScrollView>

                    <View style={{ flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end", marginBottom: 50 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.YOUR_ORDER)} style={{ justifyContent: "space-around", width: "50%", backgroundColor: "gray", paddingHorizontal: "12%", paddingVertical: "2%", alignSelf: "center", alignItems: "center", flexDirection: 'row', borderRadius: 50 }}>
                            <SimpleLineIcons size={20} name={"lock"} color="white" style={{ alignSelf: "center" }} />
                            <Text style={{ color: "white" }}>Proceed</Text>
                        </TouchableOpacity>
                    </View>

                </View>



            </View>
        )
    }
}
