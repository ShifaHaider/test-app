import React, { Component } from 'react';
import Button from '../../utils/Button';
import Routeskey from "../../navigation/routeskey"
import LoginStyle from './LoginStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity, SafeAreaView,
    ScrollView,
    Platform, CheckBox,
    StyleSheet,
    StatusBar,

} from 'react-native';
import Alert from "../../utils/Alert"
import Global from "../../utils/global"
import Constant from "../../utils/constant"
import RoutesKey from '../../navigation/routeskey';
import Style from '../CustomerMoods/Style';
import { StackActions } from '@react-navigation/native';
import loader from "../../assets/Images/authentication/animation.gif"

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pass: "",
            showModel: false,
            secure: true,
            terms: false,
            showMsg: false,
            isLoading: false
        };

    }
    componentDidMount() {}


    onChange(name, val) {
        this.setState({ [name]: val });
    }

    login = () => {
        let { email, pass } = this.state;

      if (email === "" || pass === ""  ) {
            this.setState({ showModel: true, msg: "All fields are required" });
        }
        else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            this.setState({ showModel: true, msg: "Email is badly formatted!" });
        }
        else {
            this.setState({ isLoading: true })
            var loginData = {
                email: email,
                pass: pass
            }
            Global.postRequest(Constant.USER_LOGIN, loginData)
                .then((response) => {
                    if (response.success) {
                        Global.saveDataInPhone(
                            Constant.USER_DETAIL_KEY,
                            response
                        );
                        this.props.navigation.navigate(RoutesKey.HOME);
                    }
                    else {
                        this.setState({ isLoading: false, errorMsg: response.err, showMsg: true })

                    }
                })
        }
    }


    render() {
        let { email, pass, secure } = this.state;

        return (
            <ImageBackground
                style={LoginStyle.flex}
                resizeMode="cover"
                // resizeMode="contain"
                source={require('../../assets/Images/bg1.png')}>

                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"light-content"}
                    translucent={true}
                />
                <SafeAreaView>
                    <ScrollView>
                        <Image
                            style={LoginStyle.Logoimage}
                            source={require('../../assets/Images/authentication/logoImg.png')}
                        />
                        <View style={LoginStyle.View}>
                            <View style={{ padding: 10 }}>
                                <Text style={[LoginStyle.Login,]} >Login</Text>
                                <Text style={[LoginStyle.P, { fontFamily: "PoppinsItalic" }]} >Please log in to continue</Text>
                            </View>

                            <View style={LoginStyle.TextInputView}>
                                <Image
                                    style={LoginStyle.Icon}
                                    source={require('../../assets/Images/email.png')}
                                />
                                <View style={LoginStyle.Divide}>
                                    <Text style={LoginStyle.FieldTxt}>EMAIL ID</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"

                                        style={LoginStyle.TextInputStyle}
                                        placeholder="jamesdean@gmail.com"
                                        placeholderTextColor="#b2b2b2"
                                        onChangeText={this.onChange.bind(this, 'email')}
                                        value={email}
                                    />
                                </View>

                            </View>
                            <View style={LoginStyle.TextInputView}>
                                <Image
                                    style={LoginStyle.Icon}
                                    source={require('../../assets/Images/password.png')}
                                />
                                <View style={LoginStyle.Divide}>
                                    <Text style={LoginStyle.FieldTxt}>PASSWORD</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        secureTextEntry={secure}
                                        style={LoginStyle.TextInputStyle}
                                        placeholder="Enter your password"
                                        placeholderTextColor="#b2b2b2"
                                        onChangeText={this.onChange.bind(this, 'pass')}
                                        value={pass}
                                    />
                                </View>
                                {secure ?
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ secure: false });
                                        }}
                                    >
                                        <Icon name="eye" style={LoginStyle.IconStyle} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ secure: true });
                                        }}
                                    >
                                        <Icon name="eye-slash" style={LoginStyle.IconStyle} />
                                    </TouchableOpacity>
                                }

                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <CheckBox

                                        value={this.state.emailchk}
                                        onValueChange={() =>
                                            this.setState({ emailchk: !this.state.emailchk })
                                        }
                                    />
                                    <Text style={{ color: "#393939" }}>
                                        Remember me

                                </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate(RoutesKey.FORGET_PASSWORD)
                                    }}
                                >
                                    <Text style={{ color: "#f3525c" }}>
                                        Forgot password?
                                </Text>
                                </TouchableOpacity>
                            </View>
                            {this.state.showMsg ?
                                <View style={{ padding: 10 }}>
                                    <Text style={{ fontFamily: "PoppinsItalic", color: "red" }}>{this.state.errorMsg}</Text>
                                </View> : null}

                            {this.state.isLoading ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                    source={loader}
                                /></View>
                                : null}
                        </View>
                        {!this.state.isLoading ?
                            <View style={{ marginTop: -30 }}>

                                <Button title="Login" function={() => {
                                    this.login()
                                }} />
                            </View> : null}



                        <TouchableOpacity
                            // onPress={() => this.props.navigation.navigate(RoutesKey.CHANGE_NUMBER)} 
                            style={{ alignSelf: "center", flexDirection: "row" }}>
                            <Text style={LoginStyle.P}>Login as </Text>
                            <Text style={LoginStyle.FieldTxt}>GUEST</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate(RoutesKey.SIGN_UP)
                            }}
                            style={{ paddingVertical: 20, alignSelf: "center", flexDirection: "row" }}>
                            <Text style={LoginStyle.P}>Don't have an account? </Text>
                            <Text style={LoginStyle.FieldTxt}>SIGNUP</Text>
                        </TouchableOpacity>

                        {this.state.showModel && (
                            <Alert
                                close={() => {
                                    this.setState({ showModel: false, loading: false });
                                    // this.props.navigation.navigate(RoutesKey.SPLASH)

                                }}
                                buttonHeading={"OK"}
                                msg={this.state.msg}
                            />
                        )}

                    </ScrollView>

                </SafeAreaView>

            </ImageBackground >
        );
    }
}

