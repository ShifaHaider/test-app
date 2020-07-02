
import React, { Component, Modal } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Button, { Back, Heart } from '../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView, TouchableOpacity,
    Image, ImageBackground,
    Animated
} from 'react-native';
import Style from "./Style"
import RoutesKey from '../../navigation/routeskey';
import List from "./List"
import RestaurantFilter from "./rerurantProductFilter"

class Restaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
            yOffset: 0,


        };
    }

    render() {

        return (
            <View>
                {
                    // true ?
                    this.state.yOffset > 180 ?

                        <View style={{ height: 60, backgroundColor: "#f3525c" }}>
                            <Text style={Style.head}>SUBWAY - DISCO </Text>

                            <Heart />
                            <Back color="red" props={this.props} />

                        </View>

                        : null
                }
                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={event => {
                        let a = event.nativeEvent.contentOffset.y;
                        this.setState({ yOffset: a })
                        console.log(a)
                    }}
                >
                    {
                        this.state.yOffset < 180 ?
                            <ImageBackground
                                // style={{ flex: 1 }}
                                // resizeMode="scale"
                                // // resizeMode="contain"
                                // source={require('../../assets/Images/image.png')}

                                resizeMethod="scale"
                                source={require("../../assets/Images/image.png")}
                                style={{ flex: 1 }}



                            >
                                <View >

                                    <Heart />
                                    <Back color="red" props={this.props} />
                                </View>
                                <View style={Style.h2}>
                                    <Text style={Style.hStyle}>SUBWAY - DISCO </Text>
                                    <Image
                                        style={{
                                            height: 100,
                                            resizeMode: 'contain',
                                        }}
                                        source={require('../../assets/Images/subway.png')}
                                    />
                                    <View style={Style.deliver}>
                                        <Text style={Style.deliverTxt}>Delivered</Text>
                                    </View>
                                    <View style={{ alignItems: "center", flexDirection: "row", marginVertical: 10 }}>
                                        <Icon name="star" style={Style.icon} />
                                        <Text style={Style.white}> 4.5 (2k+) </Text>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate(RoutesKey.RESTAURANT_REVIEW) }} >
                                            <Text style={Style.white}> 20+  Reviews</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={Style.middleView}>
                                    <View style={[Style.middle, { flexDirection: "row", justifyContent: "space-between" }]}>
                                        <View style={{ alignSelf: "center" }}>

                                            <Text style={Style.icon}>Flat 50 %  OFF </Text>
                                            <Text style={Style.white}>Only on mid night deals </Text>
                                        </View>
                                        <View>
                                            <Image source={require("../../assets/Images/discount_icon.png")} style={{ width: 50, height: 60 }} resizeMethod="scale" />
                                        </View>
                                    </View>
                                </View>


                            </ImageBackground >
                            :
                            null


                    }

                    <View style={{ width: "100%", backgroundColor: "#fff", marginBottom: 50 }}>
                        <Tab />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.MY_CART)} style={Style.foot}>
                            <Text style={{ color: "#fff", }}>View Your Cart</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}

                            >
                                <View style={{ padding: 5, justifyContent: "space-around", borderRadius: 5, backgroundColor: "#fff" }}>
                                    <Text > 1 </Text>
                                </View>
                                <Text style={{ color: "#fff", }}> 275 AED
                                </Text>
                            </View>
                        </TouchableOpacity>
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
                        labelStyle: { fontSize: 16, paddingTop: 5, justifyContent: "space-around", },
                        tabStyle: { justifyContent: "space-around" },
                        style: { height: 50, marginVertical: 5, backgroundColor: "#f9f9f9", },
                    }}

                >
                    <Tab.Screen name="AllOut Deal" component={List}

                    />
                    <Tab.Screen name="Breakfast" component={List} />


                    <Tab.Screen name="Tasty Toasies" component={List} />
                </Tab.Navigator>
            </View >
        );
    }
}

export { Restaurant, Tab }