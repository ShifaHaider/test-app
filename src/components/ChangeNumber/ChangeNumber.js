

import React, { Component } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
import styles from "./style"
import { Button, TextInput, TransparentHeader } from "../CustomComponent/index"
import RoutesKey from '../../navigation/routeskey'
import Global from "../../utils/global"
export default class ChangeNumber extends Component {
    constructor() {
        super()
        this.state = {
            number: "",
            number1: ""
        }
        this.onChange = this.onChange.bind(this)
    }


    onChange(name, val) {
        this.setState({ [name]: val });
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <ImageBackground
                    style={{ flex: 1, height: "50%" }}
                    resizeMode="cover"
                    source={require("../../assets/Images/Verification.png")}>

                    <TransparentHeader props={this.props} title={""} style={{ marginTop: Global.STATUSBAR_HEIGHT }} />

                    <Image
                        style={{
                            width: "80%",
                            height: 150,
                            alignSelf: 'center',
                            resizeMode: "contain",
                            marginTop: 30,
                            // backgroundColor: "red"
                        }}
                        source={require('../../assets/Images/image-1.png')}
                    />

                    <View style={styles.container}>
                        <View style={styles.Box}>
                            <Text style={styles.Heading}> CHANGE MOBILE NUMBER </Text>
                            <Text style={styles.OTPText}>In eu euismod ex, sed lobortios magnatiam non turpis turpish pellentesque vahicula.</Text>
                            <View style={styles.CodeBox}>

                                <TextInput heading="OLD MOBILE NUMBER" placeholder={"+971 - 45519407"} val={this.state.numer} iconImage={require("../../assets/Images/call.png")} onChange={this.onChange} onChangeKey={"number"} />
                                <TextInput heading="NWE MOBILE NUMBER" placeholder={"+971 - 46854751"} iconImage={require("../../assets/Images/call.png")} onChange={this.onChange} />
                            </View>
                            <View style={{ width: "100%", alignSelf: "flex-end", alignItems: "flex-end", justifyContent: "flex-end", marginBottom: "-12%" }} val={this.state.numer1} onChangeKey={"number1"}>
                                <Button title="Continue" props={this.props} keys={RoutesKey.VERIFICATION} />
                            </View>


                        </View>



                    </View>

                </ImageBackground>
            </View>
        )
    }
}
