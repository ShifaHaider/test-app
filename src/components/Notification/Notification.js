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
import EvilIcons from "react-native-vector-icons/EvilIcons"

export default class Notification extends Component {
    state = {
        visa: false,
        master: true,
        cash: false

    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }


    deatil(title, day, image, detail, red) {
        return (
            <View style={{ flexDirection: "row", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4, marginHorizontal: "9%", paddingBottom: "5%" }}>

                <Image style={{ width: 30, height: 30 }} source={require("../../assets/Images/notification_bell_bg.png")} />
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: "#b4b8c2", fontWeight: "100", fontSize: 12, fontStyle: "italic" }}><Text style={{ fontStyle: "normal", color: "black", fontWeight: "bold" }}>{title}</Text></Text>
                        <Text style={{ color: "#b4b8c2" }}> {day}</Text>
                        <View style={{ backgroundColor: "#f5f5f5", flexDirection: "row", height: 50, width: "100%", borderRadius: 5, alignItems: "center", }}>
                            <Image source={image} style={{ height: 45, width: 45, marginLeft: 2, borderRadius: 5 }} />

                            <Text style={{ color: "black", width: "83%", paddingLeft: 10 }}> {detail}
                                <Text style={{ color: "red" }}>{" " + red}</Text>
                            </Text>
                        </View>
                    </View>


                </View>


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
                            <TransparentHeader props={this.props} title={"Notification"} style={{ marginTop: Global.STATUSBAR_HEIGHT }} />

                            <View style={{ flex: 1, alignItems: 'center', paddingTop: 10, paddingBottom: 50, }}>

                            </View>

                        </ImageBackground>
                        <View style={styles.Box}>


                            <View style={{ marginTop: "12%" }}>
                                <Text style={{ color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%" }}>NOTIIFICATION</Text>

                            </View>
                            {this.deatil("Happy Mother Day!", "Today", require("../../assets/Images/checkbox.png"), "To all  the mothers who's is continue being our strenth..", "")}
                            {this.deatil("Enjoy OPTP Ramadan Deal", "Yesterday", require("../../assets/Images/checkbox.png"), "Enjoy shortgun burger fries  for 14 AED+tax", "Order Now")}
                            {this.deatil("Save and Feast up!", "Friday", require("../../assets/Images/checkbox.png"), "Pay your order with cradit card & avail", "Buy 1 Get 1 Offer")}
                            {this.deatil("Grab our hot offer on burger", "Monday", require("../../assets/Images/checkbox.png"), "Get trending meals at good prices", "Checkout Now")}
                            {this.deatil("Allout Sunday! Double the Fun", "Sunday", require("../../assets/Images/checkbox.png"), "Allout are bringing you an amazing", "Sunday Offer")}





                        </View>
                    </ScrollView>

                    {/* <View style={{ position: "absolute", bottom: 10, right: 10 }}>
                        <TouchableOpacity style={{ padding: 10, justifyContent: "center", backgroundColor: "#f3525c", flexDirection: 'row', borderRadius: 100 }}>
                            <AntDesign size={40} name={"plus"} color="white" style={{ alignSelf: "center" }} />
                        </TouchableOpacity>
                    </View> */}

                </View>



            </View>
        )
    }
}
