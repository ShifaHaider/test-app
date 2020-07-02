import React, { Component } from 'react';
import Button, { Back } from '../../utils/Button';
import Routeskey from "../../navigation/routeskey"
import LoginStyle from './LoginStyle';
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
} from 'react-native';
import Alert from "../../utils/Alert"
import Global from "../../utils/global"
import Constant from "../../utils/constant"
import RoutesKey from '../../navigation/routeskey';
import loader from "../../assets/Images/authentication/animation.gif"


export default class ResetPassword extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pass: '',
            showModel: false,
            secure: true,
            isLoading: false
        };
    }
    componentDidMount() { }



    resetPassword = () => {
        let { code, pass, cpass } = this.state;
        if (code === "" || pass === "" || cpass === "") {
            this.setState({ showModel: true, msg: "All fields are required!" });
        }
        else {
            this.setState({ isLoading: true })
            if (cpass === pass) {
                Global.getDataFromPhone(Constant.USER_EMAIL).then((data) => {
                    var userData = {
                        resetCode: code,
                        pass: cpass,
                        email: data
                    }
                    Global.postRequest(Constant.RESET_PASSWORD, userData).then((res) => {
                        if (res.success) {
                            this.setState({ showModel: true, msg: res.msg, isLoading: false });
                            this.props.navigation.navigate(RoutesKey.LOGIN)
                        }
                        else {
                            this.setState({ showModel: true, msg: res.msg, isLoading: false });
                        }
                    })
                })
            }
            else {
                this.setState({ showModel: true, msg: "Please type the same password", isLoading: false });
            }
        }

    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }




    render() {
        let { email, pass, secure, cpass, code } = this.state;


        return (
            <ImageBackground
                style={LoginStyle.flex}
                resizeMode="cover"
                // resizeMode="contain"
                source={require('../../assets/Images/bg1.png')}>
                <SafeAreaView>
                    <ScrollView>

                        <Image
                            style={LoginStyle.Logoimage}
                            source={require('../../assets/Images/image-1.png')}
                        />
                        <Back props={this.props} />
                        <View style={LoginStyle.View}>
                            <View style={{ padding: 10 }}>
                                <Text style={LoginStyle.Login} >RESET PASSWORD</Text>
                                <Text style={LoginStyle.P} >Password reset code sent to your email ID. Please enter below.</Text>
                            </View>

                            <View style={LoginStyle.TextInputView}>
                                <Image
                                    style={LoginStyle.Icon}
                                    source={require('../../assets/Images/reset-code.png')}
                                />
                                <View style={LoginStyle.Divide}>
                                    <Text style={LoginStyle.FieldTxt}>RESET CODE</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"

                                        style={LoginStyle.TextInputStyle}
                                        placeholder="Enter reset code"
                                        keyboardType="phone-pad"
                                        placeholderTextColor="#b2b2b2"
                                        onChangeText={this.onChange.bind(this, 'code')}
                                        value={code}
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
                                        <Image
                                            style={LoginStyle.Icon}
                                            source={require('../../assets/Images/eye.png')}
                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ secure: true });
                                        }}
                                    >
                                        <Image
                                            style={LoginStyle.Icon}
                                            source={require('../../assets/Images/eye.png')}
                                        />
                                    </TouchableOpacity>
                                }

                            </View>
                            <View style={LoginStyle.TextInputView}>
                                <Image
                                    style={LoginStyle.Icon}
                                    source={require('../../assets/Images/password.png')}
                                />
                                <View style={LoginStyle.Divide}>
                                    <Text style={LoginStyle.FieldTxt}>CONFIRM PASSWORD</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        secureTextEntry={secure}
                                        style={LoginStyle.TextInputStyle}
                                        placeholder="Enter adain password"
                                        placeholderTextColor="#b2b2b2"
                                        onChangeText={this.onChange.bind(this, 'cpass')}
                                        value={cpass}
                                    />
                                </View>
                                {secure ?
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ secure: false });
                                        }}
                                    >
                                        <Image
                                            style={LoginStyle.Icon}
                                            source={require('../../assets/Images/eye.png')}
                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ secure: true });
                                        }}
                                    >
                                        <Image
                                            style={LoginStyle.Icon}
                                            source={require('../../assets/Images/eye.png')}
                                        />
                                    </TouchableOpacity>
                                }

                            </View>
                            {this.state.isLoading ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                    source={loader}
                                /></View>
                                : null}

                        </View>
                        {!this.state.isLoading ?
                            <View style={{ marginTop: -30 }}>
                                <Button title="Reset Password" function={() => {
                                    this.resetPassword()
                                }} />

                            </View> : null}


                        {this.state.showModel && (
                            <Alert
                                close={() => {
                                    this.setState({ showModel: false, loading: false });

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

