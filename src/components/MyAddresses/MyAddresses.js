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
import RoutesKey from '../../navigation/routeskey'
import Constant from '../../utils/constant'
import Alert from "../../utils/Alert"
import loader from "../../assets/Images/authentication/animation.gif"

export default class MyAddresses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visa: false,
            master: true,
            cash: false,
            allAddresses: [],
            showModel: false,
            loader: true,
            title: "ADDRESSES",
        }
    }


    getAllAddress() {
        Global.appGetRequest(Constant.GET_ALL_ADDRESSES).then((res) => {
            if (!res.data.length <= 0) {
                this.setState({ allAddresses: res.data, loader: false })
            }
            else {
                this.setState({ loader: false, title: "No Records to show" })
            }
        })
    }
    componentDidMount() {
        this.getAllAddress();
    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }
    deleteAddress(address) {
        Global.appGetRequest(Constant.DELETE_ADDRESS + address._id).then((res) => {
            this.getAllAddress();
        })
    }

    deatil(location, address, noteRider, currentLocation, add) {
        return (
            <View style={{ flexDirection: "row", paddingVertical: 10, borderBottomColor: "#b4b8c2", borderBottomWidth: 0.4, marginHorizontal: "9%", paddingBottom: "5%" }}>

                <Image source={require("../../assets/Images/address_left_icon.png")} />
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10 }}>
                    <View>
                        <Text style={{ color: "#b4b8c2", fontWeight: "100", fontSize: 12, fontStyle: "italic" }}><Text style={{ fontStyle: "normal", color: "black", fontWeight: "bold" }}>{location}</Text>{currentLocation == true ? " Current Location" : ""}</Text>
                        <Text style={{ color: "#b4b8c2" }}> {address}</Text>
                        <Text style={{ color: "#b4b8c2", paddingTop: 10 }}><Text style={{ color: "#575757", fontWeight: "bold" }}>Note to Rider:</Text> {noteRider}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: -40 }}>
                        <EvilIcons size={25} name={"pencil"} color="red" style={{}} onPress={() => {
                            this.props.navigation.navigate("UpdateAddress", { address: add })
                        }} />
                        <EvilIcons size={25} name={"trash"} color="red" style={{}} onPress={this.deleteAddress.bind(this, add)} />
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
                            <TransparentHeader props={this.props} title={"Addresses"} style={{ marginTop: Global.STATUSBAR_HEIGHT }} />

                            <View style={{ flex: 1, alignItems: 'center', paddingTop: 10, paddingBottom: 50, }}>

                            </View>

                        </ImageBackground>

                        {this.state.loader ?
                            <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                style={{ height: 100, width: 100, }}
                                source={loader}
                            /></View>
                            :
                            <View style={styles.Box}>
                                <View style={{ marginTop: "12%" }}>
                                    <Text style={{ color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%" }}>{this.state.title}</Text>

                                    {this.state.allAddresses.map((val, key) => {
                                        return (
                                            this.deatil(val.label, val.area, val.city, true, val)
                                        )
                                    })}
                                </View>
                            </View>}
                    </ScrollView>

                    <View style={{ position: "absolute", bottom: 10, right: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.MAP)} style={{ padding: 10, justifyContent: "center", backgroundColor: "#f3525c", flexDirection: 'row', borderRadius: 100 }}>
                            <AntDesign size={40} name={"plus"} color="white" style={{ alignSelf: "center" }} />
                        </TouchableOpacity>
                    </View>

                </View>


                {this.state.showModel && (
                    <Alert
                        close={() => {
                            this.setState({ showModel: false, loading: false });

                        }}
                        buttonHeading={"OK"}
                        msg={this.state.msg}
                    />
                )}
            </View>
        )
    }
}
