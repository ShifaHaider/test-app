
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Button, { Back, Heart } from '../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TransparentHeader } from "../CustomComponent/index"


import {
    View,
    Text,
    StyleSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground,
    Animated
} from 'react-native';
import Style from "./Style"
import CompletedList from "./CompletedList"
import CanceledList from "./CanceledList"
import PendingList from "./PendingList"


export default class Order extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                >
                    <ImageBackground
                        resizeMethod="scale"
                        source={require("../../assets/Images/Verification.png")}
                        style={{ flex: 1 }}
                    >
                        <TransparentHeader props={this.props} title={"My Orders"} notBackIcon={false} />

                        <View style={{ flex: 1, alignItems: 'center', paddingTop: 10, paddingBottom: 20, }}>

                        </View>

                        <View style={Style.middleView}>
                        </View>
                    </ImageBackground>
                    <View style={{ width: "100%", backgroundColor: "#fff", marginBottom: 50 }}>
                        <Tab />

                    </View>


                </ScrollView>

            </View >
        );
    }
}

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        const Tab = createMaterialTopTabNavigator();
        // const {navigate} = this.props.navigation;


        return (
            <View style={{ flex: 1 }}>
                <Tab.Navigator
                    tabBarOptions={{
                        scrollEnabled: true,
                        indicatorStyle: { backgroundColor: '#f3525c' },
                        activeTintColor: "#f3525c",
                        inactiveTintColor: "#f3525c",

                        labelStyle: { fontSize: 13, fontWeight: "bold", paddingTop: 5, justifyContent: "space-around", width: 300 },
                        tabStyle: { justifyContent: "space-around" },
                        style: { height: 50, marginVertical: 5, backgroundColor: "#f9f9f9", },
                    }}

                >
                    <Tab.Screen name="Complete Orders" component={CompletedList}

                    />
                    <Tab.Screen name="Pending Orders" component={PendingList} />


                    <Tab.Screen name="Canceled Orders" component={CanceledList} />
                </Tab.Navigator>
            </View>
        );
    }
}
