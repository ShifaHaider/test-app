import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
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
import { floor, onChange } from 'react-native-reanimated';
import Constant from '../../utils/constant';
import loader from "../../assets/Images/authentication/animation.gif"

export default class Map extends Component {


    constructor(props) {
        super(props)
        this.state = {
            openModel: false,
            houseNo: "",
            floor: "",
            street: "",
            area: "",
            city: "",
            isLoading: false,
        }
    }
    onChange(name, val) {
        console.log(name, val)
        // this.setState({ [name]: val });
    }

    switchModel() {
        this.setState({ openModel: true })
    }
    houseNo = (name, val) => {
        this.setState({ houseNo: val });
    }
    floor = (name, val) => {
        this.setState({ floor: val });
    }
    street = (name, val) => {
        this.setState({ street: val });
    }
    area = (name, val) => {
        this.setState({ area: val });
    }
    city = (name, val) => {
        this.setState({ city: val });
    }


    saveData() {
        let { houseNo, floor, street, area, city } = this.state;
        if (houseNo === "" || floor === "" || street === "" || area === "" || city === "") {
            this.setState({ showModel: true, msg: "Please fill out all fields" })
        }
        else {
            this.setState({isLoading: true})
            var address = {
                houseNumber: houseNo,
                floorUnit: floor,
                streetBlock: street,
                area: area,
                city: city,
                label: "Home",
                latitude: 0,
                longitude: 0,
                isActive: true
            }
            Global.appPostRequest(Constant.ADD_ADSRESS, address).then((res) => {
                this.setState({ showModel: true, msg: res.msg, openModel: false, isLoading: false })
            })
        }
    }
    render() {
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

                {
                    this.state.openModel === false ? (
                        <MiniComponent switchModel={() => { this.setState({ openModel: true }) }} />
                    )
                        :
                        <FullComponent saveData={this.saveData.bind(this)} onChange={this.onChange.bind(this)}
                            houseNo={this.houseNo} floor={this.floor} street={this.street} area={this.area} city={this.city} state={this.state} isLoading={this.state.isLoading} />
                    // <FullComponent  closeModel={() => { this.setState({ openModel: false }) }} onChange={() => { console.log('asd') }} />


                }
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


const FullComponent = (props) => {

    return (
        <View style={{ flex: 1, paddingTop: 30, marginTop: "-90%", backgroundColor: "white", borderRadius: 50 }} >
        <ScrollView>
            <View style={styles.Box}>
                <Text style={styles.Heading}>ADD A NEW ADDRESS</Text>
                
                <View style={[styles.CodeBox, { paddingHorizontal: 20, paddingVertical: 10 }]}>

                    <TextInputs heading="HOUSE NUMBER" placeholder={"Flate B-11"} iconNotAvailable={true}
                        onChange={props.houseNo} />
                    <TextInputs heading="FLOOR/UNIT#" placeholder={"2nd Floor"} iconNotAvailable={true}
                        onChange={props.floor} />
                    <TextInputs heading="STREET/BLOCK" placeholder={"Block 7"} iconNotAvailable={true}
                        onChange={props.street} />
                    <TextInputs heading="AREA" placeholder={"Abu Dhabi Industrial Area"}
                        iconNotAvailable={true} onChange={props.area} />
                    <TextInputs heading="CITY" placeholder={"Abu Dhabi"} iconNotAvailable={true}
                        onChange={props.city} />

                    <Text style={[styles.Heading, { paddingLeft: 10 }]}>LABEL</Text>
                    <View style={{ padding: 15, flexDirection: "row", justifyContent: "space-evenly" }}>
                        <Text style={[styles.budgetBox, { backgroundColor: "white" }]}>Home</Text>
                        <Text style={styles.budgetBox}>Work</Text>
                        <Text style={styles.budgetBox}>Other</Text>
                    </View>
                    {props.isLoading?
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                    source={loader}
                                /></View>
                                : null}
                </View>
                {!props.isLoading ?
                <View>
                    <TouchableOpacity
                        onPress={props.saveData}
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
                        <Text style={{ color: '#fff' }}>Save and continue</Text>
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
                    </TouchableOpacity>
                </View> : null}
            </View>


            </ScrollView>
        </View>


    )
}
const MiniComponent = (props) => {

    return (
        <View style={{ flex: 1, paddingTop: 30, backgroundColor: "white", borderRadius: 70, position: "absolute", bottom: 0, width: "100%" }} >

            <View style={styles.Box}>
                <Text style={styles.Heading}>ADD A NEW ADDRESS </Text>
                <View style={styles.CodeBox}>

                    <Text style={[styles.Heading, { color: "red" }]}>AREA/SOCIETY </Text>

                    {/* <TextInput iconImage={require("../../assets/Images/maps-and-flags.png")} heading="" placeholder={"Search"} onChange={props.onChange} /> */}

                    <View
                        style={{
                            marginVertical: 10,
                            flexDirection: 'row',
                            width: '90%',
                            alignItems: "center",
                            borderColor: "#b2b2b2",
                            // borderWidth: 1,
                            height: 47,
                            marginHorizontal: 20,
                            // elevation: 1,
                            paddingHorizontal: 10,
                            paddingVertical: 3,
                            backgroundColor: "white",


                            shadowColor: 'white',
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 3,



                        }}
                    >
                        <AntDesign size={20} name="search1" color="#f3626b" style={{ alignSelf: "center" }} />
                        <TextInput
                            underlineColorAndroid="transparent"

                            style={{
                                color: 'grey',
                                marginRight: 10,

                            }}
                            placeholder={"Search"}
                            placeholderTextColor="#b2b2b2"
                            onChangeText={(val) => { }}
                            value={""}
                        />

                    </View>
                    <TouchableOpacity
                        onPress={props.switchModel}
                        style={{
                            backgroundColor: "#f3525c",
                            paddingVertical: 10,
                            marginTop: 10
                            // paddingHorizontal: -45
                        }}
                    ><Text style={{
                        color: "#fff",
                        textAlign: "center",
                        padding: 10

                    }}
                    >Apply Location</Text></TouchableOpacity>


                </View>




            </View>




        </View>
    )
}