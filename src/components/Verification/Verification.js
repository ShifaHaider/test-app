import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import styles from "./style"
import CodeInput from 'react-native-confirmation-code-input';
// import { Button } from "../CustomComponent/index";
import Button from '../../utils/Button';
import RoutesKey from '../../navigation/routeskey';
import Global from '../../utils/global';
import Constant from '../../utils/constant';
import Alert from "../../utils/Alert"

export default class Verification extends Component {

    constructor() {
        super();
        this.state = {
            showModel: false,
            code:"",
        }
    }

    verifyAccount = () => {
        console.log(this.state.code);
        if (this.state.code) {
            Global.getDataFromPhone(Constant.USER_DETAIL_KEY).then((data) => {
                Global.getRequest(Constant.VERIFY_ACCOUNT + data.id + '/' + this.state.code).then((res) => {
                    console.log(res);
                    if(res.success){
                        this.setState({ showModel: true, msg: res.msg })
                        this.props.navigation.navigate(RoutesKey.LOGIN);
                    }
                    else{
                        this.setState({ showModel: true, msg: res.msg })
                    }
                })
            })
        }
        else {
            this.setState({ showModel: true, msg: "Please enter code" })
        }
    }


    render() {
        return (
            <View style={styles.MainContainer}>
                <ImageBackground
                    style={{ flex: 1, height: "50%" }}
                    resizeMode="cover"
                    source={require("../../assets/Images/Verification.png")}>
                    <View style={styles.container}>
                        <View style={styles.Box}>
                            <Text style={styles.Heading}> VERIFICATION </Text>
                            <Text style={styles.Paragraph}>we sent you a code code to verify your mobile number</Text>
                            <Text style={styles.OTPText}>Enter your OTP code here</Text>
                            <View style={styles.codeBox}>

                                <CodeInput
                                    ref="codeInputRef2"
                                    keyboardType="numeric"
                                    codeLength={4}
                                    inactiveColor="#bfbfbf"
                                    activeColor="#f3525c"
                                    className='border-circle'
                                    // compareWithCode='1234'
                                    autoFocus={false}
                                    codeInputStyle={{
                                        borderWidth: 3,
                                        fontWeight: 'bold',
                                        fontSize: 18
                                    }}
                                    containerStyle={{
                                        flex: 0,
                                        marginVertical: 10
                                    }}
                                    onFulfill={(code, isValid) => {
                                        console.log(code, isValid)
                                        this.setState({ code: code });
                                    }
                                        // this._onFinishCheckingCode2(isValid, code)
                                    } />

                            </View>

                            <Text style={styles.OTPText}>I don't Recive a code!</Text>
                            <Text style={styles.ResendCode}>Resend code</Text>
                            <View style={{ width: "100%", alignSelf: "flex-end", alignItems: "flex-end", justifyContent: "flex-end", marginBottom: "-12%" }}>
                                <Button title="Continue" function={() => {
                                    this.verifyAccount()
                                }} />
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

                </ImageBackground>
            </View>
        )
    }
}
