
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Button, { Back, Heart } from '../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import {
    View,
    Text,
    StyleSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground, FlatList,
    Animated
} from 'react-native';
import Style from "./Style"
import Global from '../../utils/global';
import Constant from '../../utils/constant';
import loader from "../../assets/Images/authentication/animation.gif"




export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
            yOffset: 0,
            aboutApp: "",
            loader: true
        };
    }

    componentDidMount() {
        Global.getRequest(Constant.ABOUT_US).then((res) => {
            this.setState({ aboutApp: res.data[0].aboutText , loader: false })
        })
    }


    render() {

        return (



            <ImageBackground
                style={{ flex: 1 }}
                resizeMode="cover"
                // resizeMode="contain"
                source={require('../../assets/Images/bg1.png')}>
                <ScrollView>
                    <View style={{ padding: 30 }}>
                        <Back props={this.props} />
                        <Text style={Style.h1}>About Us</Text>
                    </View>
                    <View style={Style.main}>
                        <Image
                            style={Style.Logoimage}
                            source={require('../../assets/Images/about_big_icon.png')}
                        />
                        <View style={Style.row}>
                            <Text style={Style.h2}> ABOUT </Text>
                            <Text style={Style.all}> ALLOUT </Text>
                        </View>

                        {this.state.loader ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                    style={{ height: 80, width: 80, }}
                                    source={loader}
                                /></View>
                                :
                        <Text style={Style.p}>
                            {this.state.aboutApp}
                        </Text>}




                    </View>
                </ScrollView>

            </ImageBackground >
        );
    }
}
