import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput, } from 'react-native'
import styles from "./style"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SwipeUpDown from 'react-native-swipe-up-down';
import { AddressHeader, Button, TextInput as TextInputs } from "../CustomComponent/index"

import Alert from "../../utils/Alert"


import { TransparentHeader } from "../CustomComponent/index"
import Global from "../../utils/global"
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import colors from '../../utils/colorConstant';
import { Back } from '../../utils/Button';
import { floor, add } from 'react-native-reanimated';
import Constant from '../../utils/constant';
import loader from "../../assets/Images/authentication/animation.gif"
import RoutesKey from '../../navigation/routeskey'


export default class UpdateAddress extends Component {


    constructor(props) {
        super(props)
        this.state = {
            address: props.route.params.address || {},
            isLoading: false,
        }
    }
    onChange(name, val) {
        var address = this.state.address;
        address[name] = val;
        this.setState({ address: address });
    }



    updateAddress = () => {
        var address = this.state.address
        if (address.houseNumber === "" || address.floorUnit === "" || address.streetBlock === "" || address.area === "" || address.city === "") {
            this.setState({ showModel: true, msg: "Please fill out all fields" })
        }
        else {
            this.setState({ isLoading: true });
            address.updatedDate = Date.now();
            address.id = address._id;
            Global.appPostRequest(Constant.UPDATE_ADDRESS, address).then((res) => {
                this.setState({ showModel: true, msg: res.msg, isLoading: false });
                this.props.navigation.navigate(RoutesKey.MY_ADDRESS);

            })
        }
    }
    render() {
        let { address } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"dark-content"}
                    translucent={true}
                />


                <View style={{ padding: 30, position: "absolute", top: 30, zIndex: 9999999 }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[{
                            marginTop: 30,
                            // position: "absolute", top: 20, left: 10,
                            width: 30, marginRight: 15, marginLeft: 15,
                            height: 30, alignSelf: "center",
                            borderRadius: 30 / 2,
                            alignItems: "center",
                            justifyContent: "center", alignItems: "center"
                        }, this.props.color ? { backgroundColor: "#f3525c" } : { backgroundColor: "#ffa5ab" }]}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }
                        }>

                        <Image
                            style={{
                                width: 20,
                                height: 20,
                                alignSelf: 'center',
                                resizeMode: 'contain',
                                position: "absolute", right: 5
                            }}
                            source={require('../../assets/Images/back.png')}
                        />
                    </TouchableOpacity>
                </View>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
                <View style={{ flex: 1, paddingTop: 30, marginTop: "-90%", backgroundColor: "white", borderRadius: 50 }} >

                    <ScrollView>
                        <View style={styles.Box}>
                            <Text style={styles.Heading}>ADD A NEW ADDRESS</Text>
                            <View style={[styles.CodeBox, { paddingHorizontal: 20, paddingVertical: 10 }]}>

                                <View style={{
                                    marginVertical: 10,
                                    flexDirection: 'row',
                                    width: '90%',
                                    alignItems: "center",
                                    borderBottomColor: "#b2b2b2",
                                    borderBottomWidth: 1,
                                    height: 40,
                                }}>
                                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                        <Text style={{ color: "#f3525c", fontWeight: "bold" }}>HOUSE NUMBER</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={{
                                                color: 'grey',
                                                marginRight: 10,
                                            }}
                                            placeholder="HOUSE NUMBER"
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, "houseNumber")}
                                            value={this.state.address.houseNumber}
                                        />
                                    </View>
                                </View>
                                <View style={{
                                    marginVertical: 10,
                                    flexDirection: 'row',
                                    width: '90%',
                                    alignItems: "center",
                                    borderBottomColor: "#b2b2b2",
                                    borderBottomWidth: 1,
                                    height: 40,
                                }}>
                                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                        <Text style={{ color: "#f3525c", fontWeight: "bold" }}>FLOOR UNIT</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={{
                                                color: 'grey',
                                                marginRight: 10,
                                            }}
                                            placeholder="FLOOR UNIT"
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, "floorUnit")}
                                            value={this.state.address.floorUnit}
                                        />
                                    </View>
                                </View>
                                <View style={{
                                    marginVertical: 10,
                                    flexDirection: 'row',
                                    width: '90%',
                                    alignItems: "center",
                                    borderBottomColor: "#b2b2b2",
                                    borderBottomWidth: 1,
                                    height: 40,
                                }}>
                                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                        <Text style={{ color: "#f3525c", fontWeight: "bold" }}>STREET BLOCK</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={{
                                                color: 'grey',
                                                marginRight: 10,
                                            }}
                                            placeholder="STREET BLOCK"
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, "streetBlock")}
                                            value={this.state.address.streetBlock}
                                        />
                                    </View>
                                </View>
                                <View style={{
                                    marginVertical: 10,
                                    flexDirection: 'row',
                                    width: '90%',
                                    alignItems: "center",
                                    borderBottomColor: "#b2b2b2",
                                    borderBottomWidth: 1,
                                    height: 40,
                                }}>
                                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                        <Text style={{ color: "#f3525c", fontWeight: "bold" }}>AREA</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={{
                                                color: 'grey',
                                                marginRight: 10,
                                            }}
                                            placeholder="AREA"
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, "area")}
                                            value={this.state.address.area}
                                        />
                                    </View>
                                </View>
                                <View style={{
                                    marginVertical: 10,
                                    flexDirection: 'row',
                                    width: '90%',
                                    alignItems: "center",
                                    borderBottomColor: "#b2b2b2",
                                    borderBottomWidth: 1,
                                    height: 40,
                                }}>
                                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                        <Text style={{ color: "#f3525c", fontWeight: "bold" }}>CITY</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={{
                                                color: 'grey',
                                                marginRight: 10,
                                            }}
                                            placeholder="CITY"
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, "city")}
                                            value={this.state.address.city}
                                        />
                                    </View>
                                </View>

                            </View>

                            {this.state.isLoading?
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                    source={loader}
                                /></View>
                                : null}
                            <View>
                                {!this.state.isLoading?
                                <TouchableOpacity
                                    onPress={this.updateAddress}
                                    activeOpacity={1}
                                    style={{
                                        backgroundColor: colors.RED_THEME_COLOR,
                                        width: '100%',
                                        alignItems: 'center',
                                        color: 'blue',
                                        borderRadius: 50,
                                        alignSelf: 'center',
                                        marginVertical: 10,
                                        justifyContent: 'center',
                                        paddingVertical: 15,
                                        // paddingRight: 40,
                                        width: "80%"
                                    }}
                                >
                                    <Text style={{ color: '#fff' }}>Update address</Text>
                                    <Image
                                        style={{
                                            width: 40,
                                            height: 40,
                                            alignSelf: 'center',
                                            resizeMode: 'contain',
                                            position: "absolute",
                                            right: 5
                                        }}
                                        source={require('../../assets/Images/right_arrow_circle.png')}
                                    />
                                </TouchableOpacity>: null}
                            </View>

                        </View>
                    </ScrollView>
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


