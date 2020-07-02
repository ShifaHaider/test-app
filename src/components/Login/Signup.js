import React, { Component } from 'react';
import Button from '../../utils/Button';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import loader from "../../assets/Images/authentication/animation.gif"

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pass: '',
            phone: "",
            name: "",
            showModel: false,
            secure: true,
            secure1: false,
            terms: false,
            isLoading: false
        };
    }
    componentDidMount() { }



    signUp = () => {
        let { email, name, phone, pass, cpass, terms } = this.state;
        if (email === "" || name === "" || pass === "" || cpass === "" || !terms ) {
            this.setState({ showModel: true, msg: "All fields are required" });
        }
        else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            this.setState({ showModel: true, msg: "Email is badly formatted!" });
        }
        else {
            this.setState({isLoading: true})
            if (cpass === pass) {
                var dataToSend = {
                    name: name,
                    address: "",
                    website: "",
                    state: "",
                    cityMunicipality: "",
                    discrete: "",
                    streeAddress: "",
                    salutationTitle: "",
                    firstName: name,
                    middleName: "",
                    lastName: "",
                    designation: "",
                    mobileNumber: phone,
                    email: email,
                    profileImg: {},
                    verified: false,
                    latitude: "",
                    longitude: "",
                    accountActive: false,
                    role: "user",
                    pass: cpass
                };
                Global.postRequest(Constant.USER_REGISTRATION, dataToSend).then((res) => {
                     if(res.errors){
                        this.setState({ showModel: true, msg: res.errors.message, isLoading: false });
                     }
                     else{
                        Global.saveDataInPhone(Constant.USER_DETAIL_KEY , res);
                        this.props.navigation.navigate(RoutesKey.VERIFICATION);
                     }
                })
            }
            else {
                this.setState({ showModel: true, msg: "Please type the same password" });
            }
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }




    render() {
        let { email, name, phone, pass, cpass, secure, secure1 } = this.state;

        return (
            <ImageBackground
                style={LoginStyle.flex}
                resizeMode="cover"
                // resizeMode="contain"
                source={require('../../assets/Images/bg1.png')}>
                <SafeAreaView>
                    <ScrollView>
                        <View style={[LoginStyle.View, { paddingVertical: 30, marginTop: 50 }]}>
                            <View style={{ padding: 5, marginBottom: 20 }}>
                                <Text style={LoginStyle.Login} >SIGN UP</Text>
                                <Text style={LoginStyle.P} >Please Sign up to continue</Text>
                            </View>

                            <View style={[LoginStyle.TextInputView,]}>
                                <Image
                                    style={LoginStyle.Icon}
                                    source={require('../../assets/Images/user.png')}
                                />
                                <View style={[LoginStyle.Divide,]}>
                                    <Text style={LoginStyle.FieldTxt}>FULL NAME</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"

                                        style={LoginStyle.TextInputStyle}
                                        placeholder="James Dean"
                                        placeholderTextColor="#b2b2b2"
                                        onChangeText={this.onChange.bind(this, 'name')}
                                        value={name}
                                    />
                                </View>

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
                                    source={require('../../assets/Images/call.png')}
                                />
                                <View style={LoginStyle.Divide}>
                                    <Text style={LoginStyle.FieldTxt}>MOBILE NUMBER</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        keyboardType="phone-pad"
                                        style={LoginStyle.TextInputStyle}
                                        placeholder="+971 - 4555189"
                                        placeholderTextColor="#b2b2b2"
                                        onChangeText={this.onChange.bind(this, 'phone')}
                                        value={phone}
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
                            <View style={LoginStyle.TextInputView}>
                                <Image
                                    style={LoginStyle.Icon}
                                    source={require('../../assets/Images/password.png')}
                                />
                                <View style={LoginStyle.Divide}>
                                    <Text style={LoginStyle.FieldTxt}> CONFIRM PASSWORD</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        secureTextEntry={secure1}
                                        style={LoginStyle.TextInputStyle}
                                        placeholder="Enter your password"
                                        placeholderTextColor="#b2b2b2"
                                        onChangeText={this.onChange.bind(this, 'cpass')}
                                        value={cpass}
                                    />
                                </View>
                 

                            </View>

                            <View style={{ marginLeft: -10, flexDirection: "row", alignItems: "center", }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <CheckBox

                                        value={this.state.terms}
                                        onValueChange={() =>
                                            this.setState({ terms: !this.state.terms })
                                        }
                                    />
                                    <Text style={{ color: "#393939" }}>
                                        I agree to the </Text>
                                </View>

                                <Text style={{ color: "#f3525c" }}>
                                    terms
                                </Text>
                                <Text style={{ color: "#393939" }}> and </Text>
                                <Text style={{ color: "#f3525c" }}> privacy </Text>
                                <Text style={{ color: "#393939" }}>policy </Text>
                            </View>
                            {this.state.isLoading?
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                    source={loader}
                                /></View>
                                : null}
                        </View>
                            {!this.state.isLoading ?
                            <View style={{ marginTop: -30 }}>

                                <Button title="Sign Up" function={() => {
                                    this.signUp()
                                }} />
                            </View> : null}



                        <View style={{ width: "70%", marginBottom: 5, alignItems: "center", alignSelf: "center", flexDirection: "row" }}>
                            <View style={{ borderWidth: 1, borderColor: "#b2b2b2", alignSelf: "center", width: "30%" }}></View>
                            <Text style={LoginStyle.P}> or Sign up with </Text>
                            <View style={{ borderWidth: 1, borderColor: "#b2b2b2", alignSelf: "center", width: "30%" }}></View>

                        </View>
                        <View style={{ width: "40%", alignSelf: "center", justifyContent: "space-around", padding: 5, flexDirection: "row", marginVertical: 10 }}>
                            <TouchableOpacity>
                                <Image
                                    style={LoginStyle.Sicon}
                                    source={require('../../assets/Images/twitter.png')}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={LoginStyle.Sicon}
                                    source={require('../../assets/Images/gmail-plus.png')}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style={LoginStyle.Sicon}
                                    source={require('../../assets/Images/facebook.png')}
                                />

                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate(RoutesKey.LOGIN)
                            }}

                            style={{ paddingVertical: 5, alignSelf: "center", flexDirection: "row" }}>
                            <Text style={LoginStyle.P}>Don't have an account? </Text>
                            <Text style={LoginStyle.FieldTxt}>LOGIN</Text>
                        </TouchableOpacity>

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

