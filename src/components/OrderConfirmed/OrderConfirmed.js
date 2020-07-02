import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from "./style"
import { TransparentHeader } from "../CustomComponent/index"
import Global from "../../utils/global"
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default class OrderConfirmed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"light-content"}
                    translucent={true}
                />



                <ScrollView style={{ flex: 1 }}>

                    <ImageBackground
                        resizeMethod="scale"
                        source={require("../../assets/Images/Verification.png")}
                        style={{ flex: 1 }}
                    >
                        <TransparentHeader props={this.props} title={"Profile"} style={{ marginTop: Global.STATUSBAR_HEIGHT }} />

                        <View style={{ flex: 1, alignItems: 'center', paddingTop: 10 }}>
                            <View style={styles.circleTop}>
                                <Image
                                    style={{ width: 70, height: 70 }}
                                    source={require('../../assets/faltu/bachi.png')}
                                />
                                <View style={{ height: 10, position: "absolute", width: 20, bottom: 14, right: -3 }}>
                                    <TouchableOpacity style={styles.icon} onPress={() => { alert("image") }}>
                                        <Icon size={15} name="mode-edit" color="white" style={{ alignSelf: "center" }} />


                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ paddingBottom: 80, paddingTop: 10 }}>
                                <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", color: "white" }}>James Dean</Text>
                                <Text style={{ textAlign: "center", fontSize: 11, color: "white" }}>jamesdean@gmail.com</Text>
                            </View>
                        </View>

                    </ImageBackground>
                    <View style={styles.Box}>


                        <View style={{ marginTop: "12%" }}>
                            <Text style={{ color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%" }}>PROFILE</Text>
                        </View>
                        <View style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2, { backgroundColor: `rgba(250, 205, 95, ${0.3})`, }]} onPress={() => { alert("image") }}>
                                    <AntDesign size={25} name="user" color="#facd5f" style={{ alignSelf: "center" }} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Your Details</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Change your name and other name</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2, { backgroundColor: `rgba(88, 175, 103, ${0.3})`, }]} onPress={() => { alert("image") }}>
                                    <AntDesign size={25} name="user" color="#58af67" style={{ alignSelf: "center" }} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Manage Address</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Update your addresses</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2, { backgroundColor: `rgba(243, 98, 107, ${0.3})`, }]} onPress={() => { alert("image") }}>
                                    <AntDesign size={25} name="user" color="#f3626b" style={{ alignSelf: "center" }} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Notification</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Update your notification preferences</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2, { backgroundColor: `rgba(250, 205, 95, ${0.3})`, }]} onPress={() => { alert("image") }}>
                                    <AntDesign size={25} name="user" color="#facd5f" style={{ alignSelf: "center" }} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Change Mobile Number</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Update Your mobile number</Text>
                                </View>
                            </View>
                        </View>



                        <View style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2, { backgroundColor: `rgba(243, 98, 107, ${0.3})`, }]} onPress={() => { alert("image") }}>
                                    <AntDesign size={25} name="user" color="#f3626b" style={{ alignSelf: "center" }} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Reset Passeord</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Reset your password</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ marginTop: "12%" }}>
                            <Text style={{ color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%" }}>PAYMENT</Text>
                        </View>
                        <View style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4, marginBottom: 50 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2, { backgroundColor: `rgba(88, 150, 255, ${0.3})`, }]} onPress={() => { alert("image") }}>
                                    <AntDesign size={25} name="user" color="#5896ff" style={{ alignSelf: "center" }} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>

                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Reset Passeord</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Reset your password</Text>
                                </View>
                            </View>
                        </View>




                    </View>
                </ScrollView>



            </View>
        )
    }
}
