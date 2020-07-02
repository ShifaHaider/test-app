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


export default class Forgetpassword extends Component {
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



    forgetPassword = () => {

        let { email } = this.state;
        if (email === "") {
            this.setState({ showModel: true, msg: "Please enter you email" })
        }
        else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            this.setState({ showModel: true, msg: "Email is badly formatted!" });
        }
        else {
            this.setState({isLoading: true})
            Global.getRequest(Constant.SEND_RESET_CODE + email).then((res) => {
                if(res.success){
                    this.setState({ showModel: true, msg: res.msg, isLoading: false })
                    Global.saveDataInPhone(Constant.USER_EMAIL, email);
                    this.props.navigation.navigate(RoutesKey.RESET_PASSWORD);
                }
                else{
                    this.setState({ showModel: true, msg: res.msg, isLoading: false })
                }
            })
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }




    render() {
        let { email, pass, secure } = this.state;


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
                        <Back function={() => { this.props.navigation.goBack() }} />
                        <View style={LoginStyle.View}>
                            <View style={{ padding: 10 }}>
                                <Text style={LoginStyle.Login} >FORGET PASSWORD</Text>
                                <Text style={LoginStyle.P} >Please enter the email or mobile number below and  recover
                                your password  </Text>
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
                            {this.state.isLoading ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                    source={loader}
                                /></View>
                                : null}
                        </View>
                        {!this.state.isLoading ?
                            <View style={{ marginTop: -30 }}>
                                <Button title="Continue" function={() => {
                                    this.forgetPassword()
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

