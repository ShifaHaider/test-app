
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Button, { Back, Heart } from '../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Alert from "../../utils/Alert"

import {
    View,
    Text,
    StyleSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground, FlatList,
    Animated,
    TextInput,
    Platform,
    Linking

} from 'react-native';
import Style from "./Style"
import colors from '../../utils/colorConstant';
import styles from '../home/homeStyle';
import Constant from '../../utils/constant';
import Global from '../../utils/global';
import loader from "../../assets/Images/authentication/animation.gif"

export default class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
            yOffset: 0,
            title: "",
            description: "",
            isLoading: false,
        };
    }


    send() {
        this.setState({isLoading: true})
        let { title, description } = this.state;
        var contactDetail = {
            title,
            description,
            titleArabic: "",
            descriptionArabic: "",
            status: "pending",
            isActive: true,
            showModel: false,
        }

        if (title === "" || description === "") {
            this.setState({ showModel: true, msg: "Please fill out both fields", isLoading: false })
        }
        else {
            Global.appPostRequest(Constant.CONTACT_US, contactDetail).then((res) => {
                this.setState({ showModel: true, msg: res.msg, title: "", description: "", isLoading: false })
            })
        }

    }
    openDialScreen = () => {
        let number = '';
        if (Platform.OS === 'ios') {
            number = 'telprompt:${97145519407}';
        }
        else {
            number = 'tel:${97145519407}';
        }
        Linking.openURL(number);
    };
    render() {
        return (
            <ImageBackground
                style={{ flex: 1 }}
                resizeMode="cover"
                // resizeMode="contain"
                source={require('../../assets/Images/bg1.png')}>
                <ScrollView>
                    <View style={{ padding: 25 }}>
                        <Back props={this.props} />
                        <View style={{ marginBottom: 20 }}>
                            <Text></Text>
                        </View>
                    </View>
                    <View style={Style.main}>
                        <Image
                            style={Style.Logoimage}
                            source={require('../../assets/Images/contact_big_icon.png')}
                        />
                        <View style={Style.container}>
                            <Text style={{ textAlign: "center", fontWeight: "bold" }}> SUPPORT CENTER </Text>
                        </View>

                        <View style={Style.containView}>

                            <Text style={{ textAlign: "center", }}>
                                To know the status of your order please contact the restaurant on the number on your detail screen
                            </Text>

                        </View>

                        <View style={Style.containView}>
                            <Text style={{ textAlign: "center", fontSize: 16 }}>
                                Call Our Allout Support
                            </Text>
                        </View>

                        <View style={{ width: "80%", alignSelf: "center", marginTop: 10, flexDirection: "row", justifyContent: "center" }}>
                            <Image source={require("../../assets/Images/otherIcon/call.png")} style={{ width: 16, height: 16, alignSelf: "center", marginRight: 12 }} />
                            <TouchableOpacity onPress={this.openDialScreen}>
                                <Text style={{ textAlign: "center", fontSize: 12, color: "green" }}>
                                    +971 - 45519407
                            </Text></TouchableOpacity>

                        </View>


                        <View style={Style.containView}>
                            <Text style={{ textAlign: "center", }}>
                                For queries related to online paid cancelled order, Please email us at
                                or directly type your message on below field
                            </Text>
                        </View>

                        <View style={{ width: "70%", alignSelf: "center", marginTop: 15 }}>
                            <Text style={{ textAlign: "center", fontWeight: "bold", color: colors.RED_THEME_COLOR, fontSize: 18, borderColor: colors.RED_THEME_COLOR, borderBottomWidth: 2 }}>
                                reversal@alloutdelivery.com
                            </Text>
                        </View>

                        <View style={Style.containView}>
                            <TextInput style={{ color: colors.RED_THEME_COLOR, borderColor: colors.LIGHT_GRAY_BACKGROUND, borderWidth: 1 }}
                                placeholder="Enter your title"
                                value={this.state.title}
                                onChangeText={(title) => this.setState({ title })}
                            />
                        </View>
                        <View style={Style.containView}>
                            <TextInput
                                multiline={true}
                                numberOfLines={6}
                                onChangeText={(description) => this.setState({ description })}
                                value={this.state.description}
                                style={{ backgroundColor: colors.LIGHT_GRAY_BACKGROUND, borderRadius: 5, justifyContent: "flex-start", textAlignVertical: 'top' }}
                                placeholder="Additional Comments.."
                            />
                        </View>

                        <View style={Style.containView}>
                            {this.state.isLoading ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                    source={loader}
                                /></View>
                                : 
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    backgroundColor: '#f3525c',
                                    width: '100%',
                                    alignItems: 'center',
                                    color: 'blue',
                                    borderRadius: 50,
                                    alignSelf: 'center',
                                    marginVertical: 10,
                                    justifyContent: 'center',
                                    paddingVertical: 15,
                                    // paddingRight: 40,
                                }}
                                onPress={this.send.bind(this)}>
                                <Text style={{ color: '#fff' }}>Send</Text>
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
                            </TouchableOpacity>}
                        </View>



                        <View style={Style.containView}>
                            <View style={Style.container}>
                                <Text style={{ textAlign: "center", fontSize: 16 }}> For more assistance: </Text>
                            </View>


                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 15 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../../assets/Images/otherIcon/whatsapp.png")} style={{ alignSelf: "center", width: 40, height: 40 }} />
                                <Text style={{ alignSelf: "center", paddingLeft: 10 }}>Whatsapp</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../../assets/Images/otherIcon/fbmessanger.png")} style={{ alignSelf: "center", width: 40, height: 40 }} />
                                <Text style={{ alignSelf: "center", paddingLeft: 10 }}>Messengar</Text>
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
                </ScrollView>

            </ImageBackground >
        );
    }
}
