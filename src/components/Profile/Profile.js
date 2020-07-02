import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from "./style"
import { TransparentHeader } from "../CustomComponent/index"
import Global from "../../utils/global"
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import RoutesKey from "../../navigation/routeskey"
import Constant from '../../utils/constant'


export default class Profile extends Component {

    constructor() {
        super();
        this.state = {
            userData:{}
        }
    }
    componentWillMount() {
        Global.getDataFromPhone(Constant.USER_DETAIL_KEY).then((data) => {
            var data = JSON.parse(data);
            this.setState({ userData: data.user });
        })
    }
    resetPassword() {
        Global.getRequest(Constant.SEND_RESET_CODE + this.state.userData.email).then((res)=>{
            Global.saveDataInPhone(Constant.USER_EMAIL , this.state.userData.email);
            this.setState({showModel: true , msg:"We have sent reset code on this email"})
            this.props.navigation.navigate(RoutesKey.RESET_PASSWORD); 
        })
    }
    
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
                                <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", color: "white" }}>{this.state.userData.name}</Text>
                                <Text style={{ textAlign: "center", fontSize: 11, color: "white" }}>{this.state.userData.email}</Text>
                            </View>
                        </View>

                    </ImageBackground>
                    <View style={styles.Box}>


                        <View style={{ marginTop: "12%" }}>
                            <Text style={{ color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%" }}>PROFILE</Text>
                        </View>
                        <View style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2,]} onPress={() => { alert("image") }}>
                                    <Image source={require('../../assets/Images/profileIcon/profile_user_bg.png')} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Your Details</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Change your name and other name</Text>
                                </View>
                            </View>
                        </View>


                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.MY_ADDRESS)} style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2,]} onPress={() => { alert("image") }}>
                                    <Image source={require('../../assets/Images/profileIcon/profile_home_bg.png')} />
                                </View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate(RoutesKey.MY_ADDRESS) }} style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Manage Address</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Update your addresses</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.NOTIFICATION)} style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2,]} onPress={() => { alert("image") }}>
                                    <Image source={require('../../assets/Images/profileIcon/profile_bell_bg.png')} />
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Notification</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Update your notification preferences</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.CHANGE_NUMBER)} style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2,]}>
                                    <Image source={require('../../assets/Images/profileIcon/profile_mobile_bg.png')} />
                                </View>
                                <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => { this.props.navigation.navigate(RoutesKey.CHANGE_NUMBER) }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Change Mobile Number</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Update Your mobile number</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>



{/* 
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.RESET_PASSWORD)} style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2,]} onPress={() => { alert("image") }}>
                                    <Image source={require('../../assets/Images/profileIcon/profile_pasword_bg-1.png')} />
                                </View>
                                <TouchableOpacity onPress={this.resetPassword.bind(this)} style={{ paddingLeft: 10 }}>
                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Reset password</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Reset your password</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity> */}




                        <View style={{ marginTop: "12%" }}>
                            <Text style={{ color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%" }}>PAYMENT</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.PAYMWNT_METHOD)} style={{ marginHorizontal: "9%", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4, marginBottom: 50 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={[styles.icon2,]}>
                                    <Image source={require('../../assets/Images/profileIcon/profile_pasword_bg.png')} />
                                </View>
                                <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => { this.props.navigation.navigate(RoutesKey.PAYMWNT_METHOD) }}>

                                    <Text style={{ color: "#575757", paddingLeft: 2 }}>Payment Details</Text>
                                    <Text style={{ color: "#b4b8c2", fontSize: 12 }}> Update your payment preferences</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>




                    </View>
                </ScrollView>



            </View>
        )
    }
}
